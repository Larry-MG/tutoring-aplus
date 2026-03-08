export const SUBJECTS = [
  {
    id: 'algebra1',
    title: 'Algebra 1',
    category: 'Math' as const,
    description: 'Linear equations, inequalities, functions & graphing',
    equation: 'y = mx + b',
  },
  {
    id: 'algebra2',
    title: 'Algebra 2',
    category: 'Math' as const,
    description: 'Polynomials, quadratics, exponentials & logarithms',
    equation: 'x = −b ± √(b²−4ac) / 2a',
  },
  {
    id: 'geometry',
    title: 'Geometry',
    category: 'Math' as const,
    description: 'Proofs, triangles, circles, area & volume',
    equation: 'a² + b² = c²',
  },
  {
    id: 'mechanics',
    title: 'Mechanics',
    category: 'Physics' as const,
    description: 'Kinematics, Newton\'s laws, energy, momentum & rotation',
    equation: 'F = ma',
  },
  {
    id: 'electricity',
    title: 'Electricity',
    category: 'Physics' as const,
    description: 'Circuits, Ohm\'s law, capacitors & electric fields',
    equation: 'V = IR',
  },
  {
    id: 'magnetism',
    title: 'Magnetism',
    category: 'Physics' as const,
    description: 'Magnetic fields, induction, Faraday\'s law & applications',
    equation: 'ΣF = 0',
  },
] as const;

export const PRICING_FEATURES = [
  'Personalized 1-on-1 sessions',
  'Customized study plans',
  'Homework & assignment help',
  'Test & exam preparation',
  'Online or in-person flexibility',
  'Progress tracking & feedback',
] as const;

export const CONTACT_INFO = {
  location: 'Oak Park / Agoura Hills, CA',
  locationNote: 'In-person & online available',
  email: 'info@tutoringaplus.com',
  hours: 'Mon — Sat, flexible hours',
  hoursNote: 'Evenings & weekends welcome',
} as const;

export const SUBJECT_OPTIONS = [
  'Algebra 1',
  'Algebra 2',
  'Geometry',
  'Physics — Mechanics',
  'Physics — Electricity',
  'Physics — Magnetism',
  'Multiple Subjects',
] as const;

export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#pricing', label: 'Pricing' },
] as const;

export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
