import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Code, Database, Cloud, Brain, X } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

 const projects = [
  {
  title: "Cloud-Native Flight Intelligence",
  description: "A cloud-native data platform to predict flight delays in near real-time using live telemetry and machine learning.",
  longDescription: "An end-to-end data engineering and MLOps project built entirely on Google Cloud. This platform automates the ingestion of live flight data via a Cloud Composer (Airflow) pipeline, stores and transforms it in BigQuery using dbt, and trains a predictive XGBoost model to forecast flight delays. The final insights are served through a scalable, serverless Streamlit dashboard deployed on Cloud Run.",
  technologies: ["Google Cloud Platform (GCP)", "Cloud Composer (Airflow)", "BigQuery", "dbt", "Python", "XGBoost", "Streamlit", "Docker", "Cloud Run"],
  features: [
    "Automated near real-time data pipeline for live flight telemetry ingestion",
    "Scalable cloud data warehouse in BigQuery handling millions of flight records",
    "Modern, SQL-based data transformation and quality testing with dbt",
    "Predictive ML model (XGBoost) trained and versioned in a managed Airflow environment",
    "Live, interactive dashboard with real-time flight tracking on a map",
    "Fully serverless and scalable deployment using Docker and Cloud Run"
  ],
  icon: <img src="/icons/flightproject.png" alt="FlightSense AI" className="w-10 h-10 object-contain" />, // Placeholder icon
  color: "from-blue-500 to-indigo-600",
  category: "Cloud Data Engineering & MLOps",
  image: "/api/placeholder/600/400",
  github: "https://github.com/divyapatel9/flightsense-gcp"
},
  {
    title: "Secure and Private On-Device RAG Engine",
    description: "Advanced retrieval-augmented generation system with semantic search capabilities",
    longDescription: "Developed a sophisticated on-device RAG engine that prioritizes privacy and security while delivering exceptional search performance through semantic understanding and query expansion. This system processes data locally, ensuring complete privacy while maintaining high-performance semantic search capabilities.",
    technologies: ["Python", "Sentence Transformers", "FAISS", "Hugging Face", "Tkinter"],
    features: [
      "Semantic search with synonym-based query expansion",
      "Private on-device processing with zero data transmission",
      "FAISS vector database for lightning-fast similarity search",
      "Interactive GUI with real-time query suggestions",
      "Advanced NLP preprocessing and tokenization"
    ],
    icon: <img src="/icons/rag.png" alt="RAG Engine" className="w-10 h-10 object-contain" />,
    color: "from-purple-400 to-pink-500",
    category: "AI/ML",
    image: "/api/placeholder/600/400",
    github: "https://github.com/divyapatel9/-Secure-and-Private-On-Device-RAG-Engine"
  },
  {
    title: "Smart Menu System",
    description: "An AI-powered restaurant menu with voice search and real-time dynamic pricing.",
    longDescription: "A web application designed to create a personalized and profitable dining experience. This system features an interactive menu that understands natural language voice commands using a FAISS-powered semantic search engine. The Python Flask backend includes a rule-based dynamic pricing engine to optimize revenue and a detailed analytics suite to log both orders and search queries.",
    technologies: ["Python", "Flask", "Sentence-Transformers", "FAISS", "SQLite", "JavaScript", "HTML5", "CSS3"],
    features: [
      "AI-powered semantic search for natural language queries (e.g., 'What are your spicy food below $10')",
      "Voice command integration for hands-free menu filtering",
      "Rule-based dynamic pricing engine based on time, demand, and inventory",
      "Pre-order validation requiring customer name and table number",
      "Full shopping cart and ordering system",
      "Dual-database architecture for transactional orders and search analytics"
    ],
    icon: <img src="/icons/smartmenu.png" alt="Smart Menu" className="w-10 h-10 object-contain" />,
    color: "from-red-500 to-orange-500",
    category: "Full-Stack & AI",
    image: "/api/placeholder/600/400",
    github: "https://github.com/divyapatel9/Smart_Menu_System"
  },
  {
  title: "Serverless Order Tracker Using AWS",
  description: "Real-time order tracking with DynamoDB, Lambda, and S3",
  longDescription: "Built a fully serverless, event-driven system to track and log customer orders in real-time using AWS services. The architecture integrates API Gateway, AWS Lambda, DynamoDB, S3, and SNS to ingest, process, and notify about incoming orders. It demonstrates real-world usage of DynamoDB Streams, Lambda triggers, and S3 object storage in a scalable, decoupled manner.",
  technologies: ["AWS Lambda", "DynamoDB", "API Gateway", "S3", "SNS", "Python", "Boto3"],
  features: [
    "Accepts orders through an API Gateway endpoint secured by AWS Lambda",
    "Stores order data in DynamoDB with automatic timestamping",
    "Uses DynamoDB Streams to trigger a Lambda function for post-processing",
    "Lambda function stores each order as a JSON file in an S3 bucket",
    "SNS integration sends email notifications upon new order arrival",
    "IAM roles with granular permissions ensure secure access to all resources",
    "CloudWatch logs used for monitoring Lambda execution and errors"
  ],
  icon: <img src="/icons/aws.png" alt="AWS Project" className="w-10 h-10 object-contain" />,
  color: "from-yellow-400 to-orange-500",
  category: "Cloud",
  image: "/api/placeholder/600/400",
  github: "https://github.com/divyapatel9/Serverless-Order-Tracker-Using-DynamoDB"
},
{
  title: "OptiPlanDB",
  description: "A modular distributed SQL query optimizer with visual plan inspection and cost-based optimization.",
  longDescription: "OptiPlanDB is an intelligent query optimization engine built to simulate how modern distributed databases like Redshift or Presto generate efficient execution plans. The system constructs logical plans from SQL queries, applies rule-based rewrites, estimates cost using a customizable model, and generates physical plans for execution. Final plans are exported as JSON and visualized with Graphviz for clear inspection.",
  technologies: ["Python", "SQL Parser", "Rule Engine", "Cost Model", "Graphviz", "JSON", "Flask", "Jupyter Notebook"],
  features: [
    "Custom SQL parser to convert input queries into logical plan trees",
    "Rule-based optimizer that rewrites query plans using heuristics",
    "Cost-based optimizer that chooses the most efficient execution path",
    "Supports join order rearrangement, predicate pushdown, and projection pruning",
    "Exports both logical and physical plans to JSON for easy visualization and comparison",
    "Graphviz-based visualizer to display and compare logical vs physical plans side by side"
  ],
  icon: <img src="/icons/optid.png" alt="OptiPlanDB" className="w-10 h-10 object-contain" />,
  color: "from-blue-600 to-cyan-500",
  category: "Backend & Databases",
  image: "/api/placeholder/600/400",
  github: "https://github.com/divyapatel9/query-optimizer"
},
  
  {
    title: "Interactive Data Analytics Visualizations",
    description: "Interactive D3.js dashboard for resident economic trends",
    longDescription: "Built advanced D3.js visualizations for analyzing 15 months of economic data of Ohio, as part of VAST MC 2023. Created interactive charts and maps that reveal business trends, employee retention, and financial health patterns among residents.",
    technologies: ["D3.js", "JavaScript", "HTML", "CSS"],
    features: [
      "Line, bar, scatter, and Sankey diagrams for insights",
      "City map highlighting business activity and changes",
      "Dynamic filters and interactive tooltips",
      "Modular component-based D3 implementation",
      "Responsive design optimized for exploration"
    ],
    icon: <img src="/icons/dv.png" alt="Data Visualization" className="w-10 h-10 object-contain" />,
    color: "from-lime-400 to-green-500",
    category: "Data Viz",
    image: "/api/placeholder/600/400"
  },
  {
    title: "Elastic Face Recognition on AWS",
    description: "Scalable IaaS face recognition with EC2 and S3",
    longDescription: "Designed and deployed a scalable, cloud-native face recognition system using AWS infrastructure-as-a-service (IaaS) components. The project featured a multi-tier architecture (Web, App, and Data tiers) that leveraged deep learning and elastic cloud resources to provide efficient, on-demand face recognition.",
    technologies: ["AWS EC2", "S3", "Flask", "OpenCV", "Python"],
    features: [
      "Implements a 3-tier cloud architecture: Web, App, and Data Tiers",
      "Integrates deep learning-based face recognition using Torch",
      "Uses AWS SQS for asynchronous message-based tier communication",
      "Stores image data and results in Amazon S3 with structured naming",
      "Auto-scales EC2 instances in the App Tier from 0 to 20 based on traffic",
      "Custom AMIs ensure fast instance boot-up with pre-installed ML dependencies",
      "Adheres to cloud-native design principles and AWS best practices"
    ],
    icon: <img src="/icons/cloud1.png" alt="Cloud Project" className="w-10 h-10 object-contain" />,
    color: "from-cyan-400 to-blue-500",
    category: "Cloud",
    image: "/api/placeholder/600/400"
  },
  {
    title: "Scalable Video Analysis with AWS Lambda",
    description: "Serverless pipeline for automatic video processing",
    longDescription: "Built a fully serverless, scalable video analysis system using AWS Lambda to perform on-demand video frame extraction and face recognition. The architecture utilizes an event-driven pipeline and optimizes compute usage to achieve low-latency, cost-efficient processing of user-uploaded videos.",
    technologies: ["AWS Lambda", "AWS SQS", "S3", "Python", "OpenCV", "API Gateway"],
    features: [
      "Fully serverless architecture using AWS Lambda",
      "Frame extraction from videos using FFmpeg in Lambda",
      "Face detection and recognition using OpenCV and ResNet-34",
      "Event-driven pipeline triggered by S3 upload events",
      "Organized data flow using input, intermediate, and output S3 buckets",
      "Optimized for low latency and minimal AWS costs",
      "Scalable to handle multiple video uploads concurrently"
    ],
    icon: <img src="/icons/cloud2.png" alt="Cloud Project" className="w-10 h-10 object-contain" />,
    color: "from-indigo-400 to-blue-600",
    category: "Serverless",
    image: "/api/placeholder/600/400"
  },
  {
    title: "FIMS - Food Industry Management",
    description: "Comprehensive database system for food industry operations",
    longDescription: "Designed and implemented a complete food industry management system with advanced database modeling, optimization, and real-time data processing. The system manages inventory, supply chain, and quality control for multiple food processing facilities.",
    technologies: ["MySQL", "PostgreSQL", "Stored Procedures", "Triggers", "ER Modeling"],
    features: [
      "3NF normalized database design for data integrity",
      "Complex stored procedures for business logic automation",
      "Real-time inventory tracking with predictive analytics",
      "Advanced reporting dashboard with data visualization",
      "Multi-tenant architecture supporting 50+ clients"
    ],
    icon: <img src="/icons/fims.png" alt="FIMS DBMS" className="w-10 h-10 object-contain" />,
    color: "from-amber-400 to-orange-500",
    category: "Database",
    image: "/api/placeholder/600/400",
    github: "https://github.com/divyapatel9/food-industry-dbms"
  },
  {
    title: "Mouse Control Using Hand Gestures",
    description: "Real-time webcam-based hand gesture mouse control",
    longDescription: "Developed a computer vision-based system that enables users to control mouse movements and clicks using hand gestures. This project leverages a webcam and machine learning models to detect hand landmarks in real time, allowing for contactless computer interaction.",
    technologies: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
    features: [
      "Tracks real-time hand landmarks using MediaPipe",
      "Maps index finger movement to cursor position on screen",
      "Detects finger distance to simulate left-click gestures",
      "Implements right-click and drag functionality using gesture combinations",
      "Runs on webcam input with no additional hardware required",
      "Optimized for smooth cursor movement with frame skipping logic",
      "Modular codebase for easy extension or integration with other gesture-based tasks"
    ],
    icon: <img src="/icons/iot.png" alt="IOT Project" className="w-10 h-10 object-contain" />,
    color: "from-fuchsia-400 to-rose-500",
    category: "CV/UI",
    image: "/api/placeholder/600/400",
    github: "https://github.com/divyapatel9/Mouse-Control-Using-Hand-Gestures"
  },
  {
    title: "OS Page Replacement Visualization",
    description: "Simulates FIFO, LRU, Optimal, and other algorithms",
    longDescription: "Built a browser-based visual simulation tool to demonstrate how various page replacement algorithms manage memory in an operating system. This project allows users to input a page reference string and the number of memory frames, and then visually observe how different algorithms handle page faults step by step.",
    technologies: ["JavaScript", "HTML", "CSS"],
    features: [
      "Implements 5 core algorithms: FIFO, LRU, MRU, Optimal, Random",
      "Interactive input for custom reference strings and frame size",
      "Real-time visualization of page insertion and replacement steps",
      "Tracks and displays total page faults per algorithm",
      "Clear table-based UI to represent memory frame state",
      "Modular JavaScript code structure for each algorithm",
      "Designed for educational purposes with beginner-friendly UX"
    ],
    icon: <img src="/icons/os.png" alt="OS Page Replacement Project" className="w-10 h-10 object-contain" />,
    color: "from-yellow-400 to-red-500",
    category: "Systems",
    image: "/api/placeholder/600/400",
    github: "https://github.com/divyapatel9/OS-Page-Replacement-Project"
  }
];

  const openModal = (index: number) => {
    setSelectedProject(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };
  return (
    <section ref={sectionRef} id="projects" className="py-20 px-4 sm:px-6 bg-navy-900">

      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Showcasing innovative solutions that demonstrate technical expertise and problem-solving capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-navy-800/30 backdrop-blur-sm border border-navy-700/30 hover:border-amber-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/10 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onClick={() => openModal(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              
              <div className="relative p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">

                  <div className="flex items-center">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${project.color} bg-opacity-20 mr-4`}>
                      <div className={`text-transparent bg-gradient-to-r ${project.color} bg-clip-text`}>
                        {project.icon}
                      </div>
                    </div>
                    <div>
                      <span className={`inline-block px-3 py-1 text-xs rounded-full bg-gradient-to-r ${project.color} bg-opacity-20 text-amber-400 mb-2`}>
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex space-x-2">
  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-lg bg-navy-700/50 hover:bg-navy-600/50 transition-colors duration-300"
    >
      <Github size={18} className="text-slate-400 hover:text-amber-400" />
    </a>
  )}
</div>

                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-navy-700/50 text-amber-400 border border-amber-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 text-sm rounded-full bg-navy-700/50 text-slate-400 border border-navy-600/30">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-amber-400 text-sm group-hover:text-amber-300 transition-colors duration-300">
                    Click to explore details
                  </span>
                  <div className="w-6 h-6 border-2 border-amber-400 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-90">
                    <div className="w-2 h-2 border-r-2 border-b-2 border-amber-400 transform rotate-45 translate-y-[-1px]"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Creative Modal */}
        {selectedProject !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-md animate-fade-in"
              onClick={closeModal}
            />
            
            {/* Modal */}
            <div className="relative w-full max-w-6xl h-full max-h-[90vh] bg-navy-900/95 backdrop-blur-xl border border-navy-700/50 rounded-3xl overflow-hidden animate-scale-in shadow-2xl shadow-amber-500/20">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-10 p-2 rounded-full bg-navy-800/80 hover:bg-navy-700/80 transition-colors duration-300 group"
              >
                <X size={24} className="text-slate-400 group-hover:text-white" />
              </button>

              {/* Modal Content */}
              <div className="flex flex-col lg:flex-row h-full">

                {/* Left Side - Visual */}
                <div className="w-full lg:w-1/2 relative overflow-hidden">

                  <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-900">
                    <div className="absolute inset-0 opacity-20">
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-amber-400 rounded-full animate-pulse"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Project Icon Large */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`p-12 rounded-3xl bg-gradient-to-r ${projects[selectedProject].color} bg-opacity-20 backdrop-blur-sm border border-navy-600/30`}>
                      <div className={`text-transparent bg-gradient-to-r ${projects[selectedProject].color} bg-clip-text transform scale-[3]`}>
                        {projects[selectedProject].icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className={`px-4 py-2 rounded-full bg-gradient-to-r ${projects[selectedProject].color} bg-opacity-30 text-amber-400 font-semibold border border-amber-500/30`}>
                      {projects[selectedProject].category}
                    </span>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="w-full lg:w-1/2 p-6 sm:p-8 overflow-y-auto">

                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-4">
                        {projects[selectedProject].title}
                      </h2>
                      <p className="text-lg text-slate-300 leading-relaxed">
                        {projects[selectedProject].longDescription}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-amber-400 mb-4">Technologies Used</h3>
                      <div className="flex flex-wrap gap-3">
                        {projects[selectedProject].technologies.map((tech, index) => (
                          <span
                            key={tech}
                            className="px-4 py-2 rounded-lg bg-navy-800/50 text-slate-300 border border-navy-600/30 hover:border-amber-500/50 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-amber-400 mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        {projects[selectedProject].features.map((feature, index) => (
                          <li key={index} className="flex items-start text-slate-300">
                            <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex space-x-4 pt-6">
  {["FIMS - Food Industry Management", "Secure and Private On-Device RAG Engine", "OS Page Replacement Visualization", "Mouse Control Using Hand Gestures"].includes(projects[selectedProject].title) && (
    <a
  href={projects[selectedProject].github}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-navy-900 rounded-lg font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
>
  <Github size={20} />
  <span>View Code</span>
</a>

  )}
  {/* <button className="flex items-center space-x-2 px-6 py-3 bg-navy-700/50 text-white rounded-lg font-semibold border border-navy-600/50 hover:bg-navy-600/50 transition-colors duration-300">
    <ExternalLink size={20} />
    <span>Live Demo</span>
  </button> */}
</div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
