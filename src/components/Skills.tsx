
import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Cloud, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skillCategories = [
    {
      id: "ai-ml",
      name: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      position: { x: 20, y: 30 },
      skills: ["TensorFlow", "PyTorch", "OpenCV", "GANs", "Pandas", "NumPy", "Apache Spark"]
    },
    {
      id: "backend-cloud",
      name: "Backend & Cloud",
      icon: <Cloud className="w-6 h-6" />,
      position: { x: 75, y: 25 },
      skills: ["AWS", "Docker", "Kubernetes", "Spring Boot", "Node.js", "PostgreSQL", "MongoDB"]
    },
    {
      id: "programming",
      name: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      position: { x: 50, y: 70 },
      skills: ["Python", "JavaScript", "Java", "C++", "TypeScript", "Bash", "HTML/CSS"]
    },
    {
      id: "dev-tools",
      name: "Developer Tools",
      icon: <Wrench className="w-6 h-6" />,
      position: { x: 25, y: 75 },
      skills: ["React.js", "Express.js", "Flask", "Git", "CI/CD", "RESTful APIs", "WebSockets"]
    }
  ];

  const connections = [
    { from: 0, to: 1 }, { from: 0, to: 2 }, { from: 1, to: 2 }, 
    { from: 1, to: 3 }, { from: 2, to: 3 }, { from: 0, to: 3 }
  ];

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  return (
    <section ref={sectionRef} id="skills" className="py-12 md:py-20 px-4 md:px-6 bg-slate-950/30">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            An interconnected network of technologies and expertise
          </p>
        </div>

        {/* Network Visualization Container */}
        <div className={`relative w-full h-96 md:h-[32rem] bg-slate-950/60 rounded-2xl border border-slate-700/50 overflow-hidden transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          {/* Animated Background Grid */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Connection Lines (Neural Network) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.3" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {connections.map((connection, index) => {
              const fromCategory = skillCategories[connection.from];
              const toCategory = skillCategories[connection.to];
              const isActive = activeCategory === fromCategory.id || activeCategory === toCategory.id;
              
              return (
                <line
                  key={index}
                  x1={`${fromCategory.position.x}%`}
                  y1={`${fromCategory.position.y}%`}
                  x2={`${toCategory.position.x}%`}
                  y2={`${toCategory.position.y}%`}
                  stroke="url(#connectionGradient)"
                  strokeWidth={isActive ? "3" : "1.5"}
                  filter="url(#glow)"
                  className={`transition-all duration-500 ${isActive ? 'animate-pulse' : ''}`}
                />
              );
            })}
          </svg>

          {/* Floating Data Particles */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400/60 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          {/* Category Nodes */}
          {skillCategories.map((category, index) => {
            const isActive = activeCategory === category.id;
            
            return (
              <div
                key={category.id}
                className="absolute group cursor-pointer"
                style={{
                  left: `${category.position.x}%`,
                  top: `${category.position.y}%`,
                  transform: 'translate(-50%, -50%)',
                  transitionDelay: `${index * 200}ms`
                }}
                onClick={() => handleCategoryClick(category.id)}
              >
                {/* Main Node */}
                <div className={`relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full transition-all duration-500 ${

                  isActive 
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 shadow-2xl shadow-cyan-500/50 scale-125' 
                    : 'bg-gradient-to-r from-slate-700 to-slate-600 hover:from-cyan-500/50 hover:to-blue-500/50 hover:scale-110'
                }`}>
                  <div className="w-full h-full bg-slate-900/90 rounded-full flex items-center justify-center m-0.5">
                    <div className={`text-slate-300 transition-colors duration-300 ${
                      isActive ? 'text-cyan-300' : 'group-hover:text-cyan-400'
                    }`}>
                      {category.icon}
                    </div>
                  </div>
                  
                  {/* Pulse Ring */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 animate-ping"></div>
                  )}
                </div>

                {/* Category Label */}
<div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-3 px-3 py-1 bg-slate-800/90 text-slate-200 text-xs md:text-sm rounded-lg border transition-all duration-300 whitespace-nowrap max-w-[120px] text-center ${
                  isActive 
                    ? 'border-cyan-500/50 bg-slate-800 text-cyan-300' 
                    : 'border-slate-600/50 opacity-90'
                }`}>
                  {category.name}
                </div>

                {/* Skill Synapses */}
                {isActive && (
                  <div className="absolute inset-0">
                    {category.skills.map((skill, skillIndex) => {
                      const angle = (skillIndex / category.skills.length) * 2 * Math.PI;
                      const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 60 : 100;

                      const x = Math.cos(angle) * radius;
                      const y = Math.sin(angle) * radius;
                      
                      return (
                        <div
                          key={skill}
                          className="absolute animate-fade-in"
                          style={{
                            left: `${x}px`,
                            top: `${y}px`,
                            transform: 'translate(-50%, -50%)',
                            animationDelay: `${skillIndex * 100}ms`
                          }}
                        >
                          {/* Synapse Line */}
                          <svg className="absolute inset-0 pointer-events-none" style={{ width: '200px', height: '200px', left: '-100px', top: '-100px' }}>
                            <line
                              x1="100px"
                              y1="100px"
                              x2={`${100 - x}px`}
                              y2={`${100 - y}px`}
                              stroke="#06b6d4"
                              strokeWidth="1"
                              opacity="0.6"
                              className="animate-pulse"
                              strokeDasharray="3,3"
                            />
                          </svg>
                          
                          {/* Skill Node */}
                          <div className="relative">
                            <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse shadow-lg shadow-cyan-500/30"></div>
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-slate-800/95 text-cyan-200 text-xs rounded border border-cyan-500/30 whitespace-nowrap backdrop-blur-sm">
                              {skill}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {/* Interaction Hint */}
          {!activeCategory && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-slate-400 text-sm sm:text-base animate-pulse text-center">

              Click on any node to explore the network pathways
            </div>
          )}
        </div>

        {/* Network Legend */}
        <div className={`mt-8 md:mt-12 flex flex-col sm:flex-row flex-wrap justify-center gap-4 transition-all duration-1000 delay-500 ${

          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {skillCategories.map(category => (
            <div 
              key={category.id} 
              className={`flex items-center space-x-2 px-4 py-2 bg-slate-800/40 rounded-full border transition-all duration-300 cursor-pointer ${
                activeCategory === category.id 
                  ? 'border-cyan-500/70 bg-slate-800/60 text-cyan-300' 
                  : 'border-slate-600/30 hover:border-cyan-500/50 text-slate-300'
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className={`transition-colors duration-300 ${
                activeCategory === category.id ? 'text-cyan-400' : 'text-slate-400'
              }`}>
                {category.icon}
              </div>
              <span className="text-sm">{category.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Skills;
