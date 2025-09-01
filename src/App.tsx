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

function App() {
  const [currentZone, setCurrentZone] = useState<string>('home');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [systemTime, setSystemTime] = useState<string>('');
  const [zones, setZones] = useState<Zone[]>([
    { id: 'bio', name: 'Bio Terminal', icon: <User size={20} />, completed: false, description: 'Personal Information Archive' },
    { id: 'skills', name: 'Skills Matrix', icon: <Code size={20} />, completed: false, description: 'Ability Enhancement Grid' },
    { id: 'experience', name: 'Experience Archive', icon: <Briefcase size={20} />, completed: false, description: 'Mission History Database' },
    { id: 'projects', name: 'Projects Lab', icon: <Rocket size={20} />, completed: false, description: 'Innovation Showcase' },
    { id: 'contact', name: 'Contact Portal', icon: <Mail size={20} />, completed: false, description: 'Communication Interface' }
  ]);

  const [completedZones, setCompletedZones] = useState<Set<string>>(new Set());

  // System time update
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

  const skills = [
    { name: 'JavaScript', level: 95, category: 'Frontend' },
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'Node.js', level: 88, category: 'Backend' },
    { name: 'Python', level: 82, category: 'Backend' },
    { name: 'SQL', level: 75, category: 'Database' },
    // { name: 'AWS', level: 78, category: 'Cloud' },
    // { name: 'Docker', level: 80, category: 'DevOps' }
  ];

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'CV. Kabayan Consulting',
      period: '2023 - Present',
      achievements: ['Led team of 5 developers', 'Increased app performance by 40%', 'Implemented CI/CD pipeline']
    },
    {
      title: 'Frontend Developer',
      company: 'PT. Kabayan Aishwarya Nusantara',
      period: '2022 - 2023',
      achievements: ['Built responsive web applications', 'Improved user engagement by 25%', 'Mentored junior developers']
    },
    {
      title: 'Junior Developer',
      company: 'Inovindo Digital Media',
      period: '2020 - 2021',
      achievements: ['Developed MVP features', 'Collaborated with design team', 'Learned modern frameworks']
    }
  ];

  const projects = [
    {
      name: 'E-Commerce Platform',
      tech: ['React', 'Node.js', 'MongoDB'],
      description: 'Full-stack e-commerce solution with payment integration',
      status: 'Production'
    },
    {
      name: 'Task Management App',
      tech: ['Vue.js', 'Firebase', 'PWA'],
      description: 'Collaborative task management with real-time updates',
      status: 'Active'
    },
    {
      name: 'Data Visualization Dashboard',
      tech: ['D3.js', 'Python', 'FastAPI'],
      description: 'Interactive dashboard for complex data analysis',
      status: 'Completed'
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
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              WELCOME TO THE GRID
            </h2>
            <p className="text-xl mb-12 text-cyan-300 font-mono">
              Navigate through the digital zones to explore my professional profile
            </p>
            
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
                    {/* <img
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    /> */}

                    <img
                      src={profileImg}
                      alt="Profile"
                      className="w-full h-full object-cover"
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
                      <span className="text-cyan-100">Full Stack Developer</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 hover:bg-cyan-500/10 rounded transition-colors">
                      <span className="text-cyan-400 w-24">LEVEL:</span> 
                      <span className="text-green-400 font-bold">Senior</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 hover:bg-cyan-500/10 rounded transition-colors">
                      <span className="text-cyan-400 w-24">XP:</span> 
                      <span className="text-purple-400">3+ Years</span>
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
                      Passionate developer focused on creating innovative digital solutions. 
                      Specializing in modern web technologies and user experience optimization.
                    </p>
                    <p className="text-cyan-100 leading-relaxed">
                      Always eager to tackle new challenges and learn emerging technologies.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {['Innovation', 'Problem Solving', 'Team Leadership', 'Continuous Learning'].map((trait) => (
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
                  { label: 'Projects Completed', value: '10+', color: 'text-green-400' },
                  { label: 'Lines of Code', value: '100K+', color: 'text-cyan-400' },
                  { label: 'Coffee Consumed', value: '∞', color: 'text-yellow-400' },
                  { label: 'Bugs Fixed', value: '999+', color: 'text-purple-400' }
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
              
              {/* Skill Categories */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Frontend', 'Backend', 'Database', 'Cloud', 'DevOps'].map((category) => (
                    <span
                      key={category}
                      className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-sm font-mono text-green-300 hover:bg-green-500/30 transition-colors cursor-pointer"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <p className="text-cyan-100 leading-relaxed">
                  Passionate developer focused on creating innovative digital solutions. 
                  Specializing in modern web technologies and user experience optimization. 
                  Always eager to tackle new challenges and learn emerging technologies.
                </p>
              </div>
            </div>
            <button
              onClick={() => setCurrentZone('home')}
              className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              RETURN TO GRID
            </button>
          </div>
        )}

        {currentZone === 'skills' && (
          <div className="py-12 animate-fade-in">
            <div className="bg-gradient-to-br from-slate-800/50 to-green-900/30 border border-green-500/30 rounded-lg p-8 mb-8">
              <h2 className="text-4xl font-bold mb-6 text-green-400 font-mono">SKILLS_MATRIX.exe</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse" />
                      <h3 className="text-lg font-bold text-pink-300 group-hover:text-pink-200 transition-colors">{project.name}</h3>
                    </div>
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
                      <button className="text-pink-400 hover:text-pink-300 transition-colors">
                        <ChevronRight size={16} />
                      </button>
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
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 font-mono shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2">
                      <Zap size={16} />
                      TRANSMIT_MESSAGE
                    </button>
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