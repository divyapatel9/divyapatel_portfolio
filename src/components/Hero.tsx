
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      dx: number;
      dy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'transparent' }}
      />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8 animate-fade-in">
          {/* Enhanced Professional Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              {/* Outer Orbital Ring */}
              <div className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-blue-400/20 animate-spin-slow"></div>
              
              {/* Middle Glow Ring */}
              <div className="absolute inset-2 w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-r from-blue-400/10 via-blue-500/20 to-blue-600/10 blur-md"></div>
              
              {/* Inner Frame */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-1 backdrop-blur-sm border border-blue-400/30 group-hover:border-blue-300/50 transition-all duration-500">
                <Avatar className="w-full h-full border-2 border-blue-500/20 shadow-2xl shadow-blue-500/30 group-hover:shadow-blue-400/40 transition-all duration-500 group-hover:scale-105">
                  <AvatarImage 
                    src="/icons/profile.jpg"
                    alt="Divya Patel - Software Engineer"
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-gradient-to-br from-blue-600 to-blue-800 text-white text-3xl md:text-4xl font-bold">
                    DP
                  </AvatarFallback>
                </Avatar>
                
                {/* Inner Accent Ring */}
                <div className="absolute inset-1 rounded-full border border-blue-300/20 group-hover:border-blue-300/40 transition-all duration-500"></div>
              </div>
              
              {/* Floating Accent Points */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 right-0 w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              
              {/* Subtle background glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 via-blue-500/15 to-blue-600/10 blur-2xl -z-10 animate-pulse opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-scale-in">
            Divya Patel
          </h1>
          <div className="text-xl md:text-2xl lg:text-3xl text-blue-200 mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Software Engineer
          </div>
          <p className="text-lg md:text-xl lg:text-2xl text-blue-300 mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Building Scalable Systems & AI-Powered Solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <a
            href="https://linkedin.com/in/divya-9-patel/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 md:px-6 py-3 hover:from-blue-500/30 hover:to-blue-600/30 transition-all duration-300 hover:scale-105"
          >
            <Linkedin size={20} />
            <span className="hidden sm:inline">LinkedIn</span>
            <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          
          <a
            href="mailto:9divyapatel@gmail.com"
            className="group flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 md:px-6 py-3 hover:from-blue-600/30 hover:to-blue-500/30 transition-all duration-300 hover:scale-105"
          >
            <Mail size={20} />
            <span className="hidden sm:inline">Email</span>
          </a>
          
          <a
            href="https://github.com/divyapatel9"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 bg-gradient-to-r from-blue-400/20 to-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 md:px-6 py-3 hover:from-blue-400/30 hover:to-blue-500/30 transition-all duration-300 hover:scale-105"
          >
            <ExternalLink size={20} />
            <span className="hidden sm:inline">Github</span>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <button 
            onClick={scrollToNext}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Explore My Work
          </button>
          <button className="border border-blue-500 text-blue-400 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105">
            View Resume
          </button>
        </div>
      </div>

      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-blue-400 animate-bounce cursor-pointer hover:text-blue-300 transition-colors duration-300"
      >
        <ArrowDown size={32} />
      </button>

      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
