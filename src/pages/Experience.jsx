import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import portfolioData from '../data/portfolioData';

// Timeline entry component with modern design
const TimelineEntry = ({ item, index }) => {
  if (!item) return null;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex items-center mb-20 bg-white text-black dark:bg-dark dark:text-white"
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

      {/* Content Card */}
      <div className="flex-1 ml-16 md:ml-16">
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
          
          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-accent-blue transition-colors duration-300">
                  {item.title || item.degree}
                </h3>
                <div className="text-accent-blue/80 font-medium text-lg">
                  {item.company || item.institution}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="font-medium text-sm text-accent-blue bg-accent-blue/10 border border-accent-blue/30 px-4 py-2 rounded-lg backdrop-blur-sm"
              >
                {item.period}
              </motion.div>
            </div>
            
            {/* Description/Grade */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-gray-300 text-lg mb-6 leading-relaxed"
            >
              {item.description || item.grade}
            </motion.div>
            
            {/* Skills/Technologies */}
            {item.technologies && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mb-6"
              >
                <h4 className="font-vt323 text-accent-blue mb-4 text-lg">TECH STACK</h4>
                <div className="flex flex-wrap gap-3">
                  {item.technologies.split(', ').map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-4 py-2 text-sm bg-accent-blue/10 border border-accent-blue/30 
                                text-accent-blue/90 rounded-full hover:bg-accent-blue/20 
                                hover:border-accent-blue/50 transition-all duration-300"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
            
            {/* Responsibilities */}
            {item.responsibilities && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <h4 className="font-vt323 text-accent-blue mb-4 text-lg">RESPONSIBILITIES</h4>
                <ul className="space-y-3">
                  {item.responsibilities.map((resp, idx) => (
                    <motion.li 
                      key={idx}
                      className="flex items-start text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.9 + idx * 0.1 }}
                    >
                      <span className="text-accent-blue mr-3 mt-1">▸</span>
                      <span className="text-gray-300 leading-relaxed">{resp}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const { experience = [], education = [] } = portfolioData;
  const [activeTab, setActiveTab] = useState('experience');

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
            Experience
          </span>
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
          A log of my professional journey and learning experiences
        </p>
      </motion.div>
      
      {/* Enhanced Tab Navigation */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center mb-16 relative z-10"
      >
        <div className="group relative bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-2">
          <div className="flex">
            <motion.button
              onClick={() => setActiveTab('experience')}
              className={`relative px-8 py-3 font-vt323 text-lg transition-all duration-300 rounded-xl ${
                activeTab === 'experience' 
                  ? 'text-white bg-gradient-to-r from-accent-blue to-accent-purple shadow-neon-blue' 
                  : 'text-accent-blue hover:text-white hover:bg-accent-blue/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              WORK LOG
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('education')}
              className={`relative px-8 py-3 font-vt323 text-lg transition-all duration-300 rounded-xl ${
                activeTab === 'education' 
                  ? 'text-white bg-gradient-to-r from-accent-blue to-accent-purple shadow-neon-blue' 
                  : 'text-accent-blue hover:text-white hover:bg-accent-blue/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              EDUCATION
            </motion.button>
          </div>
        </div>
      </motion.div>
      
      {/* Timeline Container */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue/50 via-accent-purple/50 to-accent-pink/50 transform -translate-x-1/2" />
        
        {/* Content */}
        {activeTab === 'experience' ? (
          <div>
            {experience.length > 0 ? (
              experience.map((exp, index) => (
                <TimelineEntry 
                  key={index} 
                  item={exp} 
                  index={index} 
                />
              ))
            ) : (
              <motion.div 
                className="text-center py-20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-2xl text-gray-400 mb-4">No experience entries found.</p>
                <p className="text-gray-500">Check back soon for updates!</p>
              </motion.div>
            )}
          </div>
        ) : (
          <div>
            {education.map((edu, index) => (
              <TimelineEntry 
                key={index} 
                item={edu} 
                index={index} 
              />
            ))}
          </div>
        )}
      </div>
      
      {/* Enhanced Skills Section */}
      {activeTab === 'experience' && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-6xl mx-auto mt-20 relative z-10"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-gradient bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink bg-clip-text text-transparent">
              Core Skills
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(portfolioData.skills || {}).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                className="group relative bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6
                           hover:border-accent-blue/30 hover:bg-black/30 transition-all duration-500
                           shadow-lg hover:shadow-neon-blue"
                whileHover={{ 
                  scale: 1.02,
                  y: -5
                }}
              >
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-blue/0 via-accent-blue/5 to-accent-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <h3 className="font-vt323 text-xl text-accent-blue mb-6 uppercase group-hover:text-white transition-colors duration-300">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, idx) => (
                      <motion.span 
                        key={idx} 
                        className="px-4 py-2 text-sm bg-accent-blue/10 border border-accent-blue/30
                                   text-accent-blue/90 rounded-full hover:bg-accent-blue/20 
                                   hover:border-accent-blue/50 transition-all duration-300
                                   backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + (index * 0.1) + (idx * 0.05) }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Experience;
