import { ValidationError, useForm } from "@formspree/react";
import { IoIosWarning } from "react-icons/io";
import { useAtom } from "jotai";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GrLocation } from "react-icons/gr";
import { FaChevronDown } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Code2, Box, Palette, Terminal, Database } from 'lucide-react';
import {ProjectCard} from '../components/ProjectCard';
import { Send, Mail, ExternalLink } from 'lucide-react';
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaItchIo } from "react-icons/fa";


const Section = (props) => {
  const { children, mobileTop } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 2xl:p-24 mx-auto 
  flex flex-col items-start
  ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center md:gap-[0rem] h-auto w-screen">
      <AboutSection setSection={setSection} />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;
  return (
    <Section mobileTop >
      <div className="w-full md:h-auto h-screen">
      <div className="md:hidden mt-4 w-2/3 px-1 py-2 flex flex-row items-center justify-start text-xs font-semibold text-yellow-100/60 bg-yellow-600/60 rounded-lg"><span><IoIosWarning size={28} className="mr-2 ml-1"/></span> Desktop experience recommended, some content may be omitted </div>
        <motion.h1 className="text-3xl md:text-5xl md:h-auto text-gray-300 font-extrabold leading-snug mt-6 md:mt-0 ">
          Hi, I'm
          <br />
          <motion.div className="md:my-1 text-indigo-400 md:text-7xl text-4xl font-extrabold drop-shadow-[0px_0px_38px_rgba(115,91,236,1)] ">Ayaan Rege</motion.div>
        </motion.h1>
        <motion.div
          className="text-2xl md:text-4xl text-gray-200 leading-snug font-semibold text-opacity-90 mt-3 md:mt-4"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
        >
          Student and Developer
          <br/>
          <div className="flex flex-row justify-start items-center p-0">
            <GrLocation color="#c4b5fd" className="md:h-16 md:w-8 h-4 w-4  mr-1 md:mr-0"/> <span className=" font-light md:text-[32px] text-[18px] tracking-wide md:mx-1 text-violet-300 text-opacity-100">  Phoenixville, PA</span>
          </div>
        </motion.div>
        <motion.button
          onClick={() => setSection(1)}
          className={`bg-transparent border-indigo-400 border-2 drop-shadow-[0px_0px_38px_rgba(115,91,236,1)] text-indigo-400 py-2 px-4 md:py-4 md:px-8
        rounded-lg font-bold text-md mt-6 md:mt-4 `}
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 2,
          }}
        >
        
          <div className="flex flex-row justify-center items-center">
            <span className="mx-2 drop-shadow-[0px_0px_38px_rgba(115,91,236,1)] hover:scale-105 md:text-2xl text-md transition">Continue</span>
            <FaChevronDown size = {16} />
            </div>
        </motion.button>
        
        
      </div>
    </Section>
  );
};

const skills = [
  {
    category: "Mobile Development",
    tech: "Flutter",
    icon: "src/assets/flutter1.png",
    description: "Cross-platform app development",
    color: "bg-blue-800/40",
    hoverColor: "group-hover:bg-blue-800/50",
    glow: "hover:shadow-blue-500/20"
  },
  {
    category: "Game Development",
    tech: "Godot",
    icon: "src/assets/godot.png",
    description: "2D/3D game creation",
    color: "bg-purple-800/40",
    hoverColor: "group-hover:bg-purple-700/50",
    glow: "hover:shadow-purple-500/20"
  },
  {
    category: "Frontend Development",
    tech: "React.js",
    icon: "src/assets/react.svg",
    description: "Web application development",
    color: "bg-cyan-800/40",
    hoverColor: "group-hover:bg-cyan-700/50",
    glow: "hover:shadow-cyan-500/20"
  },
  {
    category: "Styling",
    tech: "JAVA",
    icon: "src/assets/javalogo.png",
    description: "Modern CSS framework",
    color: "bg-teal-800/40",
    hoverColor: "group-hover:bg-teal-700/50",
    glow: "hover:shadow-teal-500/20"
  },
  {
    category: "Machine Learning",
    tech: "Python",
    icon: "src/assets/python1.png",
    description: "Backend & automation",
    color: "bg-yellow-800/40",
    hoverColor: "group-hover:bg-yellow-700/50",
    glow: "hover:shadow-yellow-500/20"
  },
  {
    category: "Styling",
    tech: "Tailwind",
    icon: "src/assets/tailwind.png",
    description: "Modern CSS framework",
    color: "bg-emerald-800/40",
    hoverColor: "group-hover:bg-emerald-700/50",
    glow: "hover:shadow-emerald-500/20"
  },
  {
    category: "Styling",
    tech: "Node.js",
    icon: "src/assets/nodejslogo.png",
    description: "Modern CSS framework",
    color: "bg-green-800/40",
    hoverColor: "group-hover:bg-green-700/50",
    glow: "hover:shadow-green-500/20"
  },
  {
    category: "Styling",
    tech: "HTML",
    icon: "src/assets/htmllogo.png",
    description: "Modern CSS framework",
    color: "bg-orange-800/40",
    hoverColor: "group-hover:bg-orange-700/50",
    glow: "hover:shadow-orange-500/20"
  },
  
  {
    category: "Styling",
    tech: "CSS",
    icon: "src/assets/csslogo.png",
    description: "Modern CSS framework",
    color: "bg-violet-800/40",
    hoverColor: "group-hover:bg-violet-700/50",
    glow: "hover:shadow-violet-500/20"

  },
  {
    category: "Styling",
    tech: "Supabase",
    icon: "src/assets/supabaselogo.png",
    description: "Modern CSS framework",
    color: "bg-green-800/40",
    hoverColor: "group-hover:bg-green-700/50",
    glow: "hover:shadow-green-500/20"
  },
  {
    category: "Styling",
    tech: "Github",
    icon: "src/assets/githublogo.png",
    description: "Modern CSS framework",
    color: "bg-indigo-800/40",
    hoverColor: "group-hover:bg-indigo-700/50",
    glow: "hover:shadow-indigo-500/20"
  },
  {
    category: "Styling",
    tech: "VSCODE",
    icon: "src/assets/vscodelogo.png",
    description: "Modern CSS framework",
    color: "bg-purple-800/40",
    hoverColor: "group-hover:bg-purple-700/50",
    glow: "hover:shadow-purple-500/20"
  },
];
const languages = [
  {
    title: "🇫🇷 French",
    level: 100,
  },
  {
    title: "🇺🇸 English",
    level: 80,
  },
  {
    title: "🇯🇵 Japanese",
    level: 20,
  },
];

const SkillsSection = () => {


  
  return (
    <Section className="">
      <div className="w-full md:mt-0 relative flex-col justify-center md:px-8 px-1 md:h-min h-screen" >
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        .skill-card {
          animation: fadeUp 0.5s ease-out forwards;
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .skill-card:hover {
          transform: translateY(-8px) scale(1.05);
        }

        .skill-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 0.75rem;
          background: inherit;
          opacity: 0;
          z-index: 0;
          transition: all 0.4s ease;
        }

        .skill-card:hover::after {
          opacity: 1;
          animation: glow 2s ease-in-out infinite;
        }

        .skill-card .content {
          position: relative;
          z-index: 1;
        }

        .icon-bg {
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .skill-card:hover .icon-bg {
          transform: rotate(12deg) scale(1.2);
        }

        .icon-bg {
          transition: all 0.4s ease;
        }

        .external-link-icon {
          transition: transform 0.3s ease;
        }

        .skill-card:hover .external-link-icon {
          transform: rotate(15deg) scale(1.1);
        }


      `}</style>
      <div className="w-full relative flex flex-col md:flex-row md:gap-24 gap-8 md:mt-0 mt-6 ">
        <div className="md:w-2/3 w-full md:h-full h-min">
        
            <motion.h2 className="text-3xl md:text-5xl font-bold text-gray-200/80"
        
            initial={{
                          opacity: 0,
                          y: 25,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 1,
                          delay: 0.75,
                        }}
                        >
                          Skills
        
                        </motion.h2>
            <div className="mt-4 md:mt-8 gap-2 w-full md:w-[25rem] grid grid-cols-3 place-items-center">
              {skills.map((skill, index) => (
                <div className="w-full md:w-[8rem]" key={index}>
                <motion.div
                        initial={{
                          opacity: 0,
                          y: 25,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 1,
                          delay: 1+ (index * .100),
                        }}
                  key={index}
                  className={`skill-card group relative p-4 rounded-xl bg-indigo-950
                            border-1 border-red-200 cursor-pointer shadow-lg
                            hover:shadow-xl hover:border-gray-500 hover:text-gray-300 overflow-hidden`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`absolute inset-0 transition-colors duration-300 ${skill.hoverColor}`} />
                  <div className="content">
                    <div className="flex flex-col items-center gap-2">
                      <div className="icon-bg w-[74px] h-[74px] rounded-lg justify-center items-center flex flex-col">
                          <img src={skill.icon} className="bg-transparent object-contain w-[74px] h-[74px]"/>
                      </div>
                      <div>
                        <h3 className="font-semibold  tracking-wider md:text-md text-sm group-hover:text-gray-300 text-gray-400">
                          {skill.tech.toUpperCase()}
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
                </div>
              ))}
            </div>
        </div>
        <div className="md:w-1/3 md:h-full hidden md:block">
        
            <h2 className="text-3xl md:text-5xl font-bold text-gray-200/80"
        
            // initial={{
            //               opacity: 0,
            //               y: 100,
            //             }}
            //             whileInView={{
            //               opacity: 1,
            //               y: -10,
            //             }}
            //             transition={{
            //               duration: 1,
            //               delay: 0.75,
            //             }}
                        >
                          Education
        
                        </h2>
            <div className="mt-4 md:mt-8 space-y-2 md:space-y-4 text-gray-200/80 bg-indigo-950 p-6 rounded-2xl tracking-wider flex flex-col justify-center items-start">
                  <span className="flex flex-row items-center justify-between w-full h-min">
                    <div className="md:text-4xl text-2xl font-bold">The Hill School</div>
                    <div className="w-[80px] h-[80px]">
                      <img src="src/assets/hilllogoportfolio2.png"></img>
                    </div>

                  </span>
                  <div className="flex flex-row items-center justify-start text-md md:text-2xl">
                        <div className="">Pottstown, PA</div>
                        <div className="ml-4 md:text-lg text-sm font-extralight">2022-2026 (11th)</div>

                  </div>
                  <div className="md:text-xl text-sm italic text-gray-200/70"> Prestigious Coeducational Preparatory Boarding School </div>
                  <div className="md:text-xl text-sm text-gray-200/60"> <span className="text-gray-100/70 font-semibold">Activities and Societies: </span>Student Government Association (10th Grade Representative, 11th Grade Representative), Technology Student Association ( Officer), DECA member, DEI Council, South Asian Student Association Co-President, Day Student Prefect, Varsity Tennis </div>
                  <div className="md:text-xl text-sm text-gray-200/60"> <span className="text-gray-100/70 font-semibold">Awards and Honors: </span> The Sander's Family Prize for Excellence in Engineering, The Thomas G. Ruth Prize For Excellence in Technology, Codementum International Coding Competition 1st Place </div>
            </div>
        </div>

      </div>

      </div>
    </Section>
  );
};

export const projects = [
  {
    title: "House of the Baron",
    url: "https://ay28.itch.io/house-of-the-baron",
    description: "House of the Baron is a single-player adventure game that I developed with a team for the Technology Student Association. It follows a lone adventurer as he travels through an old haunted mansion. As he progresses through the house, he faces different enemies and fights the ghosts of the previous inhabitants. This game qualified us for the National TSA Conference.",
    shortDesc: "A single-player adventure game set in a haunted mansion, developed for the Technology Student Association.",
    type: "Web Game",
    image: "src/assets/projects/hotb.png",
    color: "bg-purple-800/50",
    hoverColor: "group-hover:bg-purple-80/50",
    glow: "hover:shadow-purple-600/20",
    border: "border-purple-800",
    githubbg: "bg-purple-950",
    skillsUsed: ["Godot/GDScript", "HTML"],
    github: "https:www.youtube.com/watch?v=EkYmS-FcjoI",
    isNew: false,
  },
  {
    title: "Scrub Club",
    url: "https://scrubclubscleaning.com",
    description: "Scrub Club is a website that I created and deployed for the company Scrub Club, to help them attract users in the greater Collegeville Area. Featuring a responsive design, user testimonials, photos of results and a custom cleaning request tool, it has succesfully attracted hundreds of users and remains essential to the business.",
    shortDesc: "A responsive business website for Scrub Club cleaning company with booking tools and testimonials.",
    type: "webapp",
    image: "src/assets/projects/scrubclubs2.png",
    color: "bg-cyan-600/50",
    hoverColor: "group-hover:bg-cyan-700/50",
    glow: "hover:shadow-cyan-500/20",
    border: "border-cyan-500/70",
    githubbg: "bg-cyan-950",
    skillsUsed: ["React", "Tailwind"],
    github: "https:www.youtube.com/watch?v=EkYmS-FcjoI",
    isNew: false,
  },
  {
    title: "Clarity",
    url: "https://www.youtube.com/watch?v=EkYmS-FcjoI",
    description: "Clarity is a mobile app that gives users powerful vision-accessibility tools with the help of AI. From colorblindness contrasting to visual question answering, Clarity provides an inclusive and empowering experience for users of all abilities. Clarity also won first place in the 2024 Congressional App Challenge, giving us the opportunity to present our app to many congressmen and congresswoman at #HouseOfCode.",
    shortDesc: "Award-winning AI-powered mobile app for vision accessibility, winner of the 2024 Congressional App Challenge.",
    type: "app",
    image: "src/assets/projects/clarity3.jpeg",
    image2: "src/assets/projects/clarity.jpeg",
    image3: "src/assets/projects/clarity4.jpeg",
    color: "bg-sky-500/50",
    hoverColor: "group-hover:bg-sky-700/50",
    glow: "hover:shadow-sky-500/20",
    border: "border-sky-500",
    githubbg: "bg-sky-950",
    skillsUsed: ["Flutter/Dart", "Python"],
    github: "https:www.youtube.com/watch?v=EkYmS-FcjoI",
    isNew: true,
  },
  {
    title: "WriteRight",
    url: "https://apps.apple.com/us/app/writeright/id6461645586",
    description: "WriteRight is an iOS app that I developed individually between December 2022 and August 2023, and it allows users to scan and analyze handwritten text for grammar and spelling errors. After its release, it has accumulated over 3,500 downloads from over 50 countries, and won second place in the 2023 Congressional App Challenge.",
    shortDesc: "iOS app for scanning and analyzing handwritten text, with 3,500+ downloads across 50+ countries.",
    type: "app",
    image: "src/assets/projects/writeright3.jpeg",
    image2: "src/assets/projects/writeright2.jpg",
    image3: "src/assets/projects/writeright4.jpg",
    color: "bg-red-500/50",
    hoverColor: "group-hover:bg-red-700/50",
    glow: "hover:shadow-red-500/20",
    border: "border-red-400/70",
    githubbg: "bg-red-950",
    skillsUsed: ["Flutter/Dart", "Python"],
    github: "https:www.youtube.com/watch?v=EkYmS-FcjoI",
    isNew: false,
  },
  {
    title: "PeakClips",
    url: "https://peakclips.netlify.app",
    description: "PeakClips is a fullstack social media app designed for sharing and viewing video clips and images, particularly of video games. The site functions as a secure React-based web app with a cloud backend and is constantly content-moderated by an advanced AI system. I built this app with fellow Hill student Ambrose Cole, and we have accumulated hundreds of users since its creation.",
    shortDesc: "AI-moderated social media platform for sharing gaming clips and images, built with React.",
    type: "webapp",
    image: "src/assets/projects/peakclips.png",
    color: "bg-blue-700/50",
    hoverColor: "group-hover:bg-blue-700/50",
    glow: "hover:shadow-blue-500/20",
    border: "border-blue-500",
    githubbg: "bg-blue-950",
    skillsUsed: ["React", "Tailwind"],
    github: "https:www.youtube.com/watch?v=EkYmS-FcjoI",
    isNew: false,
  },
];
// Mockup components with added interactivity
const IPhoneMockup = ({ child1, child2, child3, className = '' }) => (
<div className="flex flex-row hover:cursor-pointer hover:scale-105 hoverable transition-all hover:rotate-1 duration-300">
  
{/* first phone */}
<div className={`relative opacity-70 w-32 h-[240px] md:w-64 md:h-[480px] bg-black md:rounded-[40px] rounded-[20px] scale-90 -rotate-6 p-1 md:p-2 shadow-2xl border-[4px] md:border-[8px] border-gray-800 transition-all duration-300 ${className}`}>
    {/* Top notch */}
    <div className="absolute top-1 md:top-2 left-1/2 transform -translate-x-1/2 md:w-24 w-12 md:h-3 h-1 bg-black rounded-b-[20px] md:rounded-b-xl z-10">
      <div className="w-12 h-2 bg-gray-900 mx-auto rounded-b-md"></div>
    </div>
    
    {/* Side volume buttons */}
    <div className="absolute left-[-8px] top-36 w-1 h-12 bg-gray-600 rounded-l"></div>
    <div className="absolute left-[-8px] top-48 w-1 h-8 bg-gray-600  rounded-l"></div>
    
    {/* Power button */}
    <div className="absolute right-[-8px] top-36 w-1 h-12 bg-gray-600  rounded-r"></div>
    
    <div className="w-full h-full bg-white rounded-[18px] md:rounded-[36px] overflow-hidden relative">
      {child1}

    </div>
</div>
{/* middle phone */}
    <div className={`relative w-32 h-[240px] md:w-64 md:h-[480px] bg-black md:rounded-[40px] rounded-[20px] p-1 md:p-2 shadow-2xl border-[4px] md:border-[8px] z-40 -mx-12 border-gray-800 transition-all duration-300 ${className}`}>
      {/* Top notch */}
      <div className="absolute top-1 md:top-2 left-1/2 transform -translate-x-1/2 md:w-24 w-12 md:h-3 h-1 bg-black rounded-b-[20px] md:rounded-b-xl z-10">
        <div className="w-12 h-2 bg-gray-900 mx-auto rounded-b-md"></div>
      </div>
  
      {/* Side volume buttons */}
      <div className="absolute left-[-8px] top-36 w-1 h-12 bg-gray-600  rounded-l"></div>
      <div className="absolute left-[-8px] top-48 w-1 h-8 bg-gray-600  rounded-l"></div>
  
      {/* Power button */}
      <div className="absolute right-[-8px] top-36 w-1 h-12 bg-gray-600  rounded-r"></div>
  
      <div className="w-full h-full bg-white rounded-[18px] md:rounded-[36px] overflow-hidden relative">
        {child2}
  
      </div>
  
    </div>
    {/* last phone */}
    <div className={`relative opacity-70 w-32 h-[240px] md:w-64 md:h-[480px] bg-black md:rounded-[40px] rounded-[20px] scale-90 rotate-6 p-1 md:p-2 shadow-2xl border-[4px] md:border-[8px] border-gray-800 transition-all duration-300 ${className}`}>
    {/* Top notch */}
    <div className="absolute top-1 md:top-2 left-1/2 transform -translate-x-1/2 md:w-24 w-12 md:h-3 h-1 bg-black rounded-b-[20px] md:rounded-b-xl z-10">
      <div className="w-12 h-2 bg-gray-900 mx-auto rounded-b-md"></div>
    </div>
    
    {/* Side volume buttons */}
    <div className="absolute left-[-8px] top-36 w-1 h-12 bg-gray-600  rounded-l"></div>
    <div className="absolute left-[-8px] top-48 w-1 h-8 bg-gray-600  rounded-l"></div>
    
    {/* Power button */}
    <div className="absolute right-[-8px] top-36 w-1 h-12 bg-gray-600  rounded-r"></div>
    
    <div className="w-full h-full bg-white rounded-[18px] md:rounded-[36px] overflow-hidden relative">
      {child3}

    </div>
</div>
</div>
);

const ComputerMockup = ({ child1, child2, child3, className = '' }) => (
  <div className={`relative w-[315px] h-[160px] md:w-[720px] md:h-[480px] bg-gray-800 rounded-lg shadow-2xl hover:rotate-1 transition-all duration-300 hover:scale-105 hoverable hover:cursor-pointer${className}`}>
    {/* Monitor stand */}
    <div className="absolute bottom-[-10px] md:bottom-[-20px] left-1/2 transform -translate-x-1/2 md:w-48 md:h-4 w-24 h-2 bg-gray-800 rounded-b-lg">
      <div className="absolute bottom-[-4px] md:bottom-[-8px] left-1/2 transform -translate-x-1/2 md:w-24 md:h-2 w-12 h-1  bg-gray-700/80 rounded-b"></div>
    </div>
    
    {/* Bezel */}
    <div className="w-full h-full bg-gray-900/70  p-[0.25rem] rounded-lg">
      <div className="w-full h-full bg-gray-900/80 rounded overflow-hidden relative">
        
        <div className="">{child1}</div>
        


      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = React.useState(
    Math.floor(projects.length / 2)
  );

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  const handleProjectClick = (url) => {
    window.open(url, "_blank");
  };


  const Mockup = projects[currentProject].type === "app" ? IPhoneMockup : ComputerMockup;

  return (
    <div className="w-full h-screen flex flex-col items-center justify-start relative mt-0 md:mt-2 md:p-16 p-10 gap-16">
      <section className="w-full md:h-min h-screen flex flex-col md:flex-row items-center md:justify-start justify-evenly relative align-center mt-18 md:gap-8">
        {/* Animated Mockup at the top */}
        <motion.div
          className="mb-0 md:mb-8 w-full flex justify-center md:justify-end items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          onClick={() => handleProjectClick(projects[currentProject].url)}
        >
          <Mockup

          child1={<img src = {projects[currentProject].image}></img>}
          child2={<img src = {projects[currentProject].image2}></img>}
          child3={<img src = {projects[currentProject].image3}></img>}
          onClick={() => handleProjectClick(projects[currentProject].url)}>


          </Mockup>
        </motion.div>
        <div className="relative flex justify-center md:justify-start items-center w-full px-8 gap-8 mt-40 mb-24">
        <AnimatePresence>
  {projects.map((project, index) => (
    <ProjectCard 
            isNew={project.isNew}
            key={project.title}
            project={project}
            isCenter={index === currentProject}
            onClick={() => setCurrentProject(index)}
          />
        ))}
    </AnimatePresence>
        </div>
      </section>
      
      <div className="z-30 flex  w-full items-center justify-center py-8 px-4 relative">
      <motion.div 
        className="flex items-center space-x-8 bg-indigo-950/60 backdrop-blur-sm rounded-full p-6 shadow-2xl border-2 border-indigo-900/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <motion.button
          className="text-white hover:text-indigo-400 bg-indigo-900/70 rounded-full p-2 transition-all"
          onClick={previousProject}
          whileHover={{ 
            scale: 1.1,
            backgroundColor: 'rgba(55, 48, 163, 0.5)' // indigo-900 with opacity
          }}
          whileTap={{ scale: 0.9 }}
          aria-label="Previous Project"
        >
          <ChevronLeft size={24} />
        </motion.button>
        
        <motion.h2 
          className="text-3xl font-extrabold tracking-tight 
                     text-gray-200/80
                     
                     drop-shadow-[0px_0px_12px_rgba(255,255,255,0.2)]
                     md:text-4xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 120, 
            damping: 10,
            delay: 0.2 
          }}
        >
          Projects
        </motion.h2>
        
        <motion.button
          className="text-white hover:text-indigo-400 bg-indigo-900/70 rounded-full p-2 transition-all"
          onClick={nextProject}
          whileHover={{ 
            scale: 1.1,
            backgroundColor: 'rgba(55, 48, 163, 0.5)' // indigo-900 with opacity
          }}
          whileTap={{ scale: 0.9 }}
          aria-label="Next Project"
        >
          <ChevronRight size={24} />
        </motion.button>
      </motion.div>
    </div>
    </div>
  );
};

export default ProjectsSection;

const ContactSection = () => {
  const [state, handleSubmit] = useForm("movqoano");

  const socials = [
    {
      category: "LinkedIn",
      username: "Ayaan Rege",
      icon: <FaLinkedin size={24}/>,
      description: "LinkedIn",
      color: "bg-blue-800/40",
      hoverColor: "group-hover:bg-blue-800/50",
      glow: "hover:shadow-blue-500/20",
      link: "https://www.linkedin.com/in/ayaan-rege/details/education/"
    },
    {
      category: "Github",
      username: "A28R",
      icon: <FaGithub size={24}/>,
      description: "LinkedIn",
      color: "bg-blue-800/40",
      hoverColor: "group-hover:bg-blue-800/50",
      glow: "hover:shadow-blue-500/20",
      link: "https://github.com/A28R"
    },
    {
      category: "Itch.io",
      username: "ay28",
      icon: <FaItchIo size={24}/>,ption: "Telegram",
      color: "bg-purple-800/40",
      hoverColor: "group-hover:bg-purple-700/50",
      glow: "hover:shadow-purple-500/20",
      link: "https://ay28.itch.io/"
    },
    {
      category: "Email",
      username: "ayrege08@gmail.com",
      icon: <SiGmail size={24}/>,
      description: "Web application development",
      color: "bg-cyan-800/40",
      hoverColor: "group-hover:bg-cyan-700/50",
      glow: "hover:shadow-cyan-500/20",
      link: "mailto:ayrege08@gmail.com"
    },
    {
      category: "Instagram",
      username: "ayaanrege",
      icon: <FaInstagram size={24}/>,
      description: "Modern CSS framework",
      color: "bg-emerald-800/40",
      hoverColor: "group-hover:bg-emerald-700/50",
      glow: "hover:shadow-emerald-500/20",
      link: "https://www.instagram.com/ayaanrege/"
    },

  ];


  return (
    <Section>
      <div className="w-full flex md:mt-0 mt-12 md:h-min h-screen md:flex-row flex-col">

        <div className="md:mr-6 md:block hidden">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-200/80">Contact me</h2>
            {state.succeeded ? (
              <div className="mt-7 py-5 px-8 rounded-md bg-green-400 bg-opacity-50 w-auto">
              <p className="text-xl font-bold text-green-300 text-center">Thanks for your message !</p>
                </div>
            ) : (
              <motion.div className="mt-8 p-8 rounded-xl md:bg-indigo-900/50 bg-indigo-900 bg-opacity-50 w-96 max-w-full">
              <form onSubmit={handleSubmit}>
                <label for="name" className="font-bold text-gray-300 text-xl block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block bg-indigo-300 focus:bg-indigo-200 w-full rounded-md border-0 text-indigo-900 shadow-sm ring-1 ring-inset ring-indigo-800 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
                />
                <label
                  for="email"
                  className="font-bold text-gray-300 text-xl block mb-2 mt-8"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block bg-indigo-300 focus:bg-indigo-200 w-full rounded-md border-0 text-indigo-900 shadow-sm ring-1 ring-inset ring-indigo-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
                />
                <ValidationError
                  className="mt-1 text-red-500"
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <label
                  for="email"
                  className="font-bold text-gray-300 text-xl block mb-2 mt-8"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="h-32 block bg-indigo-300 focus:bg-indigo-200 w-full rounded-md border-0 text-indigo-900 shadow-sm ring-1 ring-inset ring-indigo-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
                />
                <ValidationError
                  className="mt-1 text-red-500"
                  errors={state.errors}
                />
                <button
                  disabled={state.submitting}
                  className="bg-indigo-800/90 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 "
                >
                  Submit
                </button>
              </form>
              </motion.div>
            )}
          
          
        </div>

        <div className="h-screen">
        
          <motion.h2 className="text-3xl md:text-5xl font-bold text-gray-200/80"
          initial={{
                        opacity: 0,
                        y: 25,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 1,
                        delay: 0.75,
                      }}
                      >
                        Socials
                      </motion.h2>
          <div className="mt-8 space-y-2 md:space-y-4">
            {socials.map((skill, index) => (
                          <a
                          href={skill.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          key={index}
                          className={`w-full md:w-[20rem]`}
                          style={{ animationDelay: `${index * 150}ms` }}
                        >
              <div className="w-full md:w-[20rem] my-3" key={index}>
              <motion.div
                      initial={{
                        opacity: 0,
                        y: 25,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 1,
                        delay: 1+ (index * .100),
                      }}
                key={index}
                className={`skill-card group relative p-6 rounded-xl md:bg-indigo-950/70 bg-indigo-950
                          border-1 border-red-200 cursor-pointer shadow-lg
                          hover:shadow-xl hover:border-gray-500 hover:text-gray-300 overflow-hidden`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`absolute inset-0 transition-colors duration-300 ${skill.hoverColor}`} />
                <div className="content">
                  <div className="content flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="icon-bg w-9 h-9 rounded-lg justify-center items-center flex flex-col">
                      <div className="icon w-6 h-6 text-gray-400">
                        {skill.icon}
                      </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">
                          {skill.username}
                        </p>
                        <h3 className="font-semibold text-lg text-gray-300/80">
                          {skill.category}
                        </h3>
                    
                      </div>
                    </div>
                    <div className="external-link-icon   text-gray-400 group-hover:text-white">
                    <ExternalLink className="w-5 h-5" />
                                    </div>
                  </div>
                  
                </div>
                
              </motion.div>
              </div>
              </a>
            ))}
          </div>
        </div>


      </div>

    </Section>
  );
};