import { useState } from 'react';
import { motion } from 'framer-motion';

// Icons remain unchanged
const GitHubIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
);

const LocationIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [activeField, setActiveField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  // Contact links configuration
  const contactLinks = [
    { title: 'Email', value: 'hiremathk795@gmail.com', icon: <EmailIcon />, href: 'mailto:hiremathk795@gmail.com' },
    { title: 'GitHub', value: 'kushal-hiremath', icon: <GitHubIcon />, href: 'https://github.com/kushal-hiremath' },
    { title: 'LinkedIn', value: 'kushal-hiremath', icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/kushal-hiremath-245b5921b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { title: 'Location', value: 'Belagavi, Karnataka, India', icon: <LocationIcon />, href: null }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 relative overflow-hidden bg-white text-black dark:bg-dark dark:text-white">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-10 bg-gradient-to-r from-accent-blue to-accent-purple blur-3xl"
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -30, 0], 
            scale: [1, 1.1, 1]
          }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          style={{ left: '5%', top: '10%' }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full opacity-8 bg-gradient-to-r from-accent-purple to-accent-pink blur-3xl"
          animate={{ 
            x: [0, -25, 0], 
            y: [0, 25, 0], 
            scale: [1, 0.9, 1]
          }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
          style={{ right: '10%', bottom: '15%' }}
        />
      </div>

      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center mb-20 relative z-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          <span className="text-gradient bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Form Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Send a Message</h2>
              <p className="text-gray-400 mb-6">
                I'm always interested in hearing about new opportunities and exciting projects.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setActiveField('name')}
                  onBlur={() => setActiveField(null)}
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 bg-black/30 border-2 rounded-lg backdrop-blur-sm transition-all duration-300
                             ${activeField === 'name' 
                               ? 'border-accent-blue/60 bg-black/50' 
                               : 'border-white/20 hover:border-white/40'
                             }
                             text-white placeholder-gray-400 focus:outline-none`}
                  required
                />
                {activeField === 'name' && (
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 border-2 border-accent-blue/60"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>

              {/* Email Field */}
              <div className="relative">
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setActiveField('email')}
                  onBlur={() => setActiveField(null)}
                  placeholder="Your Email"
                  className={`w-full px-4 py-3 bg-black/30 border-2 rounded-lg backdrop-blur-sm transition-all duration-300
                             ${activeField === 'email' 
                               ? 'border-accent-blue/60 bg-black/50' 
                               : 'border-white/20 hover:border-white/40'
                             }
                             text-white placeholder-gray-400 focus:outline-none`}
                  required
                />
                {activeField === 'email' && (
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 border-2 border-accent-blue/60"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>

              {/* Message Field */}
              <div className="relative">
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setActiveField('message')}
                  onBlur={() => setActiveField(null)}
                  placeholder="Your Message"
                  rows={5}
                  className={`w-full px-4 py-3 bg-black/30 border-2 rounded-lg backdrop-blur-sm transition-all duration-300 resize-none
                             ${activeField === 'message' 
                               ? 'border-accent-blue/60 bg-black/50' 
                               : 'border-white/20 hover:border-white/40'
                             }
                             text-white placeholder-gray-400 focus:outline-none`}
                  required
                />
                {activeField === 'message' && (
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 border-2 border-accent-blue/60"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold rounded-lg
                           hover:from-accent-blue/90 hover:to-accent-purple/90 transition-all duration-300
                           transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-neon-blue"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="text-gray-400 mb-6">
                Here are the best ways to reach me. I'm always open to discussing new opportunities.
              </p>
            </div>

            {/* Contact Links */}
            <div className="space-y-6">
              {contactLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  {link.href ? (
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-4 p-4 bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl
                                 hover:border-accent-blue/30 hover:bg-black/30 transition-all duration-300
                                 group-hover:shadow-neon-blue"
                    >
                      <div className="w-10 h-10 bg-accent-blue/20 rounded-lg flex items-center justify-center
                                    group-hover:bg-accent-blue/30 transition-colors duration-300">
                        <span className="text-accent-blue group-hover:text-accent-blue/80 transition-colors duration-300">
                          {link.icon}
                        </span>
                      </div>
                      <div>
                        <p className="text-white font-medium">{link.title}</p>
                        <p className="text-gray-400 text-sm">{link.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-4 p-4 bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl">
                      <div className="w-10 h-10 bg-accent-blue/20 rounded-lg flex items-center justify-center">
                        <span className="text-accent-blue">
                          {link.icon}
                        </span>
                      </div>
                      <div>
                        <p className="text-white font-medium">{link.title}</p>
                        <p className="text-gray-400 text-sm">{link.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="p-6 bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl"
            >
              <h3 className="text-lg font-semibold text-white mb-3">Let's Connect!</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I'm passionate about IoT development, electronics, and innovative solutions. 
                Whether you have a project in mind or just want to chat about technology, 
                I'd love to hear from you!
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
