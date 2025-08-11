import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import portfolioData from '../data/portfolioData';

const Resume = () => {
  const { education, experience, skills, certifications } = portfolioData;

  return (
    <div className="container mx-auto px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-pixel text-indigo-300 mb-4">ADVENTURE LOG</h1>
        <div className="h-1 w-24 bg-indigo-500 mx-auto"></div>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          A chronicle of my skills, quests, and accomplishments in the realm of technology.
        </p>
      </motion.div>
      
      <div className="max-w-4xl mx-auto bg-gray-800 border-2 border-indigo-600 p-8 rounded-lg shadow-neon-blue">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h2 className="font-pixel text-2xl text-white">KUSHAL HIREMATH</h2>
            <p className="text-indigo-300 mt-2">Electronics & Communication Engineer</p>
          </div>
          <div className="mt-4 md:mt-0">
            <a 
              href="/resume.pdf" 
              download
              className="inline-block px-4 py-2 font-pixel text-sm bg-green-700 hover:bg-green-600 
                         text-white rounded-md shadow-neon-green transition-all duration-200"
            >
              DOWNLOAD FULL LOG
            </a>
          </div>
        </div>
        
        {/* Experience Section */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <h3 className="font-pixel text-xl text-blue-400">COMPLETED QUESTS</h3>
            <div className="ml-4 flex-grow h-px bg-blue-800"></div>
          </div>
          
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 border-l-4 border-blue-500 p-4"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h4 className="font-pixel text-indigo-300">{exp.title}</h4>
                    <p className="text-white">{exp.company}</p>
                  </div>
                  <p className="text-green-400 font-pixel text-sm mt-2 md:mt-0">{exp.period}</p>
                </div>
                <p className="text-gray-400 mt-2 mb-3">{exp.project}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                    <li key={idx} className="text-sm">{resp}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Skills Section */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <h3 className="font-pixel text-xl text-blue-400">CHARACTER SKILLS</h3>
            <div className="ml-4 flex-grow h-px bg-blue-800"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-pixel text-sm text-indigo-300 mb-2">PROGRAMMING</h4>
              <div className="flex flex-wrap gap-2">
                {skills.programmingLanguages.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-900 border border-indigo-600 text-indigo-300 
                            rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-pixel text-sm text-indigo-300 mb-2">DATABASE & TOOLS</h4>
              <div className="flex flex-wrap gap-2">
                {skills.database.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-900 border border-indigo-600 text-indigo-300 
                            rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Education Section */}
        <section>
          <div className="flex items-center mb-4">
            <h3 className="font-pixel text-xl text-blue-400">TRAINING GROUNDS</h3>
            <div className="ml-4 flex-grow h-px bg-blue-800"></div>
          </div>
          
          <div className="space-y-4">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 p-4"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h4 className="font-pixel text-indigo-300">{edu.degree}</h4>
                    <p className="text-white">{edu.institution}</p>
                  </div>
                  <p className="text-green-400 font-pixel text-sm mt-2 md:mt-0">{edu.period}</p>
                </div>
                <p className="text-indigo-200 mt-2">{edu.grade}</p>
              </motion.div>
            ))}
          </div>
        </section>
        
        <motion.div 
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Link to="/contact">
            <button className="px-6 py-3 bg-indigo-700 hover:bg-indigo-600 text-white 
                        font-pixel rounded-lg shadow-neon-blue transition-all duration-200 
                        border-2 border-indigo-500">
              SUMMON ME TO YOUR PARTY
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
