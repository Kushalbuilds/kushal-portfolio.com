import { motion } from 'framer-motion';

const ProjectCard = ({ project, index, selectedProject, setSelectedProject }) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div 
        className="bg-gray-800 border-2 border-indigo-600 rounded-lg overflow-hidden shadow-neon-blue h-full cursor-pointer"
        whileHover={{ scale: 1.03, y: -5 }}
        onClick={() => setSelectedProject(selectedProject === index ? null : index)}
      >
        {/* Project Card Header */}
        <div className="bg-indigo-900 p-4 flex justify-between items-center">
          <h2 className="font-pixel text-lg text-white">{project?.name || "Project"}</h2>
          <div className="flex items-center">
            <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
            <span className="text-xs text-green-400 font-pixel">RARE</span>
          </div>
        </div>
        
        {/* Project Card Body */}
        <div className="p-5">
          <p className="text-gray-300 mb-4">{project?.description || "No description available."}</p>
          
          {/* Project Details (conditionally shown) */}
          {selectedProject === index && (
            <div className="border-t border-indigo-800 my-4 pt-4">
              <h3 className="font-pixel text-blue-400 mb-2">QUEST OBJECTIVE</h3>
              <p className="text-gray-400 mb-4">{project?.objective || "No objective specified."}</p>
              
              <h3 className="font-pixel text-blue-400 mb-2">TOOLS USED</h3>
              <p className="text-gray-400 mb-4">{project?.technologiesUsed || "No technologies specified."}</p>
              
              {project?.deployment && (
                <>
                  <h3 className="font-pixel text-blue-400 mb-2">DEPLOYMENT</h3>
                  <p className="text-gray-400">{project.deployment}</p>
                </>
              )}
            </div>
          )}
          
          {/* Project Links */}
          <div className="flex justify-between items-center mt-4">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProject(selectedProject === index ? null : index);
              }}
              className="font-pixel text-xs text-indigo-300 hover:text-indigo-200"
            >
              {selectedProject === index ? "[ HIDE DETAILS ]" : "[ VIEW DETAILS ]"}
            </button>
            
            <div className="space-x-3">
              <a 
                href="#" 
                onClick={(e) => e.stopPropagation()}
                className="px-3 py-1 bg-blue-800 hover:bg-blue-700 text-white font-pixel text-xs rounded-md"
              >
                DEMO
              </a>
              <a 
                href="#" 
                onClick={(e) => e.stopPropagation()}
                className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white font-pixel text-xs rounded-md"
              >
                CODE
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
