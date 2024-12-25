import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GitHubIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export const ProjectCard = ({ project, isCenter, onClick, isNew }) => {
  return (
    <motion.div
      className={`absolute transition-all duration-300 ${
        isCenter
          ? 'z-20 scale-100 opacity-100'
          : 'z-10 opacity-50'
      }`}
      initial={{
        x: 0,
        y: isCenter ? 0 : 300,
        scale: isCenter ? 1 : 0.7,
        opacity: isCenter ? 1 : 0
      }}
      animate={{
        x: 0,
        y: isCenter ? 0 : 300,
        scale: isCenter ? 1 : 0.7,
        opacity: isCenter ? 1 : 0
      }}
      transition={{ duration: 0.15 }}
      onClick={() => !isCenter && onClick()}
    >
      <motion.div
        className={`
          md:max-w-[45rem] max-w-[26rem] w-full 
          md:p-6 py-3 px-6 ${project.color} 
          rounded-xl shadow-2xl 
          cursor-pointer 
          group
          ${project.hoverColor}
          ${project.glow}
          transition-all duration-300
          border-[1px] ${project.border}
        `}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex flex-col space-y-4">
          {/* Project Header */}
          <div className="flex justify-between items-center">
            <motion.h3
              className="text-xl md:text-3xl font-bold text-gray-200 flex flex-row justify-center items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            >
              {project.title}

              {isNew == true? (<span className=' align-middle font-semibold md:text-lg  text-[0.75rem] text-gray-200/80 mx-6 px-2 py-[0.125rem]  md:px-3  md:py-1 bg-white/20 rounded-xl'>NEW</span>):(<span></span>)}

            </motion.h3>
            
            {/* External Links */}
            <div className="flex space-x-2">
              {project.url && (
                <a 

                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-200 hover:text-white transition-colors"
                >
                  <ExternalLink className="md:w-6 md:h-6 w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Project Description */}
          <motion.p
            className="text-gray-300 md:text-lg text-md md:leading-relaxed leading-tight md:block hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            {project.description}
          </motion.p>

          {/* Shortened Project Description (for mobile) */}
          <motion.p
            className="text-gray-300 md:text-lg text-md md:leading-relaxed leading-tight md:hidden block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            {project.shortDesc}
          </motion.p>

          {/* Project Type and Skills */}
          <div className="flex justify-between items-center">
            <div className="flex items-center  space-x-2">
              <span className="md:text-sm text-lg text-white/50 uppercase tracking-wider">
                {project.type}
              </span>
            </div>
            
            {/* Skills Used */}
            <div className="flex md:flex-row flex-col justify-center md:space-x-2 space-y-2">
              {project.skillsUsed.map((skill) => (
                <span 
                  key={skill}

                  className="
                    md:px-3 md:py-2 px-[0.75rem] py-[0.4rem]
                    bg-white/10
                    border-white/20
                    border-[1px]
                    rounded-full 
                    text-[0.5rem]
                    md:text-xs 
                    text-white
                    font-semibold
                    uppercase 
                    tracking-wider
                    hover:scale-105
                    hover:bg-white/5
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Project Buttons Section */}
          <div className="flex space-x-4 mt-4 w-full">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                
                  flex-1 
                  flex items-center justify-center 
                  text-indigo-200 
                  py-2 
                  rounded-lg
                  bg-gray-950/40
                  hover:bg-gray-950/80
                  transition-colors
                  space-x-2
                "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GitHubIcon />
                <span className="text-sm md:block hidden font-medium">GitHub</span>
              </motion.a>
            )}
            
            {project.url && (
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className='
                ${project.githubbg} 
                flex items-center justify-center 
                bg-white/10 
                flex-[2] 
                  text-white 
                  py-3 
                  rounded-lg 
                  hover:bg-white/5
                  transition-colors
                  space-x-2
                '
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" />
                <span className="text-sm md:block hidden font-semibold">Visit Project</span>
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;