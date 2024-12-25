import React, { useState, useEffect } from 'react';
import { Code2, Box, Palette, Terminal, Database } from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    {
      category: "Mobile Development",
      tech: "Flutter/Dart",
      icon: <Box />,
      description: "Cross-platform app development",
      color: "bg-blue-900/30",
      hoverColor: "group-hover:bg-blue-800/50",
      glow: "hover:shadow-blue-500/20"
    },
    {
      category: "Game Development",
      tech: "Godot/GDScript",
      icon: <Terminal />,
      description: "2D/3D game creation",
      color: "bg-purple-900/30",
      hoverColor: "group-hover:bg-purple-800/50",
      glow: "hover:shadow-purple-500/20"
    },
    {
      category: "Frontend Development",
      tech: "React.js",
      icon: <Code2 />,
      description: "Web application development",
      color: "bg-cyan-900/30",
      hoverColor: "group-hover:bg-cyan-800/50",
      glow: "hover:shadow-cyan-500/20"
    },
    {
      category: "Styling",
      tech: "Tailwind CSS",
      icon: <Palette />,
      description: "Modern CSS framework",
      color: "bg-emerald-900/30",
      hoverColor: "group-hover:bg-emerald-800/50",
      glow: "hover:shadow-emerald-500/20"
    },
    {
      category: "Programming",
      tech: "Python",
      icon: <Database />,
      description: "Backend & automation",
      color: "bg-yellow-900/30",
      hoverColor: "group-hover:bg-yellow-800/50",
      glow: "hover:shadow-yellow-500/20"
    }
  ];

  return (
    <div className="bg-gray-900 text-gray-100 py-16 px-4">
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

        .icon {
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .skill-card:hover .icon {
          transform: rotate(12deg) scale(1.2);
        }

        .icon-bg {
          transition: all 0.4s ease;
        }

        .skill-card:hover .icon-bg {
          transform: scale(1.1);
          background-color: rgba(31, 41, 55, 0.8);
        }
      `}</style>
      
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`skill-card group relative p-6 rounded-xl ${skill.color} 
                         border border-gray-700 cursor-pointer shadow-lg
                         hover:shadow-xl hover:border-gray-500 overflow-hidden`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`absolute inset-0 transition-colors duration-300 ${skill.hoverColor}`} />
              <div className="content">
                <div className="flex items-center gap-3">
                  <div className="icon-bg p-3 bg-gray-800 rounded-lg">
                    <div className="icon w-6 h-6">
                      {skill.icon}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">
                      {skill.category}
                    </p>
                    <h3 className="font-semibold text-lg">
                      {skill.tech}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;