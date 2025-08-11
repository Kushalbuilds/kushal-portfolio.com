import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import portfolioData from '../data/portfolioData';

const Projects = () => {
  const { projects = [] } = portfolioData;

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
            Projects
          </span>
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
          Showcasing my key contributions and technical expertise through innovative solutions
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue/50 via-accent-purple/50 to-accent-pink/50 transform -translate-x-1/2" />

        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true, margin: "-100px" });

          return (
            <motion.div
              key={index}
              ref={ref}
              className={`relative flex items-center mb-20 ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-20">
                <motion.div
                  className="w-6 h-6 rounded-full bg-black/40 border-2 border-accent-blue/60 backdrop-blur-sm"
                  whileHover={{ scale: 1.2 }}
                  animate={isInView ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.div
                    className="w-3 h-3 bg-accent-blue rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  />
                </motion.div>
              </div>

              {/* Project Card */}
              <div className={`flex-1 ${isEven ? 'md:ml-16' : 'md:mr-16'} ml-16`}>
                <motion.div
                  className="group relative bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8
                             hover:border-accent-blue/30 hover:bg-black/30 transition-all duration-500
                             shadow-lg hover:shadow-neon-blue"
                  whileHover={{ 
                    scale: 1.02,
                    y: -5
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-blue/0 via-accent-blue/5 to-accent-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Project Header */}
                  <div className="relative z-10">
                    <motion.h3 
                      className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-accent-blue transition-colors duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      {project.name}
                    </motion.h3>

                    {/* Technologies */}
                    {project.technologiesUsed && (
                      <motion.div 
                        className="flex flex-wrap gap-2 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        {project.technologiesUsed.split(',').map((tech, tIndex) => (
                          <span
                            key={tIndex}
                            className="px-3 py-1 text-sm bg-accent-blue/10 border border-accent-blue/30 text-accent-blue/90 rounded-full
                                     hover:bg-accent-blue/20 hover:border-accent-blue/50 transition-all duration-300"
                          >
                            {tech.trim()}
                          </span>
                        ))}
                      </motion.div>
                    )}

                    {/* Features */}
                    {project.features && (
                      <motion.ul 
                        className="space-y-3 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        {project.features.map((feature, fIndex) => (
                          <motion.li
                            key={fIndex}
                            className="flex items-start text-gray-300"
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.7 + fIndex * 0.1 }}
                          >
                            <span className="text-accent-blue mr-3 mt-1">▸</span>
                            <span className="text-gray-300 leading-relaxed">{feature}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}

                    {/* Action Buttons */}
                    <motion.div 
                      className="flex gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      {project.demoUrl && (
                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-accent-blue/10 border border-accent-blue/30 text-accent-blue rounded-lg
                                     hover:bg-accent-blue/20 hover:border-accent-blue/50 transition-all duration-300
                                     font-medium text-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Live Demo
                        </motion.a>
                      )}
                      {project.codeUrl && (
                        <motion.a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-white/5 border border-white/20 text-white rounded-lg
                                     hover:bg-white/10 hover:border-white/30 transition-all duration-300
                                     font-medium text-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View Code
                        </motion.a>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}

        {projects.length === 0 && (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-2xl text-gray-400 mb-4">No projects found.</p>
            <p className="text-gray-500">Check back soon for new projects!</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
