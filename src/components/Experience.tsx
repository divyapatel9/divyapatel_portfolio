import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeExperience, setActiveExperience] = useState<number | null>(null);
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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const experiences = [
    {
  title: "Software Engineer",
  company: "Lux Vitae",
  location: "Remote",
  duration: "May 2025 - Present",
  type: "Full-Time",
  description:
    "Designed and built key system components for an AI-integrated Linux-based operating system, focusing on gesture recognition and modular communication infrastructure.",
  achievements: [
    "Architected a scalable inter-process communication (IPC) framework using D-Bus for seamless interaction between gesture sensing, logic, and actuation layers",
    "Developed a low-level gesture processing pipeline in C, integrating Ultraleap SDK to interpret 3D hand motion into real-time system commands",
    "Implemented gesture_to_json APIs to serialize hand-tracking data, enabling real-time, user-driven control within the OS",
    "Established modular communication architecture that accelerated internal testing and cross-module integrations by 60%",
  ],
  technologies: ["C", "D-Bus", "Ultraleap SDK", "Linux", "API Development", "JSON"],
  color: "from-purple-500 to-indigo-600",
  icon: <img src="/icons/luxvitae.png" alt="Lux Vitae" className="w-20 h-20 object-contain" />,
},
    {
      title: "Machine Learning Research Intern",
      company: "Tata Consultancy Services",
      location: "Remote",
      duration: "Jan 2023 - May 2023",
      type: "Internship",
      description:
        "Spearheaded cutting-edge research in Generative Adversarial Networks, focusing on advancing deep learning architectures and optimization techniques.",
      achievements: [
        "Built and fine-tuned advanced GAN models (VanillaGAN, DCGAN, CycleGAN, StyleGAN) to generate high-fidelity fashion designs.",
        "Developed end-to-end deep learning pipelines using TensorFlow and PyTorch, enabling efficient training on large fashion datasets.",
        "Improved model convergence and training stability through advanced optimization strategies such as custom loss functions.",
        "Integrated ML models with Flask/REST API for real-time interaction and image generation through a user-friendly interface.",
      ],
      technologies: ["TensorFlow", "PyTorch", "GANs", "Flask", "REST APIs", "Deep Learning"],
      color: "from-purple-400 to-pink-500",
      icon: <img src="/icons/tcs1.png" alt="TCS" className="w-20 h-20 object-contain" />,
    },
    {
      title: "Junior Web Developer",
      company: "Kumbh Design",
      location: "Remote",
      duration: "Sep 2022 - Jan 2023",
      type: "Internship",
      description:
        "Contributed to modern web development projects with focus on responsive design and seamless API integrations.",
      achievements: [
        "Built responsive web applications using React.js and Tailwind CSS",
        "Implemented RESTful API integrations with Axios and Fetch for dynamic content",
        "Collaborated in agile development environment with cross-functional teams",
        "Optimized web performance and user experience across multiple device platforms",
      ],
      technologies: ["React.js", "Tailwind CSS", "Axios", "RESTful APIs", "Responsive Design"],
      color: "from-cyan-400 to-blue-500",
      icon: <img src="/icons/kumbh1.png" alt="Kumbh Design" className="w-20 h-20 object-contain" />,
    },
    {
      title: "Software Development Intern",
      company: "Upjao",
      location: "Remote",
      duration: "Jun 2022 - Aug 2023",
      type: "Internship",
      description:
        "Developed automated solutions and optimized database systems for enhanced application performance and scalability.",
      achievements: [
        "Created automated image annotation system using Python and OpenCV",
        "Developed robust API endpoints for seamless data exchange and processing",
        "Optimized database performance using MySQL, PostgreSQL, and Redis caching",
        "Implemented efficient data processing pipelines reducing processing time by 40%",
      ],
      technologies: ["Python", "OpenCV", "MySQL", "PostgreSQL", "Redis", "API Development"],
      color: "from-green-400 to-cyan-500",
      icon: <img src="/icons/upjao1.png" alt="UPJAO" className="w-20 h-20 object-contain" />,
    },
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 px-4 sm:px-6 bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            A journey of growth, innovation, and impactful contributions across diverse technology domains
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line - Desktop Only */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 hidden md:block"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full hidden md:block shadow-md shadow-cyan-500/30"></div>

                <div className="md:ml-20">
                  <div
                    className={`group relative overflow-hidden rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/10 cursor-pointer`}
                    onClick={() => setActiveExperience(activeExperience === index ? null : index)}
                  >
                    <div className="relative p-6 sm:p-8">
                      {/* Top Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">
                        <div className="flex flex-col sm:flex-row sm:items-start gap-4 w-full">
                          <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${exp.color} bg-opacity-20`}>
                            <div className={`text-transparent bg-gradient-to-r ${exp.color} bg-clip-text`}>
                              {exp.icon}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 mb-1">
                              {exp.title}
                            </h3>
                            <div className="text-cyan-400 font-semibold mb-2">{exp.company}</div>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {exp.duration}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {exp.location}
                              </div>
                              <span
                                className={`px-2 py-1 rounded-full text-xs bg-gradient-to-r ${exp.color} bg-opacity-20`}
                              >
                                {exp.type}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`transform transition-transform duration-300 ${
                            activeExperience === index ? 'rotate-180' : ''
                          }`}
                        >
                          <TrendingUp className="w-6 h-6 text-cyan-400" />
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm rounded-full bg-slate-700/50 text-cyan-300 border border-cyan-500/30 hover:bg-slate-600/50 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Achievements (toggle section) */}
                      {activeExperience === index && (
                        <div className="mt-6 p-6 bg-slate-900/50 rounded-xl border border-cyan-500/20 animate-fade-in">
                          <h4 className="text-cyan-400 font-semibold mb-4 flex items-center">
                            <TrendingUp className="w-4 h-4 mr-2" />
                            Key Achievements:
                          </h4>
                          <ul className="space-y-3 text-sm sm:text-base">
                            {exp.achievements.map((item, i) => (
                              <li key={i} className="flex items-start text-gray-300">
                                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="flex justify-end mt-4">
                        <span className="text-cyan-400 text-sm group-hover:text-cyan-300 transition-colors duration-300">
                          Click to {activeExperience === index ? 'collapse' : 'expand'} details
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
