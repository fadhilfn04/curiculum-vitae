export type SkillCategory = 'Frontend' | 'Backend' | 'Database' | 'DevOps';

export interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
}

export const personal = {
  name: 'Erlanda Pratama Fadhil Ferdian',
  nameFirst: 'Erlanda Pratama',
  nameLast: 'Fadhil Ferdian',
  role: 'Full-Stack Engineer',
  roleDetail: 'Golang · React · TypeScript',
  email: 'fadhilfn04@gmail.com',
  github: 'https://github.com/fadhilfn04',
  githubHandle: 'github.com/fadhilfn04',
  linkedin: 'https://linkedin.com/in/fadhilfn',
  linkedinHandle: 'linkedin.com/in/fadhilfn',
  available: true,
};

export const heroSummary =
  'I design, build, and operate production web platforms end to end — React and Vue.js frontends, REST APIs in Node.js, FastAPI, Golang, and Laravel Lumen, backed by PostgreSQL and MySQL — deployed on Kubernetes with CI/CD on every release.';

export const typewriterPhrases = [
  'building national-scale platforms',
  'designing clean REST APIs',
  'optimizing systems for performance',
  'shipping to production',
];

export const identity = [
  { key: 'name', value: 'Erlanda Pratama Fadhil Ferdian' },
  { key: 'role', value: 'Full-Stack Engineer (Node.js · React · TypeScript)' },
  { key: 'level', value: 'Senior' },
  { key: 'xp', value: '4+ Years' },
  { key: 'status', value: 'online' },
];

export const mission: string[] = [
  'Full-stack software engineer with 4+ years of experience designing, shipping, and operating production web platforms end to end — React and Vue.js frontends, REST APIs in Node.js, FastAPI, and Laravel Lumen, backed by PostgreSQL and MySQL data layers. Currently building national-scale systems for Indonesian government institutions (Kemnaker, ANRI, Komdigi) and enterprise clients such as Indosat.',
  'Focused on performance and reliability at scale: 40% measured application performance gains, real-time data dashboards, data reconciliation pipelines, containerized deployments on Rancher-managed Kubernetes, MinIO S3-compatible object storage, Keycloak SSO, and CI/CD automation on every release.',
  'Beyond the stack, I stay curious — experimenting with AI, bots, IoT, and FPV drones — and I believe strong engineering comes from ownership, clear communication, and products that create measurable impact.',
];

export const traits = [
  'Full-Stack Ownership',
  'Performance Optimization',
  'Scalable Systems',
  'API Design',
  'Team Leadership',
  'Continuous Learning',
];

export const stats = [
  { value: 4, suffix: '+', label: 'Years Experience' },
  { value: 10, suffix: '+', label: 'Production Systems' },
  { value: 5, suffix: '+', label: 'Gov & Enterprise Clients' },
  { value: 100, suffix: 'K+', label: 'Lines of Code' },
];

export const skills: Skill[] = [
  { name: 'TypeScript / JavaScript', level: 92, category: 'Frontend' },
  { name: 'React', level: 90, category: 'Frontend' },
  { name: 'Vue.js', level: 88, category: 'Frontend' },
  { name: 'Node.js', level: 88, category: 'Backend' },
  { name: 'REST API Design', level: 90, category: 'Backend' },
  { name: 'PHP (Laravel / Lumen)', level: 85, category: 'Backend' },
  { name: 'Python (FastAPI)', level: 82, category: 'Backend' },
  { name: 'MySQL', level: 85, category: 'Database' },
  { name: 'PostgreSQL', level: 82, category: 'Database' },
  { name: 'Docker & Containers', level: 80, category: 'DevOps' },
  { name: 'CI/CD Pipelines', level: 78, category: 'DevOps' },
  { name: 'Kubernetes (Rancher)', level: 75, category: 'DevOps' },
  { name: 'MinIO (S3-Compatible Storage)', level: 75, category: 'DevOps' },
];

export const coreStack = [
  'Node.js', 'TypeScript', 'JavaScript', 'React', 'Vue.js', 'REST APIs',
  'PostgreSQL', 'MySQL', 'Supabase', 'FastAPI', 'Laravel Lumen', 'Docker',
  'Kubernetes', 'Rancher', 'CI/CD', 'MinIO (S3)', 'Keycloak SSO',
  'Real-Time Dashboards', 'Data Visualization', 'D3.js',
];

export const exploring = ['AI', 'Bots', 'IoT', 'FPV Drones'];
