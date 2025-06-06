import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, Award, Star, MapPin } from 'lucide-react';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCredential, setActiveCredential] = useState<string | null>(null);
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

  const credentials = [
    {
      id: "masters",
      university: "Arizona State University",
      degree: "Master's in Computer Science",
      duration: "2023 - 2025",
      gpa: "3.70/4.00",
      location: "Arizona, USA",
      coursework: ["Statistical Machine Learning", "Data Mining", "Cloud Computing", "Computer Information Assurance & Security", "Software Security"],
      achievements: ["Hands-On Project Excellence", "Self-Driven Learning"]
    },
    {
      id: "bachelors",
      university: "Pandit Deendayal Energy University",
      degree: "Bachelor of Technology in Information and Communication Technology",
      duration: "2019 - 2023",
      gpa: "3.72/4.00",
      location: "Gujarat, India",
      coursework: ["Data Structures and Algorithms", "Database Management Systems", "Operating Systems", "Machine Learning", "Artificial Intelligence Systems", "Cloud Architecture and Services", "Computer Communication and Networking", "Digital Signal Processing"],
      achievements: ["Industry-Linked Experience", "Hackathon Participation", "Hands-On Project Excellence", "Self-Driven Learning"]
    }
  ];

  const handleCredentialClick = (credentialId: string) => {
    setActiveCredential(activeCredential === credentialId ? null : credentialId);
  };

  return (
    <section ref={sectionRef} id="education" className="py-12 md:py-20 px-4 md:px-6 bg-blue-900/20 relative">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            Academic Milestones
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto">
            Prestigious credentials forged through dedication and excellence
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {credentials.map((credential, index) => {
            const isActive = activeCredential === credential.id;
            return (
              <div key={credential.id} className="relative group" style={{ transitionDelay: `${index * 200}ms` }}>
                <div
                  className={`relative cursor-pointer transition-all duration-700 ${
                    isActive ? 'transform scale-105 rotate-1' : 'hover:transform hover:scale-102 hover:-rotate-1'
                  }`}
                  onClick={() => handleCredentialClick(credential.id)}
                >
                  <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                    isActive ? 'bg-gradient-to-br from-emerald-400/30 via-blue-500/30 to-purple-500/30 blur-sm' : 'bg-gradient-to-br from-blue-600/20 via-blue-700/20 to-blue-800/20'
                  }`}></div>

                  <div className={`relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md rounded-xl border-2 p-6 md:p-8 transition-all duration-500 ${
                    isActive ? 'border-emerald-400/50 shadow-2xl shadow-emerald-500/20' : 'border-blue-500/30 hover:border-blue-400/50'
                  }`}>
                    <div className={`absolute top-1.5 right-1.5 w-3 h-3 sm:w-4 sm:h-4 transition-all duration-500 ${
                      isActive ? 'bg-emerald-400/60' : 'bg-blue-500/40'
                    }`} style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}></div>
                    <div className={`absolute bottom-1.5 left-1.5 w-3 h-3 sm:w-4 sm:h-4 transition-all duration-500 ${
                      isActive ? 'bg-emerald-400/60' : 'bg-blue-500/40'
                    }`} style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}></div>

                    <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full mb-4 transition-all duration-500 ${
                      isActive ? 'bg-gradient-to-r from-emerald-400 to-blue-500 shadow-lg shadow-emerald-500/30' : 'bg-gradient-to-r from-blue-500 to-blue-600'
                    }`}>
                      <GraduationCap className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white transition-all duration-300 ${
                        isActive ? 'animate-pulse' : ''
                      }`} />
                    </div>

                    <h3 className={`text-base sm:text-lg md:text-xl font-bold mb-2 transition-colors duration-300 ${
                      isActive ? 'text-emerald-300' : 'text-blue-300'
                    }`}>
                      {credential.degree}
                    </h3>

                    <p className={`text-sm sm:text-base md:text-lg font-semibold mb-3 transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-blue-100'
                    }`}>
                      {credential.university}
                    </p>

                    <div className="space-y-2 text-sm text-blue-200">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{credential.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{credential.location}</span>
                      </div>
                    </div>

                    <div className={`mt-4 text-xs transition-all duration-300 ${
                      isActive ? 'text-emerald-400' : 'text-blue-400 opacity-70'
                    }`}>
                      {isActive ? 'Detailed view active' : 'Click for details'}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {activeCredential && (
          <div className="mt-8 animate-fade-in relative z-20">
            <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-xl border border-emerald-400/30 p-6 shadow-2xl shadow-emerald-500/10 w-full max-w-4xl mx-auto px-4">
              <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-emerald-400/20">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-lg font-bold text-emerald-300">Academic Excellence Record</h4>
              </div>

              {(() => {
                const activeCredentialData = credentials.find(c => c.id === activeCredential);
                if (!activeCredentialData) return null;

                return (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-sm font-semibold text-emerald-400 mb-2 flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        Academic Performance
                      </h5>
                      <div className="space-y-2 text-sm text-blue-200">
                        <div className="flex justify-between">
                          <span>GPA:</span>
                          <span className="font-semibold text-emerald-300">{activeCredentialData.gpa}</span>
                        </div>
                        {activeCredentialData.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-sm font-semibold text-emerald-400 mb-2">Key Coursework</h5>
                      <div className="flex flex-wrap gap-2 justify-start items-center">
                        {activeCredentialData.coursework.map((course, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-blue-800/50 text-blue-200 text-xs rounded-full border border-blue-600/30 hover:border-emerald-400/50 transition-colors duration-300"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}

              <div className="absolute inset-0 pointer-events-none">
                <div className="h-full w-full bg-gradient-to-b from-transparent via-emerald-400/5 to-transparent animate-pulse"></div>
              </div>
            </div>
          </div>
        )}

        <div className={`mt-12 text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-4 px-6 py-3 bg-slate-800/40 rounded-full border border-blue-500/30">
            <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              activeCredential ? 'bg-emerald-400 animate-pulse' : 'bg-blue-500'
            }`}></div>
            <span className="text-sm text-blue-200"></span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Education;
