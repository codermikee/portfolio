import React from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  name?: string;
  title?: string;
  introduction?: string;
}

const HeroSection = ({
  name = "John Doe",
  title = "Creative Developer",
  introduction = "I'm a passionate developer focused on creating immersive digital experiences that blend creativity with technical excellence. Specializing in modern web technologies and interactive design.",
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-[700px] w-full flex items-center justify-center bg-black overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 z-0"></div>

      {/* Ambient light effect */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>

      {/* Content container */}
      <motion.div
        className="relative z-10 max-w-4xl px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {name}
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {title}
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {introduction}
        </motion.p>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-purple-500/20 mr-4">
            View Projects
          </button>
          <button className="px-8 py-3 border border-purple-500/30 text-white rounded-full font-medium hover:bg-purple-500/10 transition-all duration-300">
            Contact Me
          </button>
        </motion.div>
      </motion.div>

      {/* Subtle animated particles */}
      <div className="absolute inset-0 z-0 opacity-30">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0.7, 0.1, 0.7],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
