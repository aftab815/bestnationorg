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
    title: "Empowering Communities Through Skills and Opportunity",
    description: "BNWO equips youth and families with education, digital skills, and practical support so they can build stable and dignified futures.",
    btn1: { text: "Join the Mission", link: "/contact" },
    btn2: { text: "About BNWO", link: "/about" },
    bg: hero1,
  },
  {
    id: 2,
    title: "Compassion in Action Across Pakistan",
    description: "From health awareness to emergency response and family assistance, our teams work directly where communities need support most.",
    btn1: { text: "Our Work", link: "/what-we-do" },
    btn2: { text: "Volunteer", link: "/contact" },
    bg: hero2,
  },
  {
    id: 3,
    title: "Sustainable Projects. Measurable Impact.",
    description: "Support our long-term projects in education, health care, women empowerment, and social welfare to create change that lasts.",
    btn1: { text: "Explore Projects", link: "/what-we-do" },
    btn2: { text: "Donate Now", link: "/donate" },
    bg: hero4
  },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-hands-helping",
    title: "Relief and Humanitarian Support",
    description: "Delivering direct help through ration drives, emergency support, and community welfare responses for vulnerable families.",
    fullDescription: "BNWO mobilizes volunteers and partners to deliver timely relief where communities need it most. From food support and emergency response to welfare outreach, our focus is to reduce hardship with dignity and transparency while strengthening local resilience.",
  },
  {
    id: 2,
    icon: "fas fa-users",
    title: "Community Engagement",
    description: "Building local networks of volunteers, educators, and advocates to lead positive social change.",
    fullDescription: "We bring together community leaders, youth, and volunteers through awareness drives, workshops, and welfare campaigns. This model helps communities identify priorities, participate in solutions, and sustain progress through collaboration.",
  },
  {
    id: 3,
    icon: "fas fa-flask",
    title: "Health and Wellbeing Initiatives",
    description: "Promoting preventive care through camps, awareness sessions, and support services in underserved areas.",
    fullDescription: "Our health initiatives include awareness drives, community camps, and practical support that improve access to basic care. We also connect families to trusted resources and encourage healthy habits for long-term wellbeing.",
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
  { id: "stat1", icon: "fas fa-users", target: 12000, label: "Lives Reached" },
  { id: "stat2", icon: "fas fa-project-diagram", target: 160, label: "Active and Delivered Projects" },
  { id: "stat3", icon: "fas fa-calendar-check", target: 320, label: "Community Drives and Sessions" },
  { id: "stat4", icon: "fas fa-handshake", target: 95, label: "Partners and Volunteer Teams" },
];

export const newsData = [
  {
    id: 1,
    title: "BNWO Expands Youth IT Training Batches in Lahore",
    excerpt: "New training cohorts are helping students build employable digital skills through practical labs and mentorship.",
    content: "BNWO has expanded its IT and skill training initiative with new batches focused on digital literacy, office productivity tools, and career readiness. The program combines practical classes with mentorship so youth can move toward internships and employment pathways.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500",
    date: "Jan 15, 2026",
    author: "Admin",
    category: "Guidelines",
  },
  {
    id: 2,
    title: "Ration Distribution Drive Supports Families in Jhang",
    excerpt: "BNWO volunteers completed a coordinated ration campaign to support deserving households during rising inflation.",
    content: "Our field team and volunteers organized a large-scale ration distribution in Jhang with transparent beneficiary registration and on-ground coordination. The campaign provided essential food support to families facing financial pressure and highlighted the strength of community-led welfare.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500",
    date: "Jan 10, 2026",
    author: "Admin",
    category: "Events",
  },
  {
    id: 3,
    title: "Health Awareness and Clean Water Outreach Launched",
    excerpt: "A combined campaign is improving awareness about hygiene, safe water, and preventive health practices.",
    content: "BNWO has launched an integrated outreach model combining health awareness sessions with clean water guidance in underserved neighborhoods. The initiative engages families, youth, and community leaders to promote preventive care and safer daily practices.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500",
    date: "Jan 05, 2026",
    author: "Admin",
    category: "Partnership",
  },
  {
    id: 4,
    title: "Women Empowerment Workshops Reach New Districts",
    excerpt: "Training sessions on vocational skills and confidence building are now active in additional communities.",
    content: "BNWO has scaled women empowerment workshops to new districts with modules on practical skills, entrepreneurship basics, and confidence building. The sessions create safer pathways for women to contribute economically and socially in their communities.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500",
    date: "Dec 28, 2025",
    author: "Admin",
    category: "Training",
  },
  {
    id: 5,
    title: "Dialysis and Blood Support Coordination Strengthened",
    excerpt: "Improved referrals and awareness are helping patients connect faster to ongoing care and donation support.",
    content: "BNWO continues to strengthen community coordination for dialysis and blood support through improved referrals and awareness campaigns. This effort helps vulnerable patients and families navigate care options more efficiently with dignity and guidance.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500",
    date: "Dec 20, 2025",
    author: "Admin",
    category: "Policy",
  },
  {
    id: 6,
    title: "Volunteer Recognition: Local Heroes of BNWO",
    excerpt: "We celebrated dedicated volunteers whose consistency and compassion made large-scale outreach possible.",
    content: "BNWO hosted a volunteer recognition segment to honor individuals and teams that consistently supported welfare activities, field events, and emergency response. Their commitment continues to power our mission and inspire others to serve.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500",
    date: "Dec 15, 2025",
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
  { id: 1, name: "PayPro", logo: "PayPro" },
  { id: 2, name: "Faysal Bank", logo: "Faysal" },
  { id: 3, name: "U Bank", logo: "U Bank" },
  { id: 4, name: "JazzCash", logo: "JazzCash" },
  { id: 5, name: "EasyPaisa", logo: "EasyPaisa" },
  { id: 6, name: "NayaPay", logo: "NayaPay" },
];

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "What We Do", path: "/what-we-do" },
  { name: "News", path: "/news" },
  { name: "Events", path: "/events" },
  { name: "Contact", path: "/contact" },
];