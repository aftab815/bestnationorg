import hero1 from '../assets/hero 1.jpeg';
import hero2 from '../assets/hero 2.jpeg';
import hero3 from '../assets/hero 3.jpeg';
import hero4 from '../assets/hero 4.jpeg';

export const siteInfo = {
  name: "BNWO",
  fullName: "Best Nation Welfare Organization",
  email: "info@bestnationorg.com",
  phone: "0321-7777011",
  address: "BNWO GECHS, Block B street no 5 Faisal Town Lahore",
  hours: "Everyday: 9:00 AM - 5:00 PM",
};

export const socialLinks = [
    { icon: "fab fa-facebook-f", url: "https://www.facebook.com/share/1Hm6EVW6BM/", label: "Facebook" },
  { icon: "fab fa-twitter", url: "#", label: "Twitter" },
    { icon: "fab fa-instagram", url: "https://www.instagram.com/bestnationwelfareorganisation?igsh=MTVvY3hoeHgzeGI3cQ==", label: "Instagram" },
  { icon: "fab fa-linkedin-in", url: "#", label: "LinkedIn" },
    { icon: "fab fa-youtube", url: "https://youtube.com/@bestnationofficial?si=9s4fkJBHiJvACujn", label: "YouTube" },
];

export const heroSlides = [
  {
    id: 1,
    title: "Empowering Communities Through Skills & Training",
    description: "Working together to ensure that people getting skills and make a better life ",
    btn1: { text: "Get Involved", link: "/contact" },
    btn2: { text: "Learn More", link: "/about" },
    bg: hero1,
  },
  {
    id: 2,
    title: "Making a Difference Together",
    description: "Providing education, support, and advocacy to improve the lives of individuals and communities throughout the Pakistan.",
    btn1: { text: "Our Work", link: "/what-we-do" },
    btn2: { text: "Join Us", link: "/contact" },
    bg: hero2,
  },
  {
    id: 3,
    title: "Your Voice Matters",
    description: "Join our community of advocates, researchers, and supporters making real change in health policy and treatment access.",
    btn1: { text: "Take Action", link: "/what-we-do" },
    btn2: { text: "Donate Now", link: "/donate" },
    bg: hero4
  },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-hands-helping",
    title: "Treatment Advocacy",
    description: "Advocating for accessible, effective treatments and ensuring community voices are central to treatment decisions and policies.",
    fullDescription: "We work tirelessly to ensure that treatment options are accessible to all. Our advocacy efforts focus on engaging with pharmaceutical companies, healthcare providers, and regulatory bodies to ensure community needs are met. We participate in treatment access negotiations, policy consultations, and community forums to amplify the voices of those most affected.",
  },
  {
    id: 2,
    icon: "fas fa-users",
    title: "Community Engagement",
    description: "Building strong networks of community advocates who can influence research, policy, and service delivery at all levels.",
    fullDescription: "Our community engagement programs bring together diverse groups of people to share experiences, build knowledge, and develop advocacy skills. We organize regular community meetings, workshops, and forums that enable meaningful participation in healthcare decision-making processes.",
  },
  {
    id: 3,
    icon: "fas fa-flask",
    title: "Research Participation",
    description: "Facilitating meaningful community involvement in clinical research and ensuring ethical standards are maintained.",
    fullDescription: "We facilitate community involvement in clinical trials and research studies. Our team works with researchers to ensure studies are designed with community input, ethical standards are maintained, and results are communicated back to participants and the broader community.",
  },
  {
    id: 4,
    icon: "fas fa-balance-scale",
    title: "Policy Development",
    description: "Working with policymakers to shape health policies that reflect the needs and experiences of affected communities.",
    fullDescription: "Our policy work involves engaging with government departments, health authorities, and international organizations to influence health policy. We provide evidence-based recommendations, participate in consultations, and advocate for policies that improve health outcomes.",
  },
  {
    id: 5,
    icon: "fas fa-graduation-cap",
    title: "Education & Training",
    description: "Providing comprehensive education and training programs to build capacity within community organizations and advocates.",
    fullDescription: "We offer a range of educational programs designed to build the knowledge and skills of community advocates. Our training covers treatment literacy, research understanding, policy analysis, and communication skills.",
  },
  {
    id: 6,
    icon: "fas fa-globe-europe",
    title: "International Collaboration",
    description: "Partnering with international organizations to share knowledge, best practices, and advance global health initiatives.",
    fullDescription: "We collaborate with international organizations, community networks, and research institutions around the world. These partnerships enable us to share best practices, learn from global experiences, and contribute to international health initiatives.",
  },
];

export const stats = [
  { id: "stat1", icon: "fas fa-users", target: 5000, label: "Community Members" },
  { id: "stat2", icon: "fas fa-project-diagram", target: 250, label: "Projects Completed" },
  { id: "stat3", icon: "fas fa-calendar-check", target: 180, label: "Events Organized" },
  { id: "stat4", icon: "fas fa-handshake", target: 75, label: "Partner Organizations" },
];

export const newsData = [
  {
    id: 1,
    title: "New Treatment Guidelines Released for Community Review",
    excerpt: "The latest treatment guidelines have been published and are now open for community consultation and feedback from stakeholders across the UK.",
    content: "The latest treatment guidelines have been published and are now open for community consultation and feedback. These guidelines represent months of collaborative work between clinicians, researchers, and community advocates. Key changes include updated recommendations for treatment initiation, new guidance on switching regimens, and enhanced focus on quality of life outcomes.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500",
    date: "Jan 15, 2025",
    author: "Admin",
    category: "Guidelines",
  },
  {
    id: 2,
    title: "Annual Community Conference 2025 Announced",
    excerpt: "Join us for our annual conference bringing together advocates, researchers, and healthcare professionals from across the nation.",
    content: "We are pleased to announce our Annual Community Conference 2025, which will take place on March 15-17 at the London Conference Centre. This year theme is Building Bridges: Community, Research, and Policy. The conference will feature keynote presentations from leading researchers, interactive workshops on advocacy skills, and networking opportunities.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500",
    date: "Jan 10, 2025",
    author: "Admin",
    category: "Events",
  },
  {
    id: 3,
    title: "Partnership Announced with Leading Research Institution",
    excerpt: "We are excited to announce a new partnership that will enhance community involvement in groundbreaking research programs.",
    content: "BNWO is proud to announce a new strategic partnership with the National Institute for Health Research (NIHR). This partnership will facilitate greater community involvement in research design, implementation, and dissemination.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500",
    date: "Jan 05, 2025",
    author: "Admin",
    category: "Partnership",
  },
  {
    id: 4,
    title: "Community Advocacy Workshop Series Launches",
    excerpt: "A new series of workshops designed to build advocacy skills and knowledge among community members across the UK.",
    content: "We are launching a comprehensive workshop series designed to equip community members with the skills and knowledge needed to be effective advocates. The series covers topics including treatment literacy, understanding clinical trials, engaging with policymakers, and media skills.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500",
    date: "Dec 28, 2024",
    author: "Admin",
    category: "Training",
  },
  {
    id: 5,
    title: "Policy Briefing: Healthcare Access and Equity",
    excerpt: "Our latest policy briefing examines the current state of healthcare access and provides recommendations for improvement.",
    content: "BNWO has published a new policy briefing on healthcare access and equity in the UK. The briefing examines barriers to accessing healthcare services, identifies disparities in health outcomes, and provides evidence-based recommendations for policy changes.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500",
    date: "Dec 20, 2024",
    author: "Admin",
    category: "Policy",
  },
  {
    id: 6,
    title: "Volunteer Recognition Awards 2024",
    excerpt: "Celebrating the outstanding contributions of our volunteers who have made a real difference in their communities.",
    content: "We are delighted to announce the winners of our annual Volunteer Recognition Awards. These awards celebrate the outstanding contributions of volunteers who have gone above and beyond to support their communities.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500",
    date: "Dec 15, 2024",
    author: "Admin",
    category: "Community",
  },
];

export const eventsData = [
  {
    id: 1,
    title: "Chamber of Commerce Lahore",
    date: "February 24, 2026",
    time: "11:00 AM - 3:00 PM",
    location: "Lahore Chamber of Commerce & Industry, Lahore",
    description:
      "BNWO joined leaders and members at the Lahore Chamber of Commerce for dialogue on community welfare, partnerships, and how the business community can support outreach and social impact initiatives.",
    image: hero4,
    status: "past",
  },
  {
    id: 2,
    title: "Jhang Ration Distribution",
    date: "October 12, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Jhang, Punjab",
    description:
      "Ration packs and essential groceries were distributed to families in need across Jhang, with volunteers coordinating registration, packing, and handover so support reached those who needed it most.",
    image: hero3,
    status: "past",
  },
];

export const partners = [
  { id: 1, name: "NHS", logo: "NHS" },
  { id: 2, name: "WHO", logo: "WHO" },
  { id: 3, name: "UNAIDS", logo: "UNAIDS" },
  { id: 4, name: "PHE", logo: "PHE" },
  { id: 5, name: "NAT", logo: "NAT" },
  { id: 6, name: "THT", logo: "THT" },
];

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "What We Do", path: "/what-we-do" },
  { name: "News", path: "/news" },
  { name: "Events", path: "/events" },
  { name: "Contact", path: "/contact" },
];