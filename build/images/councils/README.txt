BNWO Council Event Photos
=========================

Put council event photos in this folder:

  public/images/councils/

Use a simple file name without spaces, for example:

  lahore-1.webp
  lahore-2.webp
  multan-1.jpg

In the website data file src/config/councils.js, the image path starts from
the public folder, so a photo saved as public/images/councils/lahore-1.webp
is written like this:

  image: '/images/councils/lahore-1.webp'

HOW TO ADD YOUR FIRST EVENT
---------------------------
1. Copy your photo into this folder (public/images/councils/).
2. Open src/config/councils.js.
3. Find the line that says:  export const COUNCIL_EVENTS = [];
4. Put your event inside the square brackets, separated by commas if there is
   more than one event. For example:

   export const COUNCIL_EVENTS = [
     {
       id: 'div-lahore-2026-01',
       councilType: 'division',
       councilId: 'pk-prov-punjab-div-lahore-division',
       title: 'Lahore Division Community Drive',
       date: 'March 15, 2026',
       description: 'A short summary of what happened at this event.',
       image: '/images/councils/lahore-1.webp',
     },
   ];

5. Save the file and reload the website.

FIELD GUIDE
-----------
id          A unique name for the event. Create it once and never change it.
councilType Use 'division' for a Division Council or 'tehsil' for a Tehsil Council.
councilId   The permanent id of that division or tehsil. Open the council page
            and look at the web address; the long code at the end is the id.
            In src/config/councils.js you can also find the ids in the data
            lists that are built from src/data/locations.js.
title       The event title shown on the card.
date        The event date, for example 'March 15, 2026'.
description A short description shown on the card.
image       The photo path, starting with '/images/councils/'.

If an event is added with a councilId that does not match a council, it will
not appear on any council page.
