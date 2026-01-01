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
      location: "Los Angeles, USA",
      duration: "Jun 2025 - Present",
      type: "Remote | Full-Time",
      description:
        "Worked on ANTIK OS, an AI-integrated Linux-based operating system, building privacy-first GenAI features, low-latency gesture runtimes, and reliable distributed execution frameworks for real-time, on-device inference.",
      achievements: [
        "Researched and developed on-device RAG pipelines using semantic chunking, bounded token windows, and BERT-based embeddings with precomputed vectors, enabling low-latency retrieval by eliminating network calls and minimizing IPC overhead.",
        "Designed agent-style AI workflows using LangChain and LangGraph concepts, integrating structured tool calling, retrieval components, and runtime-bound APIs to deliver reliable autonomous behavior within the OS runtime.",
        "Built a distributed runtime to execute gesture workloads across machines, implementing task scheduling, lifecycle management, fault-aware execution, and safe shutdown logic to ensure clean recovery under sustained load.",
        "Designed a low-latency routing layer for high-frequency gesture frames with concurrency control, health checks, and backpressure handling, maintaining stable responses during traffic spikes and constrained CPU conditions.",
        "Improved runtime reliability by defining standardized event schemas and building automated unit and integration tests to validate end-to-end inference behavior and prevent rollout regressions.",
      ],
      technologies: [
        "C++",
        "Python",
        "Linux",
        "D-Bus IPC",
        "Ultraleap SDK",
        "LangChain",
        "LangGraph",
        "FAISS",
        "ONNX",
        "Distributed Systems",
      ],
      color: "from-purple-500 to-indigo-600",
      icon: <img src="/icons/luxvitae.png" alt="Lux Vitae" className="w-20 h-20 object-contain" />,
    },
    {
      title: "Software Engineer I",
      company: "Vindaloo Softtech",
      location: "Ahmedabad, India",
      duration: "May 2022 - Jun 2023",
      type: "Full-Time",
      description:
        "Built and operated large-scale data ingestion and processing pipelines, focusing on reliable third-party ingestion, schema-safe data modeling, and production-grade analytics workflows for business reporting and ML use cases.",
      achievements: [
        "Built an external data ingestion layer for approximately 30 third-party sources using Azure Data Factory and Python Azure Functions for custom authentication, enabling stable ingestion of roughly 300 GB per day into ADLS.",
        "Designed a landing-to-processing workflow on Databricks by separating raw, validated, and curated Delta Lake layers, producing consistent Silver and Gold datasets used by analytics, dashboards, and ML pipelines.",
        "Implemented schema-aware ingestion using metadata checks and Spark validation logic, enabling controlled schema evolution without breaking downstream consumers or requiring repeated historical reloads.",
        "Operationalized pipelines through scheduled ADF orchestration and Databricks job monitoring, ensuring predictable data availability while reducing manual reruns and ongoing operational overhead.",
      ],
      technologies: [
        "Python",
        "Azure Data Factory",
        "Azure Functions",
        "Databricks",
        "Delta Lake",
        "Spark",
        "ADLS",
      ],
      color: "from-cyan-400 to-blue-500",
      icon: <img src="/icons/vindaloo.png" alt="Vindaloo Softtech" className="w-20 h-20 object-contain" />,
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
