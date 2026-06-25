export const PROFILE = {
  name: 'George M',
  role: 'Senior React.js Developer',
  tagline: 'Frontend Engineer',
  location: 'Chennai, Tamil Nadu',
  email: 'nijenthen@gmail.com',
  phone: '+91 8248325081',
  links: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
  },
}

export const ABOUT = `I'm a React.js developer with 4+ years designing, building and maintaining scalable single-page applications. I turn business requirements, wireframes and Figma designs into production-ready interfaces — reusable component libraries, clean state management and fast, accessible experiences.`

export const STATS = [
  { value: 4, suffix: '+', label: 'Years building for the web' },
  { value: 60, suffix: '+', label: 'Reusable components shipped' },
  { value: 20, suffix: '+', label: 'REST APIs integrated' },
  { value: 5, suffix: '', label: 'Products taken to production' },
]

export const EXPERIENCE = [
  {
    company: '10xscale.ai',
    role: 'Software Engineer',
    period: 'Nov 2023 — Present',
    notes:
      'SPAs with React, TypeScript & Redux Toolkit. Interactive dashboards, candidate-management & workflow-automation tools. Perf work via code-splitting, memoization & lazy loading.',
  },
  {
    company: 'ABSHRMS',
    role: 'Software Developer',
    period: 'May 2022 — Oct 2023',
    notes:
      'Enterprise HRMS — payroll, attendance & leave. Built a 40+ component library, integrated 20+ REST APIs, and tuned large-dataset rendering with virtualization & pagination.',
  },
]

export const PROJECTS = [
  {
    id: '01',
    name: 'Hire10x',
    kind: 'Recruitment Automation Platform',
    year: '2023 — 25',
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'FastAPI', 'Typesense', 'graphql', 'postgres'],
    blurb:
      'A platform that streamlines hiring — JD creation, candidate sourcing, lead & pipeline management, plus centralised comms across LinkedIn, Gmail, WhatsApp and calls.',
  },
  {
    id: '02',
    name: 'Career Pilot',
    kind: 'Job Aggregation Platform',
    year: '2024 —',
    stack: ['React', 'TypeScript', 'FastAPI', 'REST'],
    blurb:
      'Centralised job discovery aggregating LinkedIn, Naukri, Indeed & Apna. Automated sync workflows and recommendations behind responsive, data-driven dashboards.',
  },
  {
    id: '03',
    name: 'TaskPilot',
    kind: 'Task Management Application',
    year: '2025',
    stack: ['React', 'Redux Toolkit', 'REST'],
    blurb:
      'Role-based dashboards with task assignment, status tracking and collaboration workflows — dynamic UIs with real-time updates and a modular architecture.',
  },
  {
    id: '04',
    name: 'Chrome Extensions',
    kind: 'LinkedIn Lead Extraction · X-Ray Search',
    year: '2026 —',
    stack: ['JavaScript', 'React', 'Chrome APIs'],
    blurb:
      'A lead-extraction extension that maps LinkedIn profiles into recruitment workflows, plus a Google X-Ray query builder to supercharge candidate sourcing.',
  },
  {
    id: '05',
    name: 'HRMS',
    kind: 'Human Resource Management System',
    year: '2023 — 24',
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'REST'],
    blurb:
      'Enterprise HRMS covering payroll, attendance & leave. Built with an extensive component library and optimized for large-dataset rendering via virtualization.',
  },
  {
    id: '06',
    name: 'Interview Pilot',
    kind: 'AI-Powered Interview Platform',
    year: '2025 —',
    stack: ['React', 'AI / LLMs', 'Typescript', 'Redux Toolkit',],
    blurb:
      'A platform to schedule and conduct AI-driven interviews based on resumes and JDs. Features conversational AI for asking mixed programming/choice questions, with proctoring and camera facilities.',
  },
  {
    id: '07',
    name: 'Industry Pilot',
    kind: 'E-Learning Platform',
    year: '2026',
    stack: ['React', 'TypeScript', 'Stripe', 'Video Streaming'],
    blurb:
      'An online course marketplace similar to Udacity and Udemy. Enables users to purchase, access, and track progress across various video-based educational content.',
  },
]

export const SKILLS = [
  {
    group: 'Frontend',
    items: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    group: 'State & Data',
    items: ['Redux Toolkit', 'RTK Query', 'Context API', 'REST', 'Axios', 'JWT / OAuth'],
  },
  {
    group: 'Styling & UI',
    items: ['Tailwind CSS', 'SCSS', 'Material UI', 'Responsive Design', 'Accessibility (ARIA)', 'Shadcn UI'],
  },
  {
    group: 'Performance',
    items: ['Code Splitting', 'Lazy Loading', 'Memoization', 'Virtualization', 'Bundle Optimization'],
  },
  {
    group: 'Testing',
    items: ['Jest', 'React Testing Library', 'Unit Testing', 'Functional Testing'],
  },
  {
    group: 'Tooling & Backend',
    items: ['Git / GitHub', 'CI/CD', 'Docker', 'Webpack', 'FastAPI', 'NestJS', 'Node.js'],
  },
]

export const BADGES = [
  { label: 'React', tone: 'green', style: { top: '6%', left: '8%', rotate: -8 } },
  { label: 'TypeScript', tone: 'plasma', style: { top: '14%', right: '10%', rotate: 7 } },
  { label: 'GSAP', tone: 'green', style: { top: '64%', left: '4%', rotate: 5 } },
  { label: 'Redux', tone: 'outline', style: { bottom: '10%', right: '20%', rotate: -6 } },
  { label: 'Next.js', tone: 'outline', style: { top: '40%', right: '4%', rotate: 10 } },
  { label: 'Tailwind', tone: 'plasma', style: { bottom: '18%', left: '16%', rotate: -10 } },
]

export const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
