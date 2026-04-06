import { motion } from 'framer-motion';
import portfolioData from '../data/portfolioData';

const About = () => {
  const { strengths = [], languageProficiency = {}, extraCurricular = [] } = portfolioData;
  const languages = Object.keys(languageProficiency);

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
            About Me
          </span>
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
          Get to know more about my journey, skills, and personal interests
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto relative z-10">
        {/* Main Bio */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-2"
        >
          <div className="group relative bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8
                         hover:border-accent-blue/30 hover:bg-black/30 transition-all duration-500
                         shadow-lg hover:shadow-neon-blue">
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-blue/0 via-accent-blue/5 to-accent-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <motion.h2 
                className="font-orbitron text-2xl text-accent-blue mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                PROFILE
              </motion.h2>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Greetings, I'm <span className="text-accent-blue font-semibold">Kushal</span>, 
                  a motivated Electronics and Communication Engineering student with a passion for IoT development and innovative electronic solutions.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  My journey began at KLE Dr. M.S. Sheshgiri College of Engineering and Technology, where I completed my degree in 
                  Electronics and Communication Engineering. I'm passionate about IoT, firmware development, and creating solutions that enhance everyday life.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  I believe in the power of technology to solve real-world problems and am constantly learning new skills to stay at the forefront of innovation.
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills & Languages */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Strengths */}
          <div className="group relative bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6
                         hover:border-accent-blue/30 hover:bg-black/30 transition-all duration-500
                         shadow-lg hover:shadow-neon-blue">
            <motion.h3 
              className="font-orbitron text-lg text-accent-blue mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              SOFT SKILLS
            </motion.h3>
            <div className="space-y-3">
              {strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                  <span className="text-gray-300 text-sm">{strength}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="group relative bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6
                         hover:border-accent-blue/30 hover:bg-black/30 transition-all duration-500
                         shadow-lg hover:shadow-neon-blue">
            <motion.h3 
              className="font-orbitron text-lg text-accent-blue mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              LANGUAGES
            </motion.h3>
            <div className="space-y-3">
              {languages.map((language, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  className="flex justify-between items-center"
                >
                  <span className="text-gray-300 text-sm">{language}</span>
                  <span className="text-accent-blue text-xs font-semibold px-2 py-1 bg-accent-blue/10 rounded">
                    {languageProficiency[language]}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div className="group relative bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6
                         hover:border-accent-blue/30 hover:bg-black/30 transition-all duration-500
                         shadow-lg hover:shadow-neon-blue">
            <motion.h3 
              className="font-orbitron text-lg text-accent-blue mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              HOBBIES
            </motion.h3>
            <div className="space-y-3">
              {portfolioData.hobbies?.map((hobby, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                  <span className="text-gray-300 text-sm">{hobby}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Extra Curricular Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
        className="mt-20 relative z-10"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-gradient bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink bg-clip-text text-transparent">
              Extra Curricular Activities
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {extraCurricular.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                className="group bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl p-6
                           hover:border-accent-blue/30 hover:bg-black/30 transition-all duration-500
                           shadow-lg hover:shadow-neon-blue"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">{activity}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
