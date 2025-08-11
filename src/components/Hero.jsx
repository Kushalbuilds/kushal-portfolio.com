import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="bg-[#F8FAFC] text-[#334155] py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 md:space-y-8"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <TypeAnimation
              sequence={[
                'Hello, I\'m KUSHAL HIREMATH',
                1000,
                'I\'m an Electronics Engineer',
                1000,
                'I build IoT solutions',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          
          <motion.p 
            className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Motivated Electronics and Communication Engineering student seeking a responsible career opportunity 
            in a reputed organization to leverage my technical knowledge, problem-solving skills, and adaptability.
          </motion.p>
          
          <motion.div 
            className="flex flex-col md:flex-row justify-center gap-4 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {/* View Projects Button */}
            <motion.a 
              href="#projects"
              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-md font-medium transition-transform duration-300"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
            >
              View Projects
            </motion.a>
            
            {/* Download Resume Button */}
            <motion.a 
              href="/resume.pdf" 
              target="_blank"
              className="border-2 border-blue-600 text-blue-700 px-6 py-3 rounded-md font-medium transition-colors duration-300"
              whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
            >
              Download Resume
            </motion.a>
            
            {/* LinkedIn Button */}
            <motion.a 
              href="https://www.linkedin.com/in/kushal-hiremath" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-700 px-6 py-3 rounded-md font-medium"
              whileHover={{ textDecoration: "underline" }}
            >
              LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
