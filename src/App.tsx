import React, { useState, useEffect } from 'react';
import { ChevronRight, Terminal, User, Code, Briefcase, Rocket, Mail, Star, Zap, Shield, Cpu, Wifi, Battery, Signal } from 'lucide-react';
import profileImg from "./image/1.jpg";

interface Zone {
  id: string;
  name: string;
  icon: React.ReactNode;
  completed: boolean;
  description: string;
}

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  stack?: string[];
  achievements: string[];
}

interface Project {
  name: string;
  tech: string[];
  description: string;
  status: string;
  link?: string;
  type?: string;
}

function App() {
  const [currentZone, setCurrentZone] = useState<string>('home');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [systemTime, setSystemTime] = useState<string>('');
  const [zones] = useState<Zone[]>([
    { id: 'bio', name: 'Bio Terminal', icon: <User size={20} />, completed: false, description: 'Profile & Engineering Summary' },
    { id: 'skills', name: 'Skills Matrix', icon: <Code size={20} />, completed: false, description: 'Core Stack & Proficiency Levels' },
    { id: 'experience', name: 'Experience Archive', icon: <Briefcase size={20} />, completed: false, description: 'Production Roles & Impact' },
    { id: 'projects', name: 'Projects Lab', icon: <Rocket size={20} />, completed: false, description: 'Shipped Systems & Platforms' },
    { id: 'contact', name: 'Contact Portal', icon: <Mail size={20} />, completed: false, description: 'Channels & Direct Message' }
  ]);

  const [completedZones, setCompletedZones] = useState<Set<string>>(new Set());

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setSystemTime(now.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const skills: Skill[] = [
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
    { name: 'MinIO (S3-Compatible Storage)', level: 75, category: 'DevOps' }
  ];

  const coreStack = [
    'Node.js', 'TypeScript', 'JavaScript', 'React', 'Vue.js', 'REST APIs',
    'PostgreSQL', 'MySQL', 'Supabase', 'FastAPI', 'Laravel Lumen', 'Docker',
    'Kubernetes', 'Rancher', 'CI/CD', 'MinIO (S3)', 'Keycloak SSO',
    'Real-Time Dashboards', 'Data Visualization', 'D3.js'
  ];

  const experiences: Experience[] = [
    {
      title: 'Senior Full Stack Developer',
      company: 'CV. Kabayan Consulting',
      period: '2023 - Present',
      stack: ['Node.js', 'React', 'Vue.js', 'PostgreSQL', 'MySQL', 'Docker', 'Kubernetes (Rancher)', 'MinIO (S3)'],
      achievements: [
        'Lead a 5-person engineering team delivering end-to-end web platforms — from REST API design to production deployment — for clients including Kemnaker, ANRI, Komdigi, and Indosat',
        'Architected national-scale systems now running in production, including the Kemnaker workforce dashboards and the ANRI national archival platform (SIKS)',
        'Increased application performance by 40% through systematic full-stack optimization of APIs, database queries, and frontend delivery',
        'Implemented CI/CD pipelines to automate builds, testing, and deployments, cutting manual release effort',
        'Owned production infrastructure concerns: containerized deployments on Rancher-managed Kubernetes, MinIO S3-compatible object storage, and Keycloak SSO integration'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'PT. Kabayan Aishwarya Nusantara',
      period: '2022 - 2023',
      stack: ['Vue.js', 'React', 'TypeScript', 'Laravel', 'MySQL'],
      achievements: [
        'Built responsive, data-intensive web applications and dashboards for enterprise clients, contributing to the Indosat HR platform suite (MyTalent, MyDevelopment, MyHiring)',
        'Improved user engagement by 25% through UX-driven frontend refinement and page performance tuning',
        'Mentored junior developers through code reviews and pairing, raising delivery quality across the team'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'Inovindo Digital Media',
      period: '2020 - 2021',
      achievements: [
        'Shipped MVP features for client web applications in fast, iterative delivery cycles',
        'Collaborated with the design team to translate UI/UX specifications into responsive, production-ready interfaces',
        'Built strong foundations in modern JavaScript frameworks, API integration, and agile delivery practices'
      ]
    }
  ];

  const projects: Project[] = [
    {
      name: 'Sistem Informasi Kearsipan Statis (SIKS) ANRI',
      tech: ['Vue.js', 'Rancher (Kubernetes)', 'Keycloak', 'MinIO (S3)', 'PostgreSQL'],
      description: 'National static-archive platform for Indonesia’s National Archives: Keycloak SSO authentication, MinIO S3-compatible object storage for archival files, and a PostgreSQL data layer — deployed on Rancher-managed Kubernetes.',
      status: 'Active',
      type: 'Full-Stack Platform · Government',
      link: 'https://siks.arsip.go.id/'
    },
    {
      name: 'Dashboard Pemadanan Data Kemnaker',
      tech: ['Vue.js', 'Python', 'FastAPI', 'PostgreSQL'],
      description: 'Data reconciliation platform that matches and validates records across multiple labor-market datasets to guarantee accuracy and consistency — Vue.js frontend over decoupled FastAPI REST services.',
      status: 'Active',
      type: 'Data Platform · Government',
      link: 'https://pemadanandata.kemnaker.go.id/'
    },
    {
      name: 'Dashboard Tenaga Kerja Kemnaker (MATATK)',
      tech: ['Vue.js', 'Python', 'FastAPI', 'PostgreSQL'],
      description: 'Labor-market analytics dashboard delivering insights into workforce distribution and labor trends — Vue.js frontend consuming FastAPI REST APIs backed by PostgreSQL.',
      status: 'Active',
      type: 'Analytics Platform · Government',
      link: 'https://matatk.kemnaker.go.id/'
    },
    {
      name: 'Dashboard Pelatihan Tenaga Kerja Kemnaker (MATAPVP)',
      tech: ['Vue.js', 'Laravel Lumen', 'PostgreSQL'],
      description: 'Monitoring platform for the Ministry of Manpower’s workforce training programs — Vue.js frontend over Laravel Lumen REST services and PostgreSQL.',
      status: 'Active',
      type: 'Monitoring Platform · Government',
      link: 'https://matapvp.kemnaker.go.id/'
    },
    {
      name: 'E-Commerce Platform',
      tech: ['React', 'Node.js', 'MongoDB'],
      description: 'End-to-end commerce product: React storefront backed by Node.js REST APIs and MongoDB, with integrated payment processing from cart to checkout.',
      status: 'Completed',
      type: 'Full-Stack Product'
    },
    {
      name: 'Dashboard Ekonomi Kreatif Jawa Barat',
      tech: ['React', 'Node.js', 'Supabase'],
      description: 'Full-stack dashboard visualizing the creative-economy sector across West Java — React frontend, Node.js services, and Supabase (PostgreSQL) backend.',
      status: 'Staging',
      type: 'Full-Stack Product',
      link: 'http://194.233.75.135:3000/'
    },
    {
      name: 'SiiTeung Task Management',
      tech: ['Laravel', 'MySQL'],
      description: 'Collaborative task management application with real-time updates, keeping distributed teams in sync — built on Laravel and MySQL.',
      status: 'Active',
      type: 'Full-Stack Product',
      link: 'https://siiteung.kabayan.id/'
    },
    {
      name: 'Data Visualization Dashboard',
      tech: ['D3.js', 'Python', 'FastAPI'],
      description: 'Interactive analytics dashboard for exploring complex datasets — D3.js visualizations powered by FastAPI services.',
      status: 'Completed',
      type: 'Data & Analytics'
    },
    {
      name: 'MyTalent Indosat',
      tech: ['Laravel', 'MySQL'],
      description: 'Human Resource Information System managing employee data and core HR processes for Indosat — Laravel + MySQL.',
      status: 'Completed',
      type: 'Enterprise System'
    },
    {
      name: 'MyDevelopment Indosat',
      tech: ['Laravel', 'MySQL'],
      description: 'Employee development tracking system supporting training, skills growth, and performance improvement for Indosat — Laravel + MySQL.',
      status: 'Completed',
      type: 'Enterprise System'
    },
    {
      name: 'MyHiring Indosat',
      tech: ['Laravel', 'MySQL'],
      description: 'Recruitment and hiring platform streamlining Indosat’s talent acquisition pipeline — Laravel + MySQL.',
      status: 'Completed',
      type: 'Enterprise System'
    },
    {
      name: 'Sistem Informasi Keuangan (SIMKEU) Komdigi',
      tech: ['Laravel', 'MySQL'],
      description: 'Financial management system handling budgeting, transactions, and reporting for Komdigi — Laravel + MySQL.',
      status: 'Active',
      type: 'Enterprise System · Government',
      link: 'https://simkeu-e-penyiaran.komdigi.go.id/'
    }
  ];

  const handleZoneVisit = (zoneId: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentZone(zoneId);
      setCompletedZones(prev => new Set([...prev, zoneId]));
      setIsLoading(false);
    }, 800);
  };

  const progressPercentage = (completedZones.size / zones.length) * 100;

  const renderParticles = () => {
    return Array.from({ length: 50 }, (_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 2}s`
        }}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-cyan-100 overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {renderParticles()}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse" />
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-1000 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Navigation Header */}
      <header className="relative z-40 p-6 border-b border-cyan-500/30 bg-slate-900/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Terminal className="text-cyan-400 animate-pulse" size={24} />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              CV_INTERFACE.exe
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs font-mono text-green-400">
              <Wifi size={14} />
              <Signal size={14} />
              <Battery size={14} />
              <span>{systemTime}</span>
            </div>
            <div className="text-sm font-mono text-cyan-400">
              PROGRESS: {completedZones.size}/{zones.length} ZONES EXPLORED
            </div>
          </div>
        </div>
      </header>

      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 bg-slate-900/95 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="relative">
              <div className="w-20 h-20 border-4 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin mx-auto mb-4" />
              <Cpu className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-400" size={24} />
            </div>
            <p className="text-cyan-400 font-mono text-lg">LOADING ZONE...</p>
            <div className="flex justify-center gap-1 mt-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <main className="relative z-30 max-w-6xl mx-auto p-6">
        {currentZone === 'home' && (
          <div className="text-center py-20 animate-fade-in">
            <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/40 rounded-full text-sm font-mono text-cyan-300 tracking-wider">
              FULL-STACK ENGINEER · NODE.JS · REACT · TYPESCRIPT
            </div>
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              WELCOME TO THE GRID
            </h2>
            <p className="text-xl mb-6 text-cyan-300 font-mono">
              4+ years shipping scalable, production-grade web platforms end to end
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {['REST APIs', 'PostgreSQL / MySQL', 'Docker & Kubernetes', 'S3-Compatible Storage', 'Real-Time Dashboards', 'Performance Optimization'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-slate-800/60 border border-purple-500/30 rounded-full text-xs font-mono text-purple-300 hover:bg-purple-500/20 hover:border-purple-400/50 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {zones.map((zone, index) => (
                <div
                  key={zone.id}
                  className="group relative bg-gradient-to-br from-slate-800/50 to-purple-900/30 border border-cyan-500/30 rounded-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/25"
                  onClick={() => handleZoneVisit(zone.id)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      {zone.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-cyan-100">{zone.name}</h3>
                    {completedZones.has(zone.id) && (
                      <Star className="text-yellow-400 ml-auto" size={16} />
                    )}
                  </div>
                  <p className="text-cyan-300/70 text-sm mb-4">{zone.description}</p>
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-mono">ENTER ZONE</span>
                    <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentZone === 'bio' && (
          <div className="py-12 animate-fade-in">
            <div className="bg-gradient-to-br from-slate-800/60 to-cyan-900/40 border border-cyan-500/40 rounded-xl p-8 mb-8 shadow-2xl shadow-cyan-500/10">
              <h2 className="text-4xl font-bold mb-6 text-cyan-400 font-mono">BIO_TERMINAL.exe</h2>
              
              {/* Profile Picture Section */}
              <div className="flex justify-center mb-8">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
                  <div className="relative w-32 h-32 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full border-2 border-cyan-400/50 overflow-hidden">
                    <img
                      src={profileImg}
                      alt="Profile"
                      className="w-full h-full object-cover [object-position:center_15%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent" />
                    <div className="absolute bottom-2 right-2">
                      <div className="w-4 h-4 bg-green-400 rounded-full border-2 border-slate-800 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-purple-400 flex items-center gap-2">
                    <Shield size={20} />
                    IDENTITY_DATA
                  </h3>
                  <div className="space-y-3 font-mono bg-slate-800/30 p-4 rounded-lg border border-cyan-500/20">
                    <div className="flex items-center gap-2 p-2 hover:bg-cyan-500/10 rounded transition-colors">
                      <span className="text-cyan-400 w-24">NAME:</span> 
                      <span className="text-cyan-100">Erlanda Pratama Fadhil Ferdian</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 hover:bg-cyan-500/10 rounded transition-colors">
                      <span className="text-cyan-400 w-24">ROLE:</span> 
                      <span className="text-cyan-100">Full-Stack Engineer (Node.js · React · TypeScript)</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 hover:bg-cyan-500/10 rounded transition-colors">
                      <span className="text-cyan-400 w-24">LEVEL:</span> 
                      <span className="text-green-400 font-bold">Senior</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 hover:bg-cyan-500/10 rounded transition-colors">
                      <span className="text-cyan-400 w-24">XP:</span> 
                      <span className="text-purple-400">4+ Years</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 hover:bg-cyan-500/10 rounded transition-colors">
                      <span className="text-cyan-400 w-24">STATUS:</span> 
                      <span className="text-green-400 flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        ONLINE
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-purple-400 flex items-center gap-2">
                    <Cpu size={20} />
                    MISSION_STATEMENT
                  </h3>
                  <div className="bg-slate-800/30 p-4 rounded-lg border border-purple-500/20">
                    <p className="text-cyan-100 leading-relaxed mb-4">
                      Full-stack software engineer with 4+ years of experience designing, shipping, and
                      operating production web platforms end to end — React and Vue.js frontends, REST
                      APIs in Node.js, FastAPI, and Laravel Lumen, backed by PostgreSQL and MySQL data
                      layers. Currently building national-scale systems for Indonesian government
                      institutions (Kemnaker, ANRI, Komdigi) and enterprise clients such as Indosat.
                    </p>
                    <p className="text-cyan-100 leading-relaxed mb-4">
                      Focused on performance and reliability at scale: 40% measured application
                      performance gains, real-time data dashboards, data reconciliation pipelines,
                      containerized deployments on Rancher-managed Kubernetes, MinIO S3-compatible
                      object storage, Keycloak SSO, and CI/CD automation on every release.
                    </p>
                    <p className="text-cyan-100 leading-relaxed">
                      Beyond the stack, I stay curious — experimenting with AI, bots, speech-to-text,
                      IoT, and FPV drones — and I believe strong engineering comes from ownership, clear
                      communication, and products that create measurable impact.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {['Full-Stack Ownership', 'Performance Optimization', 'Scalable Systems', 'API Design', 'Team Leadership', 'Continuous Learning'].map((trait) => (
                        <span
                          key={trait}
                          className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs font-mono text-purple-300 hover:bg-purple-500/30 transition-colors"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio Stats */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Years Experience', value: '4+', color: 'text-green-400' },
                  { label: 'Production Systems', value: '10+', color: 'text-cyan-400' },
                  { label: 'Gov & Enterprise Clients', value: '5+', color: 'text-yellow-400' },
                  { label: 'Lines of Code', value: '100K+', color: 'text-purple-400' }
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className="bg-slate-800/40 border border-cyan-500/20 rounded-lg p-4 text-center hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`text-2xl font-bold font-mono ${stat.color} mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-cyan-300/70 font-mono uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => setCurrentZone('home')}
              className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 font-mono"
            >
              &lt; RETURN_TO_GRID
            </button>
          </div>
        )}

        {currentZone === 'skills' && (
          <div className="py-12 animate-fade-in">
            <div className="bg-gradient-to-br from-slate-800/60 to-green-900/40 border border-green-500/40 rounded-xl p-8 mb-8 shadow-2xl shadow-green-500/10">
              <h2 className="text-4xl font-bold mb-6 text-green-400 font-mono flex items-center gap-3">
                <Code className="animate-pulse" />
                SKILLS_MATRIX.exe
              </h2>
              
              <p className="text-cyan-100 leading-relaxed mb-6">
                Production-oriented full-stack toolkit refined across 4+ years of shipping and
                operating real systems — from TypeScript/React frontends and Node.js REST APIs to
                PostgreSQL/MySQL data layers and containerized infrastructure.
              </p>

              {/* Skill Categories */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Frontend', 'Backend', 'Database', 'DevOps'].map((category) => (
                    <span
                      key={category}
                      className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-sm font-mono text-green-300 hover:bg-green-500/30 transition-colors cursor-pointer"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              {/* Core Stack Keywords */}
              <div>
                <div className="text-xs font-mono text-green-400/80 mb-3">CORE_STACK //</div>
                <div className="flex flex-wrap gap-2">
                  {coreStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-800/60 border border-cyan-500/30 rounded-full text-xs font-mono text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-green-900/30 border border-green-500/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-green-300 font-mono flex items-center gap-2">
                <Zap size={20} className="animate-pulse" />
                PROFICIENCY_LEVELS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="bg-slate-800/40 border border-green-500/30 rounded-lg p-6 hover:border-green-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold text-green-300 text-lg">{skill.name}</span>
                      <span className="text-sm font-mono text-green-400 bg-green-500/20 px-2 py-1 rounded">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-3 mb-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-green-500 to-cyan-400 h-3 rounded-full transition-all duration-1500 ease-out relative overflow-hidden"
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-green-400/70 font-mono bg-slate-700/30 px-2 py-1 rounded">{skill.category}</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < Math.floor(skill.level / 20) ? 'bg-green-400' : 'bg-slate-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => setCurrentZone('home')}
              className="bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25 font-mono"
            >
              &lt; RETURN_TO_GRID
            </button>
          </div>
        )}

        {currentZone === 'experience' && (
          <div className="py-12 animate-fade-in">
            <div className="bg-gradient-to-br from-slate-800/60 to-orange-900/40 border border-orange-500/40 rounded-xl p-8 mb-8 shadow-2xl shadow-orange-500/10">
              <h2 className="text-4xl font-bold mb-6 text-orange-400 font-mono flex items-center gap-3">
                <Briefcase className="animate-pulse" />
                EXPERIENCE_ARCHIVE.exe
              </h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/40 border border-orange-500/30 rounded-lg p-6 hover:border-orange-400/60 transition-all duration-300 transform hover:scale-102 hover:shadow-lg hover:shadow-orange-500/20"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 border-b border-orange-500/20 pb-3">
                      <h3 className="text-xl font-bold text-orange-300 flex items-center gap-2">
                        <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse" />
                        {exp.title}
                      </h3>
                      <span className="text-orange-400 font-mono text-sm bg-orange-500/20 px-3 py-1 rounded-full">{exp.period}</span>
                    </div>
                    <p className="text-orange-200 mb-4 font-semibold text-lg">{exp.company}</p>
                    {exp.stack && exp.stack.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-mono text-cyan-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-3 p-2 hover:bg-orange-500/10 rounded transition-colors">
                          <Zap className="text-orange-400 flex-shrink-0 animate-pulse" size={16} />
                          <span className="text-cyan-100 flex-1">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => setCurrentZone('home')}
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/25 font-mono"
            >
              &lt; RETURN_TO_GRID
            </button>
          </div>
        )}

        {currentZone === 'projects' && (
          <div className="py-12 animate-fade-in">
            <div className="bg-gradient-to-br from-slate-800/60 to-pink-900/40 border border-pink-500/40 rounded-xl p-8 mb-8 shadow-2xl shadow-pink-500/10">
              <h2 className="text-4xl font-bold mb-6 text-pink-400 font-mono flex items-center gap-3">
                <Rocket className="animate-pulse" />
                PROJECTS_LAB.exe
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/40 border border-pink-500/30 rounded-lg p-6 hover:border-pink-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse" />
                      <h3 className="text-lg font-bold text-pink-300 group-hover:text-pink-200 transition-colors">{project.name}</h3>
                    </div>
                    {project.type && (
                      <span className="inline-block mb-2 px-2.5 py-1 bg-purple-500/10 border border-purple-500/30 rounded text-xs font-mono text-purple-300">
                        {project.type}
                      </span>
                    )}
                    <p className="text-cyan-100 text-sm mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-pink-500/20 border border-pink-500/30 rounded-full text-xs font-mono text-pink-300 hover:bg-pink-500/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-green-400 text-sm font-mono">{project.status}</span>
                      </div>
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-400 hover:text-pink-300 transition-colors"
                        >
                          <ChevronRight size={16} />
                        </a>
                      ) : (
                        <span className="text-slate-500 cursor-not-allowed">
                          <ChevronRight size={16} />
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => setCurrentZone('home')}
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-500/25 font-mono"
            >
              &lt; RETURN_TO_GRID
            </button>
          </div>
        )}

        {currentZone === 'contact' && (
          <div className="py-12 animate-fade-in">
            <div className="bg-gradient-to-br from-slate-800/60 to-blue-900/40 border border-blue-500/40 rounded-xl p-8 mb-8 shadow-2xl shadow-blue-500/10">
              <h2 className="text-4xl font-bold mb-6 text-blue-400 font-mono flex items-center gap-3">
                <Mail className="animate-pulse" />
                CONTACT_PORTAL.exe
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-purple-400 flex items-center gap-2">
                    <Signal size={20} />
                    COMMUNICATION_CHANNELS
                  </h3>
                  <div className="space-y-4 font-mono">
                    <div className="flex items-center gap-3 p-4 bg-slate-800/40 border border-blue-500/30 rounded-lg hover:border-blue-400/60 transition-all cursor-pointer transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                      <Mail className="text-blue-400" size={20} />
                      <div>
                        <div className="text-blue-300">fadhilfn04@gmail.com</div>
                        <div className="text-xs text-blue-400/70">PRIMARY_CHANNEL</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-slate-800/40 border border-blue-500/30 rounded-lg hover:border-blue-400/60 transition-all cursor-pointer transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                      <Terminal className="text-blue-400" size={20} />
                      <div>
                        <div className="text-blue-300">github.com/fadhilfn04</div>
                        <div className="text-xs text-blue-400/70">CODE_REPOSITORY</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-slate-800/40 border border-blue-500/30 rounded-lg hover:border-blue-400/60 transition-all cursor-pointer transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                      <User className="text-blue-400" size={20} />
                      <div>
                        <div className="text-blue-300">linkedin.com/in/fadhilfn</div>
                        <div className="text-xs text-blue-400/70">PROFESSIONAL_NETWORK</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-purple-400 flex items-center gap-2">
                    <Terminal size={20} />
                    DIRECT_MESSAGE
                  </h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="SUBJECT_LINE"
                      className="w-full bg-slate-800/60 border border-blue-500/40 rounded-lg px-4 py-3 text-cyan-100 placeholder-cyan-400/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 font-mono transition-all duration-300 hover:border-blue-400/60"
                    />
                    <textarea
                      placeholder="MESSAGE_CONTENT"
                      rows={4}
                      className="w-full bg-slate-800/60 border border-blue-500/40 rounded-lg px-4 py-3 text-cyan-100 placeholder-cyan-400/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 font-mono resize-none transition-all duration-300 hover:border-blue-400/60"
                    />
                    {/* <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 font-mono shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2">
                      <Zap size={16} />
                      TRANSMIT_MESSAGE
                    </button> */}
                    <a
                      href={`mailto:fadhilfn04@gmail.com?subject=Hello&body=Isi pesan di sini`}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 font-mono shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
                    >
                      <Zap size={16} />
                      TRANSMIT_MESSAGE
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setCurrentZone('home')}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 font-mono"
            >
              &lt; RETURN_TO_GRID
            </button>
          </div>
        )}
      </main>

      {/* Achievement Notification */}
      {completedZones.size === zones.length && !isLoading && (
        <div className="fixed bottom-6 right-6 bg-gradient-to-r from-yellow-500 to-orange-500 border border-yellow-400 rounded-lg p-4 animate-bounce shadow-lg shadow-yellow-500/50">
          <div className="flex items-center gap-2">
            <Star className="text-yellow-900" size={20} />
            <div>
              <div className="font-bold text-yellow-900 font-mono">ALL ZONES EXPLORED!</div>
              <div className="text-xs text-yellow-800 font-mono">ACHIEVEMENT_UNLOCKED</div>
            </div>
          </div>
        </div>
      )}

      {/* System Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/30 p-2 z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-4 text-cyan-400">
            <span>SYSTEM_STATUS: OPERATIONAL</span>
            <span>CPU: 45%</span>
            <span>RAM: 2.1GB</span>
          </div>
          <div className="flex items-center gap-4 text-cyan-400">
            <span>ZONE: {currentZone.toUpperCase()}</span>
            <span>TIME: {systemTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;