import React, { useEffect, useRef, useState } from 'react';
import { BookOpen, ExternalLink, Users, Calendar, Award } from 'lucide-react';

const Publications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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

  return (
    <section ref={sectionRef} id="publications" className="py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Publications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Contributing to the advancement of technology through research and innovation
          </p>
        </div>

        {/* Publication Card */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="group relative overflow-hidden rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden shadow-lg border border-cyan-500/30 flex-shrink-0">
  <img
    src="/icons/eeg.png"
    alt="EEG Publication"
    className="w-full h-full object-cover"
  />
</div>


                <div className="flex-1 w-full">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 mb-3">
                    An Effective EEG Signal-Based Sleep Staging System using Machine Learning Techniques
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center text-cyan-400 text-sm">
                      <Award className="w-4 h-4 mr-2" />
                      <span className="font-semibold">IEEE CICT 2022</span>
                    </div>
                    <div className="flex items-center text-purple-400 text-sm">
                      <Users className="w-4 h-4 mr-2" />
                      <span>5 Citations</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>2022</span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
                    This research presents an innovative approach to automated sleep staging using EEG signals and advanced machine learning techniques. The system demonstrates significant improvements in accuracy and efficiency for sleep disorder diagnosis and monitoring.
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {[
                      'EEG Signal Processing',
                      'Single-Channel EEG',
                      'Sleep Staging',
                      'Machine Learning',
                      'Random Forest',
                      'RUSBoost',
                      'PhysioNet Dataset',
                      'Signal Analysis'
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full bg-slate-700/50 text-cyan-300 border border-cyan-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Badges and Button */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-2"></div>
                        Published in IEEE Conference
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-2"></div>
                        Peer Reviewed
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full mr-2"></div>
                        Presented paper at IEEE CICT 2022
                      </div>
                    </div>

                    <a
                      href="https://ieeexplore.ieee.org/document/9997950"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <button className="group/btn flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-4 py-2 sm:px-6 sm:py-3 hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300 hover:scale-105">
                        <span className="text-sm sm:text-base text-cyan-400 group-hover/btn:text-cyan-300">View Publication</span>
                        <ExternalLink
                          size={16}
                          className="text-cyan-400 group-hover/btn:text-cyan-300 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Interests */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-white mb-8">Research Interests</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Machine Learning",
                description: "Advanced ML algorithms for real-world applications",
                icon: "🤖"
              },
              {
                title: "Signal Processing",
                description: "EEG and biomedical signal analysis techniques",
                icon: "📊"
              },
              {
                title: "Healthcare Technology",
                description: "AI-driven solutions for medical diagnostics",
                icon: "🏥"
              }
            ].map((interest) => (
              <div
                key={interest.title}
                className="group p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{interest.icon}</div>
                <h4 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300 mb-2">
                  {interest.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;

