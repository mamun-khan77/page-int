import type { ValueProp, Feature } from '@/types';

export const valueProps: ValueProp[] = [
  {
    id: 'product',
    title: 'PRODUCT',
    subtitle: 'High-Quality Automobile Service',
    icon: 'PackageCheck',
  },
  {
    id: 'price',
    title: 'PRICE',
    subtitle: 'Competitive Pricing Model',
    icon: 'BadgePercent',
  },
  {
    id: 'promotion',
    title: 'PROMOTION',
    subtitle: 'Enhanced Brand Marketing Support',
    icon: 'Megaphone',
  },
  {
    id: 'place',
    title: 'PLACE',
    subtitle: 'Reliable Distribution & Logistics Infrastructure',
    icon: 'Truck',
  },
];

export const features: Feature[] = [
  {
    id: 'extensive-network',
    title: 'Extensive Network',
    description:
      'PAGE International Limited boasts a comprehensive database of over 500 workshops strategically located throughout Bangladesh, ensuring broad reach and accessibility for clients seeking automotive solutions.',
    icon: 'Network',
  },
  {
    id: 'strong-market-presence',
    title: 'Strong Market Presence',
    description:
      'PAGE International maintains consistent and active communication channels with workshops nationwide, fostering strong relationships and staying informed of market trends and customer needs.',
    icon: 'TrendingUp',
  },
  {
    id: 'industry-connections',
    title: 'Industry Connections',
    description:
      'As a member of the Dhaka and Chittagong Workshop Owner Associations, PAGE International Limited demonstrates its commitment to the automotive industry and its involvement in key industry discussions and developments.',
    icon: 'Handshake',
  },
  {
    id: 'proactive-sales',
    title: 'Proactive Sales',
    description:
      'With a dedicated team undertaking over 100 marketing visits each month, PAGE International actively engages with potential clients, building relationships, and showcasing its products and services.',
    icon: 'Zap',
  },
  {
    id: 'reliable-partner',
    title: 'Reliable Partner',
    description:
      'PAGE International Limited is committed to providing dependable garage equipment and training solutions, supporting its clients\' operational efficiency and workforce development.',
    icon: 'ShieldCheck',
  },
  {
    id: 'focused-expertise',
    title: 'Focused Expertise',
    description:
      'PAGE International Limited specializes in garage equipment and training equipment, allowing the company to provide deep expertise and tailored solutions to its clients within this specific niche.',
    icon: 'Target',
  },
];

export const companyStats = [
  { value: '220+', label: 'Completed Projects' },
  { value: '30+', label: 'Monthly Work-Site Visits' },
  { value: '26', label: 'Team Members' },
  { value: '20+', label: 'Years of Team Experience' },
];

export const distributors = [
  'LAUNCH',
  'SmartSafe',
  'ATS Elgi',
  'WIPRO Enterprises Ltd.',
];

export interface Visionary {
  role: string;
  experience: string;
  bio: string;
  specialties: string[];
}

export const visionaries: Visionary[] = [
  {
    role: 'Managing Director',
    experience: '20+ Years Automotive Experience',
    bio: 'Managing Director of PAGE International, has over 20 years of automotive experience, specializing in sustainable transportation and modern automobile service and training equipment supply. His background in Mechanical Engineering and Finance drives innovation. He aims to redefine mobility in Bangladesh with electric vehicles and global partnerships.',
    specialties: [
      'Sustainable Transportation & EV Mobility',
      'Modern Automobile Service & Training Equipment',
      'Mechanical Engineering & Financial Strategy',
      'Global Partnerships & Technology Transfer',
    ],
  },
  {
    role: 'Director Operation',
    experience: '18+ Years Auto Industry Experience',
    bio: 'Director Operations, leverages his mechanical engineering background and over 18 years of auto industry experience to specialize in vehicle and electric vehicle assembly. His expertise is further honed by R&D training in China and a robust network cultivated through automobile service equipment sales.',
    specialties: [
      'Vehicle & Electric Vehicle Assembly',
      'International R&D Training in China',
      'Automobile Service Equipment Sales Network',
      'Operational Engineering & Workshop Planning',
    ],
  },
];

export interface Pillar {
  id: string;
  title: string;
  description: string;
  iconName: 'Wrench' | 'GraduationCap' | 'Cog' | 'Warehouse' | 'HardHat';
}

export const pillars: Pillar[] = [
  {
    id: 'auto-service',
    title: 'Auto-Service Equipment',
    description: 'Tools and technology for vehicle maintenance and repair.',
    iconName: 'Wrench',
  },
  {
    id: 'auto-training',
    title: 'Auto-Training Equipment',
    description: 'Educational resources for automotive technicians.',
    iconName: 'GraduationCap',
  },
  {
    id: 'spare-parts',
    title: 'Spare Parts',
    description: 'A comprehensive inventory of replacement components.',
    iconName: 'Cog',
  },
  {
    id: 'warehouse-equipment',
    title: 'Warehouse Equipment',
    description: 'Solutions for efficient storage and handling of automotive parts and supplies.',
    iconName: 'Warehouse',
  },
  {
    id: 'construction-equipment',
    title: 'Construction Equipment',
    description: 'Machinery and tools applicable to automotive-related construction and infrastructure projects.',
    iconName: 'HardHat',
  },
];

export const contactInfo = {
  address: 'House 42, Road 11, Block E, Banani, Dhaka 1213, Bangladesh',
  phone: '+880 2 988 1234',
  email: 'info@pageinternational.com.bd',
  hours: 'Saturday – Thursday: 9:00 AM – 6:00 PM',
};

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Garage Equipment', path: '/garage-equipment' },
  { label: 'Electric Vehicle', path: '/electric-vehicle' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'News Feed', path: '/news' },
];

export const footerGarageLinks = [
  { label: 'ADAS Calibration', path: '/garage-equipment?category=adas-calibration' },
  { label: 'Detection Tool', path: '/garage-equipment?category=detection-tool' },
  { label: 'Wheel Equipment', path: '/garage-equipment?category=wheel-equipment' },
  { label: 'Maintenance Equipment', path: '/garage-equipment?category=maintenance-equipment' },
  { label: 'Lifting Equipment', path: '/garage-equipment?category=lifting-equipment' },
];

export const footerEVLinks = [
  { label: '2-Wheeler Electric Bikes', path: '/electric-vehicle/2-wheeler' },
  { label: '3-Wheeler Electric Vehicles', path: '/electric-vehicle/3-wheeler' },
  { label: 'EV Batteries', path: '/electric-vehicle?category=ev-battery' },
  { label: 'EV Motors', path: '/electric-vehicle?category=ev-motor' },
  { label: 'EV Chargers', path: '/electric-vehicle?category=ev-charger' },
  { label: 'EV Parts & Accessories', path: '/electric-vehicle?category=ev-spare-parts' },
];

export const footerProductLinks = footerGarageLinks;
