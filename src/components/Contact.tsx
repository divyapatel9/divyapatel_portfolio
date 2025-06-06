import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Send, User, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const result = await emailjs.send(
  'service_hnsigxp',
  'template_ucdc42f',
  {
    name: formData.name,
    email: formData.email,
    message: formData.message
  },
  'v_tqHA6C62hnsgLyp'
);


    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    console.error('Email sending failed:', error);
    alert('Failed to send message. Please try again later.');
  }

  setIsSubmitting(false);
};


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      label: "Email",
      value: "9divyapatel@gmail.com",
      href: "mailto:9divyapatel@gmail.com",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      label: "Phone",
      value: "(602) 576-7644",
      href: "tel:+16025767644",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <Linkedin className="w-6 h-6 text-white" />,
      label: "LinkedIn",
      value: "linkedin.com/in/divya-9-patel/",
      href: "https://linkedin.com/in/divya-9-patel/",
      color: "from-green-400 to-cyan-500"
    },
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      label: "Location",
      value: "San Francisco, California",
      href: "#",
      color: "from-orange-400 to-red-500"
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 px-6 bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Ready to collaborate on innovative projects? Let's discuss how we can build the future together.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`group flex items-center p-4 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10 ${contact.href === '#' ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${contact.color} mr-4`}>
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold group-hover:text-cyan-300 transition-colors duration-300">{contact.label}</h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20">
              <h4 className="text-lg font-semibold text-cyan-400 mb-3">Quick Facts</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3"></div>
                  Available for full-time opportunities
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                  Open to remote or on-site work
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full mr-3"></div>
                  Passionate about AI, backend systems and cloud technologies
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative overflow-hidden rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-gray-700/30 p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" required className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300" />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email" required className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300" />
                  </div>

                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                    <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Your Message" required rows={5} className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none" />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-4 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-20 pt-8 border-t border-gray-700/30 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-400 mb-4">@2025 DIVYA RAMESHKUMAR PATEL</p>
          <div className="flex justify-center space-x-6">
            <a href="https://linkedin.com/in/divya-9-patel/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"><Linkedin size={24} /></a>
            <a href="mailto:9divyapatel@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"><Mail size={24} /></a>
            <a href="https://github.com/divyapatel9" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"><Github size={24} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
