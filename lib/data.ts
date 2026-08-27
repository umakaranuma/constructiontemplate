export interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
];

export const WHATSAPP_NUMBER = '94769214278';

export const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export interface SocialLink {
  key: string;
  label: string;
  icon: string;
  href: string;
  brand: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { key: 'facebook', label: 'Facebook', icon: 'fa-brands fa-facebook-f', href: '#', brand: '#1877F2' },
  { key: 'instagram', label: 'Instagram', icon: 'fa-brands fa-instagram', href: '#', brand: '#E1306C' },
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    icon: 'fa-brands fa-whatsapp',
    href: waLink("Hi ApexBuild! I'd like to get in touch."),
    brand: '#25D366',
  },
];

export const HERO_SLIDES = [
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1590644365607-1c5a6404d2b6?auto=format&fit=crop&w=1920&q=80',
];

export interface Stat {
  icon: string;
  count: number;
  label: string;
}

export const STATS: Stat[] = [
  { icon: 'fa-solid fa-building-circle-check', count: 15, label: 'Years Experience' },
  { icon: 'fa-solid fa-city', count: 320, label: 'Projects Completed' },
  { icon: 'fa-solid fa-people-group', count: 280, label: 'Happy Clients' },
  { icon: 'fa-solid fa-helmet-safety', count: 95, label: 'Expert Workers' },
];

export interface Service {
  icon: string;
  title: string;
  desc: string;
}

export const SERVICES: Service[] = [
  {
    icon: 'fa-solid fa-house-chimney',
    title: 'Residential Construction',
    desc: 'Custom homes and housing developments built to your exact specification, on time and on budget.',
  },
  {
    icon: 'fa-solid fa-building',
    title: 'Commercial Construction',
    desc: 'Offices, retail spaces and industrial facilities delivered with minimal disruption to your business.',
  },
  {
    icon: 'fa-solid fa-trowel-bricks',
    title: 'Renovation & Remodeling',
    desc: 'Transform outdated spaces into modern, functional environments with our renovation expertise.',
  },
  {
    icon: 'fa-solid fa-drafting-compass',
    title: 'Architecture & Planning',
    desc: 'In-house design & structural engineering that turns your vision into a buildable blueprint.',
  },
  {
    icon: 'fa-solid fa-couch',
    title: 'Interior Fit-Out',
    desc: 'Bespoke interior design and fit-out services that bring style and function together seamlessly.',
  },
  {
    icon: 'fa-solid fa-road',
    title: 'Infrastructure Development',
    desc: 'Roads, drainage and civil infrastructure projects executed to national engineering standards.',
  },
];

export interface ProcessStep {
  num: string;
  icon: string;
  title: string;
  desc: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  { num: '01', icon: 'fa-solid fa-comments', title: 'Consultation', desc: 'We discuss your vision, budget and timeline to scope the project precisely.' },
  { num: '02', icon: 'fa-solid fa-pen-ruler', title: 'Design & Planning', desc: 'Our engineers create detailed plans, permits and material specifications.' },
  { num: '03', icon: 'fa-solid fa-person-digging', title: 'Construction', desc: 'Skilled crews execute the build with strict quality & safety checkpoints.' },
  { num: '04', icon: 'fa-solid fa-key', title: 'Handover', desc: 'Final walkthrough, snag-list clearance, and keys handed to you on schedule.' },
];

export interface WhyFeature {
  icon: string;
  title: string;
  desc: string;
}

export const WHY_FEATURES: WhyFeature[] = [
  { icon: 'fa-solid fa-medal', title: 'Certified Engineers', desc: 'Licensed structural & civil engineers on every project.' },
  { icon: 'fa-solid fa-clock', title: 'On-Time Delivery', desc: 'Detailed scheduling keeps your project on track.' },
  { icon: 'fa-solid fa-hard-hat', title: 'Safety First', desc: 'Zero-compromise site safety & compliance standards.' },
  { icon: 'fa-solid fa-sack-dollar', title: 'Fair, Fixed Pricing', desc: 'Transparent quotes with no surprise costs later.' },
];

export type ProjectCategory = 'residential' | 'commercial' | 'renovation';

export interface Project {
  id: string;
  cat: ProjectCategory;
  img: string;
  alt: string;
  tag: string;
  title: string;
}

export const PROJECT_FILTERS: { key: 'all' | ProjectCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'residential', label: 'Residential' },
  { key: 'commercial', label: 'Commercial' },
  { key: 'renovation', label: 'Renovation' },
];

export const PROJECTS: Project[] = [
  {
    id: 'cedar-hills-villa',
    cat: 'residential',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    alt: 'Modern residential house',
    tag: 'Residential',
    title: 'Cedar Hills Villa',
  },
  {
    id: 'horizon-business-tower',
    cat: 'commercial',
    img: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80',
    alt: 'Commercial glass office building',
    tag: 'Commercial',
    title: 'Horizon Business Tower',
  },
  {
    id: 'riverside-loft-remodel',
    cat: 'renovation',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    alt: 'Renovated modern interior',
    tag: 'Renovation',
    title: 'Riverside Loft Remodel',
  },
  {
    id: 'meridian-corporate-office',
    cat: 'commercial',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    alt: 'Modern office interior',
    tag: 'Commercial',
    title: 'Meridian Corporate Office',
  },
  {
    id: 'willowbrook-family-home',
    cat: 'residential',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    alt: 'Luxury residential home exterior',
    tag: 'Residential',
    title: 'Willowbrook Family Home',
  },
  {
    id: 'maple-street-kitchen-remodel',
    cat: 'renovation',
    img: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800&q=80',
    alt: 'Renovated kitchen interior',
    tag: 'Renovation',
    title: 'Maple Street Kitchen Remodel',
  },
];

export interface Testimonial {
  stars: number;
  halfStar?: boolean;
  text: string;
  name: string;
  role: string;
  img: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    stars: 5,
    text: "We're really happy with ApexBuild delivering our home renovation two weeks ahead of schedule, and the quality of finishing exceeded what we imagined. Communication was excellent throughout.",
    name: 'Nadeesha & Kasun',
    role: 'Residential Client',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80',
  },
  {
    stars: 5,
    text: 'Professional from day one. The project manager kept us updated weekly and the office fit-out was completed with zero disruption to our operations.',
    name: 'Dilshan Fernando',
    role: 'Meridian Corporate Office',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80',
  },
  {
    stars: 4,
    halfStar: true,
    text: "Transparent pricing, no hidden costs, and a crew that genuinely cared about doing the job right. We'll be using ApexBuild for every future project.",
    name: 'Priya Raj',
    role: 'Cedar Hills Villa',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
  },
];

export const CTA_BANNER_IMAGE =
  'https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1920&q=80';
