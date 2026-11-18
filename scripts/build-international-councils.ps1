param(
  [string]$SourceDir = 'C:\Users\mulfa\Downloads',
  [string]$OutFile = (Join-Path (Split-Path $PSScriptRoot -Parent) 'src\data\internationalCouncils.js')
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.IO.Compression.FileSystem

$docs = @(
  @{ Id = 'asia'; Name = 'Asia'; File = '1- Asia All States, Provinces, & Territories (48 Countries).docx' },
  @{ Id = 'africa'; Name = 'Africa'; File = '2- Africa All States, Provinces, & Territories (54 Countries).docx' },
  @{ Id = 'europe'; Name = 'Europe'; File = '3- Europe All States, Provinces, & Territories (44 Countries).docx' },
  @{ Id = 'north-america'; Name = 'North America'; File = '4- North America All States, Provinces, & Territories (23 Countries).docx' },
  @{ Id = 'south-america'; Name = 'South America'; File = '5- South America All States, Provinces, & Territories (12 Countries).docx' },
  @{ Id = 'oceania'; Name = 'Oceania'; File = '6- Oceania All States, Provinces, & Territories (14 Countries).docx' }
)

$namedPrefixes = @(
  'connacht',
  'cornwall county',
  'flemish region',
  'leinster',
  'middlesex county',
  'munster',
  'surrey county',
  'ulster (part)',
  'walloon region'
)

function Get-DocLines {
  param([string]$Path)

  $zip = [System.IO.Compression.ZipFile]::OpenRead($Path)
  try {
    $entry = $zip.Entries | Where-Object { $_.FullName -eq 'word/document.xml' } | Select-Object -First 1
    if (-not $entry) { throw "No word/document.xml in $Path" }
    $reader = New-Object System.IO.StreamReader($entry.Open(), [System.Text.Encoding]::UTF8)
    try {
      $xml = $reader.ReadToEnd()
    } finally {
      $reader.Close()
    }
  } finally {
    $zip.Dispose()
  }

  $text = $xml -replace '</w:p>', "`n" -replace '<w:br[^>]*/>', "`n" -replace '<w:tab[^>]*/>', "`t" -replace '<[^>]+>', ''
  $text = [System.Net.WebUtility]::HtmlDecode($text)

  return @(
    $text -split "`n" |
      ForEach-Object { $_.Trim() } |
      Where-Object { $_ -ne '' }
  )
}

function Get-Slug {
  param([string]$Value)

  $normalized = $Value.Normalize([System.Text.NormalizationForm]::FormD)
  $builder = New-Object System.Text.StringBuilder
  foreach ($char in $normalized.ToCharArray()) {
    if ([System.Globalization.CharUnicodeInfo]::GetUnicodeCategory($char) -ne [System.Globalization.UnicodeCategory]::NonSpacingMark) {
      [void]$builder.Append($char)
    }
  }

  $slug = $builder.ToString().ToLowerInvariant()
  $slug = $slug -replace '&', ' and '
  $slug = $slug -replace "[^a-z0-9]+", '-'
  $slug = $slug.Trim('-')
  if (-not $slug) { $slug = 'council' }
  return $slug
}

function Get-UniqueId {
  param(
    [string]$Value,
    [System.Collections.Generic.HashSet[string]]$Used
  )

  $base = Get-Slug $Value
  $candidate = $base
  $suffix = 2
  while (-not $Used.Add($candidate)) {
    $candidate = "$base-$suffix"
    $suffix++
  }
  return $candidate
}

function Remove-ListNote {
  param([string]$Value)

  # Strip whole-list notes such as "(Major inhabited territories: ...)" from the end of a list.
  return [regex]::Replace($Value, '\.\s*\([^()]*:[^()]*\)\.?\s*$', '')
}

function Split-ListItems {
  param([string]$Value)

  $items = New-Object System.Collections.ArrayList
  $depth = 0
  $start = 0
  for ($i = 0; $i -lt $Value.Length; $i++) {
    $char = $Value[$i]
    if ($char -eq '(') {
      $depth++
    } elseif ($char -eq ')') {
      if ($depth -gt 0) { $depth-- }
    } elseif ($char -eq ',' -and $depth -eq 0) {
      $item = $Value.Substring($start, $i - $start).Trim()
      if ($item) { [void]$items.Add($item) }
      $start = $i + 1
    }
  }
  $item = $Value.Substring($start).Trim()
  if ($item) { [void]$items.Add($item) }
  return ,$items
}

function Get-ExpectedCount {
  param([string]$Bracket)

  $main = ($Bracket -split '\s+[-\u2013\u2014]\s+', 2)[0]
  $numbers = [regex]::Matches($main, '\d+') | ForEach-Object { [int]$_.Value }
  return (($numbers | Measure-Object -Sum).Sum)
}

function Get-DivisionType {
  param([string]$Bracket)

  $main = ($Bracket -split '\s+[-\u2013\u2014]\s+', 2)[0]
  $value = $main -replace '\d+', ''
  $value = $value -replace '\s*&\s*', ' & '
  $value = $value -replace '\s*/\s*', ' / '
  $value = $value -replace '\s+', ' '
  $value = $value.Trim(' ', ',', ';', '-', '&', '/')
  if (-not $value) { return 'Subdivisions' }
  return $value
}

function Add-ListItem {
  param(
    [System.Collections.ArrayList]$Items,
    [string]$Value
  )

  $clean = Remove-ListNote $Value
  $clean = $clean.Trim().TrimEnd('.', ';', ':').Trim()
  if ($clean) { [void]$Items.Add($clean) }
}

$allCountries = New-Object System.Collections.ArrayList
$mismatches = New-Object System.Collections.ArrayList
$continentSummaries = New-Object System.Collections.ArrayList
$continents = New-Object System.Collections.ArrayList

foreach ($doc in $docs) {
  $path = Join-Path $SourceDir $doc.File
  if (-not (Test-Path -LiteralPath $path)) {
    throw "Source document not found: $path"
  }

  $lines = Get-DocLines $path
  $countries = New-Object System.Collections.ArrayList
  $current = $null

  foreach ($line in $lines) {
    if ($line -match 'All States, Provinces') { continue }

    $match = [regex]::Match($line, '^(?<name>.+?)\s*\((?<bracket>[^)]*\d[^)]*)\)\s*:?\s*(?<rest>.*)$')
    if ($match.Success -and $line -notmatch '^\d+\s') {
      if ($current) { [void]$countries.Add($current) }

      $bracket = $match.Groups['bracket'].Value.Trim()
      $current = [pscustomobject]@{
        Name = $match.Groups['name'].Value.Trim()
        DivisionType = Get-DivisionType $bracket
        Expected = Get-ExpectedCount $bracket
        Items = New-Object System.Collections.ArrayList
      }

      $rest = Remove-ListNote $match.Groups['rest'].Value.Trim()
      if ($rest) {
        foreach ($item in (Split-ListItems $rest)) { Add-ListItem $current.Items $item }
      }
      continue
    }

    if (-not $current) { continue }

    $prefix = $null
    $listText = $line
    $prefixMatch = [regex]::Match($line, '^(?<prefix>[^:]{1,120}):\s*(?<list>.+)$')
    if ($prefixMatch.Success) {
      $prefix = $prefixMatch.Groups['prefix'].Value.Trim()
      $listText = $prefixMatch.Groups['list'].Value.Trim()
      $prefixKey = ($prefix -replace '^\d+\s+', '').Trim().ToLowerInvariant()
      if ($namedPrefixes -contains $prefixKey) {
        Add-ListItem $current.Items ($prefix -replace '^\d+\s+', '')
      }
    }

    $cleanList = Remove-ListNote $listText
    foreach ($item in (Split-ListItems $cleanList)) { Add-ListItem $current.Items $item }
  }

  if ($current) { [void]$countries.Add($current) }

  $countryObjects = New-Object System.Collections.ArrayList
  $usedCountryIds = New-Object 'System.Collections.Generic.HashSet[string]'

  foreach ($country in $countries) {
    $usedStateIds = New-Object 'System.Collections.Generic.HashSet[string]'
    $stateObjects = New-Object System.Collections.ArrayList

    foreach ($stateName in $country.Items) {
      [void]$stateObjects.Add([ordered]@{
        id = (Get-UniqueId $stateName $usedStateIds)
        name = $stateName
      })
    }

    $countryObject = [ordered]@{
      id = (Get-UniqueId $country.Name $usedCountryIds)
      name = $country.Name
      divisionType = $country.DivisionType
      states = @($stateObjects.ToArray())
    }
    [void]$countryObjects.Add($countryObject)

    if ($country.Items.Count -ne $country.Expected) {
      [void]$mismatches.Add([pscustomobject]@{
        Continent = $doc.Name
        Country = $country.Name
        Declared = $country.Expected
        Listed = $country.Items.Count
        DivisionType = $country.DivisionType
      })
    }
  }

  $continent = [ordered]@{
    id = $doc.Id
    name = $doc.Name
    countries = @($countryObjects.ToArray())
  }
  $allCountries.AddRange($countries)
  [void]$continentSummaries.Add([pscustomobject]@{
    Continent = $doc.Name
    Countries = $countries.Count
    States = (($countries | ForEach-Object { $_.Items.Count } | Measure-Object -Sum).Sum)
  })
  [void]$continents.Add($continent)
}

$continentsJson = ConvertTo-Json -InputObject @($continents.ToArray()) -Depth 12 -Compress

$helper = @'

export const getAllInternationalCountries = () =>
  internationalCouncils.continents.reduce((countries, continent) => {
    continent.countries.forEach((country) => {
      countries.push({
        ...country,
        continentId: continent.id,
        continentName: continent.name,
      });
    });
    return countries;
  }, []);

export const getAllInternationalStateCouncils = () =>
  internationalCouncils.continents.reduce((states, continent) => {
    continent.countries.forEach((country) => {
      country.states.forEach((state) => {
        states.push({
          ...state,
          countryId: country.id,
          countryName: country.name,
          continentId: continent.id,
          continentName: continent.name,
        });
      });
    });
    return states;
  }, []);

export const getInternationalCountryById = (countryId) =>
  getAllInternationalCountries().find((country) => country.id === countryId) || null;

export const getInternationalStateCouncilById = (countryId, stateId) => {
  const country = getInternationalCountryById(countryId);
  if (!country) return null;
  const state = country.states.find((entry) => entry.id === stateId);
  return state ? { ...state, country } : null;
};
'@

$js = @(
  '// Generated by scripts/build-international-councils.ps1 from the six source DOCX files.',
  '// Display names are preserved exactly as listed in the source documents.',
  'export const internationalCouncils = {',
  "  continents: $continentsJson,",
  '};',
  $helper
) -join "`n"

if (-not [System.IO.Path]::IsPathRooted($OutFile)) { $OutFile = Join-Path (Split-Path $PSScriptRoot -Parent) $OutFile }
$outPath = [System.IO.Path]::GetFullPath($OutFile)
$outDir = Split-Path $outPath -Parent
if (-not (Test-Path -LiteralPath $outDir)) {
  New-Item -ItemType Directory -Path $outDir | Out-Null
}
$utf8 = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($outPath, $js, $utf8)

Write-Output '=== Source summary ==='
$continentSummaries | Format-Table -AutoSize | Out-String | Write-Output
Write-Output ("TOTAL continents: {0}" -f $continents.Count)
Write-Output ("TOTAL countries: {0}" -f $allCountries.Count)
Write-Output ("TOTAL listed state/council entries: {0}" -f (($allCountries | ForEach-Object { $_.Items.Count } | Measure-Object -Sum).Sum))
Write-Output ("TOTAL count mismatches: {0}" -f $mismatches.Count)
Write-Output ''
Write-Output '=== Count mismatches (declared vs listed) ==='
$mismatches | Sort-Object Continent, Country | Format-Table -AutoSize | Out-String | Write-Output
Write-Output ("Wrote: {0}" -f $outPath)
