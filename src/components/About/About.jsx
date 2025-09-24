import { motion } from "framer-motion";
import { useState, useEffect, useMemo, lazy, Suspense } from "react";
import { 
  FaServer, 
  FaReact, 
  FaDatabase, 
  FaJava, 
  FaRocket,
  FaLightbulb,
  FaGraduationCap,
  FaCode
} from "react-icons/fa";
import {
  SiSpring,
  SiSpringboot,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiDocker
} from "react-icons/si";

// Lazy load GitHubContributions component
const GitHubContributions = lazy(() => import('./GitHubContributions'));

function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Use passive listener for better performance
    const handleResize = () => {
      // Debounce resize events
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(checkMobile, 100);
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(window.resizeTimeout);
    };
  }, []);

  // Professional Highlights - Key achievements and competencies for recruiters
  const professionalHighlights = useMemo(() => [
    {
      category: "Project Excellence",
      icon: <FaRocket />,
      achievements: [
        { 
          title: "CodeHub Platform", 
          description: "Full-stack web application with Spring Boot & React",
          impact: "End-to-end development"
        },
        { 
          title: "NatureGrain E-commerce", 
          description: "E-commerce solution with secure payment integration",
          impact: "Production deployment"
        }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Technical Excellence", 
      icon: <FaCode />,
      achievements: [
        { 
          title: "Modern Stack Mastery", 
          description: "Java Spring Boot, React 19, MySQL expertise",
          impact: "Industry-standard skills"
        },
        { 
          title: "DevOps Integration", 
          description: "Docker containerization & deployment automation",
          impact: "Production-ready"
        }
      ],
      color: "from-blue-500 to-purple-500"
    },
    {
      category: "Academic Achievement",
      icon: <FaGraduationCap />,
      achievements: [
        { 
          title: "Information Technology", 
          description: "Industrial University of Ho Chi Minh City",
          impact: "Strong foundation"
        },
        { 
          title: "Continuous Learning", 
          description: "Self-driven skill development & technology adoption",
          impact: "Growth mindset"
        }
      ],
      color: "from-purple-500 to-pink-500"
    }
  ], []);

  const experiences = useMemo(() => [
    {
      icon: <FaRocket />,
      title: "Full-Stack Development", 
      description: "Building end-to-end applications with modern tech stack"
    },
    {
      icon: <FaServer />,
      title: "Backend Architecture",
      description: "Designing scalable microservices and RESTful APIs"
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solving",
      description: "Creating efficient solutions for complex business challenges"
    },
    {
      icon: <FaGraduationCap />,
      title: "Continuous Learning",
      description: "Always exploring new technologies and best practices"
    }
  ], []);

  return (
    <section className="section-padding py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto mb-8"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Passionate developer creating digital experiences that make a difference
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Left: Avatar & About Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: isMobile ? 0.4 : 0.8,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Avatar Section */}
            <motion.div
              className="flex justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: isMobile ? 0.4 : 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden glass-effect p-1">
                  <img
                    src="/avatar.jpg"
                    alt="Anisa Shaik"
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                  />
                </div>
                {/* Floating badges */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full flex items-center justify-center glass-effect">
                  <FaCode className="text-white text-xl" />
                </div>
                <div className="absolute -bottom-2 -left-2 w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center glass-effect">
                  <FaRocket className="text-white text-lg" />
                </div>
              </div>
            </motion.div>

            <div className="card">
              <h3 className="text-2xl font-bold text-slate-100 mb-4">Hello! I'm Anisa Shaik</h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  I'm a <span className="text-blue-400 font-semibold">Full-Stack Developer</span> with a passion for building 
                  enterprise-level applications using <span className="text-green-400 font-semibold">my knowledge</span> and
                  <span className="text-green-400 font-semibold"> my skills</span>.
                </p>
                <p>I’m a passionate problem solver, a technology enthusiast, and a lifelong learner dedicated to creating impactful solutions. My journey in computer science has been fueled by a love for innovation and a drive to explore cutting-edge technologies.
                </p>
                <p>
                  When I’m not writing code or optimizing systems, you’ll often find me diving into new trends, brainstorming creative solutions, or exploring ways to make technology more accessible and user-friendly. I believe in the power of collaboration, continuous learning, and designing with purpose.
Let’s connect and create something extraordinary together!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Experience Cards */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: isMobile ? 0.4 : 0.8,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="card text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1 + 0.3,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                viewport={{ once: true }}
              >
                <div className="text-blue-400 text-3xl mb-4 flex justify-center">
                  {exp.icon}
                </div>
                <h4 className="font-semibold text-slate-100 mb-2">{exp.title}</h4>
                <p className="text-slate-400 text-sm">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Professional Highlights Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h3 
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Professional Highlights
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {professionalHighlights.map((highlight, highlightIndex) => (
              <motion.div
                key={highlightIndex}
                className="card group"
                initial={{ 
                  opacity: 0, 
                  y: 30
                }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: highlightIndex * 0.2,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="text-center mb-6">
                  <div className={`text-3xl mb-3 bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent flex justify-center`}>
                    {highlight.icon}
                  </div>
                  <h4 className="font-bold text-slate-100 text-lg">{highlight.category}</h4>
                </div>
                
                <div className="space-y-4">
                  {highlight.achievements.map((achievement, achievementIndex) => (
                    <motion.div
                      key={achievementIndex}
                      className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/30 hover:bg-slate-700/30 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: highlightIndex * 0.2 + achievementIndex * 0.1 
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="mb-2">
                        <h5 className="font-semibold text-slate-100 text-sm">{achievement.title}</h5>
                        <span className="text-xs text-emerald-400 font-medium">{achievement.impact}</span>
                      </div>
                      <p className="text-slate-400 text-xs leading-relaxed">{achievement.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { number: "1", label: "Years Experience" },
            { number: "5+", label: "Projects Completed" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="card text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1 + 0.2,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-3xl font-bold gradient-text mb-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1 + 0.4,
                  ease: "backOut"
                }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
