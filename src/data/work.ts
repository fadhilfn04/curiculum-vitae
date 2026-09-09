export interface Experience {
  title: string;
  company: string;
  period: string;
  stack?: string[];
  achievements: string[];
  current?: boolean;
}

export interface Project {
  name: string;
  tech: string[];
  description: string;
  status: 'Active' | 'Staging' | 'Completed';
  type?: string;
  link?: string;
}

export const experiences: Experience[] = [
  {
    title: 'Senior Full Stack Developer',
    company: 'CV. Kabayan Consulting',
    period: '2023 - Present',
    current: true,
    stack: ['Node.js', 'React', 'Vue.js', 'PostgreSQL', 'MySQL', 'Docker', 'Kubernetes (Rancher)', 'MinIO (S3)'],
    achievements: [
      'Lead a 5-person engineering team delivering end-to-end web platforms — from REST API design to production deployment — for clients including Kemnaker, ANRI, Komdigi, and Indosat',
      'Architected national-scale systems now running in production, including the Kemnaker workforce dashboards and the ANRI national archival platform (SIKS)',
      'Increased application performance by 40% through systematic full-stack optimization of APIs, database queries, and frontend delivery',
      'Implemented CI/CD pipelines to automate builds, testing, and deployments, cutting manual release effort',
      'Owned production infrastructure concerns: containerized deployments on Rancher-managed Kubernetes, MinIO S3-compatible object storage, and Keycloak SSO integration',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'PT. Kabayan Aishwarya Nusantara',
    period: '2022 - 2023',
    stack: ['Vue.js', 'React', 'TypeScript', 'Laravel', 'MySQL'],
    achievements: [
      'Built responsive, data-intensive web applications and dashboards for enterprise clients, contributing to the Indosat HR platform suite (MyTalent, MyDevelopment, MyHiring)',
      'Improved user engagement by 25% through UX-driven frontend refinement and page performance tuning',
      'Mentored junior developers through code reviews and pairing, raising delivery quality across the team',
    ],
  },
  {
    title: 'Junior Developer',
    company: 'Inovindo Digital Media',
    period: '2020 - 2021',
    achievements: [
      'Shipped MVP features for client web applications in fast, iterative delivery cycles',
      'Collaborated with the design team to translate UI/UX specifications into responsive, production-ready interfaces',
      'Built strong foundations in modern JavaScript frameworks, API integration, and agile delivery practices',
    ],
  },
];

export const projects: Project[] = [
  {
    name: 'Sistem Informasi Kearsipan Statis (SIKS) ANRI',
    tech: ['Vue.js', 'Rancher (Kubernetes)', 'Keycloak', 'MinIO (S3)', 'PostgreSQL'],
    description: 'National static-archive platform for Indonesia’s National Archives: Keycloak SSO authentication, MinIO S3-compatible object storage for archival files, and a PostgreSQL data layer — deployed on Rancher-managed Kubernetes.',
    status: 'Active',
    type: 'Full-Stack Platform · Government',
    link: 'https://siks.arsip.go.id/',
  },
  {
    name: 'Dashboard Pemadanan Data Kemnaker',
    tech: ['Vue.js', 'Python', 'FastAPI', 'PostgreSQL'],
    description: 'Data reconciliation platform that matches and validates records across multiple labor-market datasets to guarantee accuracy and consistency — Vue.js frontend over decoupled FastAPI REST services.',
    status: 'Active',
    type: 'Data Platform · Government',
    link: 'https://pemadanandata.kemnaker.go.id/',
  },
  {
    name: 'Dashboard Tenaga Kerja Kemnaker (MATATK)',
    tech: ['Vue.js', 'Python', 'FastAPI', 'PostgreSQL'],
    description: 'Labor-market analytics dashboard delivering insights into workforce distribution and labor trends — Vue.js frontend consuming FastAPI REST APIs backed by PostgreSQL.',
    status: 'Active',
    type: 'Analytics Platform · Government',
    link: 'https://matatk.kemnaker.go.id/',
  },
  {
    name: 'Dashboard Pelatihan Tenaga Kerja Kemnaker (MATAPVP)',
    tech: ['Vue.js', 'Laravel Lumen', 'PostgreSQL'],
    description: 'Monitoring platform for the Ministry of Manpower’s workforce training programs — Vue.js frontend over Laravel Lumen REST services and PostgreSQL.',
    status: 'Active',
    type: 'Monitoring Platform · Government',
    link: 'https://matapvp.kemnaker.go.id/',
  },
  {
    name: 'E-Commerce Platform',
    tech: ['React', 'Node.js', 'MongoDB'],
    description: 'End-to-end commerce product: React storefront backed by Node.js REST APIs and MongoDB, with integrated payment processing from cart to checkout.',
    status: 'Completed',
    type: 'Full-Stack Product',
  },
  {
    name: 'Dashboard Ekonomi Kreatif Jawa Barat',
    tech: ['React', 'Node.js', 'Supabase'],
    description: 'Full-stack dashboard visualizing the creative-economy sector across West Java — React frontend, Node.js services, and Supabase (PostgreSQL) backend.',
    status: 'Staging',
    type: 'Full-Stack Product',
    link: 'http://194.233.75.135:3000/',
  },
  {
    name: 'SiiTeung Task Management',
    tech: ['Laravel', 'MySQL'],
    description: 'Collaborative task management application with real-time updates, keeping distributed teams in sync — built on Laravel and MySQL.',
    status: 'Active',
    type: 'Full-Stack Product',
    link: 'https://siiteung.kabayan.id/',
  },
  {
    name: 'Data Visualization Dashboard',
    tech: ['D3.js', 'Python', 'FastAPI'],
    description: 'Interactive analytics dashboard for exploring complex datasets — D3.js visualizations powered by FastAPI services.',
    status: 'Completed',
    type: 'Data & Analytics',
  },
  {
    name: 'MyTalent Indosat',
    tech: ['Laravel', 'MySQL'],
    description: 'Human Resource Information System managing employee data and core HR processes for Indosat — Laravel + MySQL.',
    status: 'Completed',
    type: 'Enterprise System',
  },
  {
    name: 'MyDevelopment Indosat',
    tech: ['Laravel', 'MySQL'],
    description: 'Employee development tracking system supporting training, skills growth, and performance improvement for Indosat — Laravel + MySQL.',
    status: 'Completed',
    type: 'Enterprise System',
  },
  {
    name: 'MyHiring Indosat',
    tech: ['Laravel', 'MySQL'],
    description: 'Recruitment and hiring platform streamlining Indosat’s talent acquisition pipeline — Laravel + MySQL.',
    status: 'Completed',
    type: 'Enterprise System',
  },
  {
    name: 'Sistem Informasi Keuangan (SIMKEU) Komdigi',
    tech: ['Laravel', 'MySQL'],
    description: 'Financial management system handling budgeting, transactions, and reporting for Komdigi — Laravel + MySQL.',
    status: 'Active',
    type: 'Enterprise System · Government',
    link: 'https://simkeu-e-penyiaran.komdigi.go.id/',
  },
];

export const impact = [
  {
    icon: 'gauge',
    value: '+40%',
    title: 'Performance Gain',
    description: 'Application speed lifted 40% through full-stack optimization — APIs, database queries, and frontend delivery.',
  },
  {
    icon: 'globe',
    value: 'National Scale',
    title: 'Government Platforms',
    description: 'Kemnaker, ANRI, and Komdigi systems architected, delivered, and running in national production.',
  },
  {
    icon: 'users',
    value: '5 Engineers',
    title: 'Team Leadership',
    description: 'Leading a 5-person engineering team from REST API design all the way to production deployment.',
  },
  {
    icon: 'trending',
    value: '+25%',
    title: 'User Engagement',
    description: 'UX-driven refinement and performance tuning on the Indosat HR platform suite.',
  },
  {
    icon: 'workflow',
    value: 'CI/CD',
    title: 'Automated Delivery',
    description: 'Pipelines automating build, test, and deployment — manual release effort eliminated.',
  },
  {
    icon: 'shield',
    value: 'Prod Infra',
    title: 'Infrastructure Ownership',
    description: 'Kubernetes (Rancher), MinIO S3-compatible storage, and Keycloak SSO owned in production.',
  },
] as const;

export interface ArchitectureLayer {
  path: string;
  label: string;
  icon: 'monitor' | 'server' | 'boxes' | 'container';
  description: string;
  tech: string[];
}

export const architectureLayers: ArchitectureLayer[] = [
  {
    path: 'client/',
    label: 'Client Layer',
    icon: 'monitor',
    description: 'React & Vue.js SPAs, real-time dashboards, and data visualization interfaces',
    tech: ['React', 'Vue.js', 'TypeScript', 'D3.js'],
  },
  {
    path: 'api/',
    label: 'API Layer',
    icon: 'server',
    description: 'REST services designed for scale, security, and clean contracts',
    tech: ['Node.js', 'FastAPI', 'Laravel Lumen'],
  },
  {
    path: 'platform/',
    label: 'Platform Services',
    icon: 'boxes',
    description: 'Identity, storage, and data backends powering every product',
    tech: ['Keycloak SSO', 'MinIO (S3)', 'PostgreSQL', 'MySQL'],
  },
  {
    path: 'infra/',
    label: 'Infrastructure',
    icon: 'container',
    description: 'Containerized deployments, orchestrated and fully automated',
    tech: ['Docker', 'Kubernetes (Rancher)', 'CI/CD'],
  },
];

export const monitorLogs = [
  '✓ deploy/siks-frontend — rollout complete · 42d uptime',
  '✓ pemadanan-api — 0 restarts · p95 84ms',
  '✓ matatk-worker — cron sync ok · 3.2k records',
  '✓ ci/cd pipeline #1204 — build passed · 2m 18s',
  '→ autoscaler — steady at 3 replicas',
  '✓ nightly backup — minio://archive · 128GB',
  '→ keycloak — 1.4k active sessions',
  '✓ ssl certificates — renewed · 0 downtime',
];

