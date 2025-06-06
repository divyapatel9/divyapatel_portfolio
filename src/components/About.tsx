import React, { useEffect, useRef, useState } from 'react';

const About = () => {
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

  const highlights = [
  {
    iconSrc: "/icons/asu1.png",
    title: "Master's in Computer Science",
    subtitle: "Arizona State University",
    className: "w-24 h-24"
  },
  {
    iconSrc: "/icons/microsoft-cert.png",
    title: "Microsoft Certified",
    subtitle: "AZ-900, AI-900, DP-900, PL-900",
    className: "w-24 h-24" // Bigger than others
  },
  {
    iconSrc: "/icons/scalable-system.png",
    title: "Scalable Systems",
    subtitle: "Backend & Cloud Architecture",
    className: "w-24 h-24"
  },
  {
    iconSrc: "/icons/ai-ml.png",
    title: "AI & Machine Learning",
    subtitle: "Real-world Problem Solving",
    className: "w-24 h-24"
  }
];


  return (
    <section ref={sectionRef} id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-blue-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">
                  Passionate Computer Science Graduate
                </h3>
                <p className="text-blue-200 leading-relaxed mb-6">
                  As a recent Computer Science graduate from Arizona State University with a Bachelor's in ICT from Pandit Deendayal Energy University, I bring a unique blend of academic excellence and hands-on experience in building innovative technology solutions.
                </p>
                <p className="text-blue-200 leading-relaxed mb-6">
                  My journey spans from designing scalable backend systems and deploying cloud-native applications to applying machine learning techniques that solve real-world problems. With Microsoft certifications backing my expertise, I'm driven by a results-oriented mindset and a passion for creating reliable, efficient technology.
                </p>
                <p className="text-blue-200 leading-relaxed">
                  I thrive on transforming complex challenges into elegant solutions, whether it's optimizing system performance, implementing AI models, or architecting cloud infrastructure that scales seamlessly.
                </p>
              </div>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-xl p-6 bg-blue-800/30 backdrop-blur-sm border border-blue-700/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  {/* Large icon image */}
                  <div className="w-full flex justify-center mb-4">
                    <img
  src={highlight.iconSrc}
  alt={highlight.title}
  className={`${highlight.className} object-contain`}
/>

                  </div>

                  {/* Title and Subtitle */}
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300 text-center">
                    {highlight.title}
                  </h4>
                  <p className="text-blue-300 text-sm group-hover:text-blue-200 transition-colors duration-300 text-center">
                    {highlight.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
