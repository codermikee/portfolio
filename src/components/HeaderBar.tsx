import React, { useMemo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileText, Linkedin, Facebook, Instagram, Github } from "lucide-react";

interface HeaderBarProps {
  name?: string;
  title?: string;
  profileImage?: string;
  bokehCount?: number;
}

interface Bokeh {
  id: number;
  left: string;
  top: string;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  hue: number;
}

const HeaderBar = ({
  name = "Mike Jomari Rivera",
  title = "Jr. Web Developer",
  profileImage = "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
  bokehCount = 15,
}: HeaderBarProps) => {
  const [bokehs, setBokehs] = useState<Bokeh[]>([]);

  // Generate initial bokeh elements
  useEffect(() => {
    const generateBokehs = () => {
      return Array.from({ length: bokehCount }).map((_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 4 + 1, // Size between 1-5rem
        opacity: Math.random() * 0.4 + 0.1, // Opacity between 0.1-0.5
        duration: Math.random() * 8 + 4, // Duration between 4-12s
        delay: Math.random() * 2, // Delay between 0-2s
        hue: Math.floor(Math.random() * 360), // Random hue for color variety
      }));
    };

    setBokehs(generateBokehs());

    // Periodically regenerate some bokeh elements
    const interval = setInterval(() => {
      setBokehs((prev) => {
        const newBokehs = [...prev];
        // Replace a few random bokeh elements
        for (let i = 0; i < 3; i++) {
          const randomIndex = Math.floor(Math.random() * bokehCount);
          newBokehs[randomIndex] = {
            ...newBokehs[randomIndex],
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.4 + 0.1,
            hue: Math.floor(Math.random() * 360),
          };
        }
        return newBokehs;
      });
    }, 3000); // Every 3 seconds

    return () => clearInterval(interval);
  }, [bokehCount]);

  return (
    <div className="relative w-full bg-[#0a0a23] py-8 px-4 md:px-8 overflow-hidden">
      {/* Bokeh gradient effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {bokehs.map((bokeh) => (
          <motion.div
            key={bokeh.id}
            className="absolute rounded-full blur-xl"
            style={{
              left: bokeh.left,
              top: bokeh.top,
              width: `${bokeh.size}rem`,
              height: `${bokeh.size}rem`,
              opacity: bokeh.opacity,
              background: `radial-gradient(circle, hsla(${bokeh.hue}, 100%, 70%, 0.8), hsla(${bokeh.hue + 30}, 100%, 50%, 0.1))`,
              transition: `all ${bokeh.duration}s ease-in-out ${bokeh.delay}s`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [bokeh.opacity, bokeh.opacity * 1.5, bokeh.opacity],
            }}
            transition={{
              duration: bokeh.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: bokeh.delay,
            }}
          />
        ))}
      </div>

      {/* Content container */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 z-10 relative">
        {/* Profile image */}
        <motion.div
          className="w-24 h-24 rounded-full overflow-hidden border-2 border-indigo-400/30"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={profileImage}
            alt={name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Name and title */}
        <div className="text-center md:text-left">
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-indigo-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {name}
          </motion.h1>

          <motion.div
            className="mt-2 inline-block px-4 py-1 rounded-full bg-indigo-900/50 border border-indigo-700/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="text-indigo-200 text-sm">{title}</span>
          </motion.div>
        </div>

        {/* Social links */}
        <motion.div
          className="flex flex-wrap gap-2 mt-4 md:mt-0 md:ml-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SocialButton icon={<FileText size={18} />} label="Resume" />
          <SocialButton icon={<Linkedin size={18} />} label="LinkedIn" />
          <SocialButton icon={<Facebook size={18} />} label="Facebook" />
          <SocialButton icon={<Instagram size={18} />} label="Instagram" />
          <SocialButton icon={<Github size={18} />} label="GitHub" />
        </motion.div>
      </div>
    </div>
  );
};

interface SocialButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const SocialButton = ({ icon, label, onClick }: SocialButtonProps) => {
  return (
    <motion.button
      className="flex items-center gap-2 px-4 py-2 bg-indigo-900/50 border border-indigo-700/50 rounded-md text-indigo-200 hover:bg-indigo-800/50 transition-colors"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </motion.button>
  );
};

export default HeaderBar;
