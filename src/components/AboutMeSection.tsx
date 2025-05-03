import React from "react";
import { motion } from "framer-motion";

interface AboutMeSectionProps {
  aboutMe?: string;
  workExperience?: Array<{
    title: string;
    company: string;
    period: string;
    description: string;
  }>;
}

const AboutMeSection = ({
  aboutMe = "I am a passionate web developer with a strong focus on creating beautiful, responsive, and user-friendly websites. I love working with modern technologies and frameworks to build exceptional digital experiences.",
  workExperience = [
    {
      title: "Junior Web Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Developing responsive web applications using React, TypeScript, and Tailwind CSS. Collaborating with design and backend teams to implement new features and improve user experience.",
    },
    {
      title: "Web Development Intern",
      company: "Digital Creatives",
      period: "2021 - 2022",
      description:
        "Assisted in the development of client websites, learned modern web development practices, and contributed to internal tools development.",
    },
  ],
}: AboutMeSectionProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto px-6">
      {/* About Me Section */}
      <motion.div
        className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-purple-300">About Me</h2>
        <p className="text-gray-300 leading-relaxed">{aboutMe}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "Framer Motion",
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-purple-900/40 text-purple-200 text-sm rounded-full border border-purple-500/30"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Work Experience Section */}
      <motion.div
        className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-300">
          Work Experience
        </h2>

        <div className="space-y-6">
          {workExperience.map((job, index) => (
            <motion.div
              key={index}
              className="border-l-2 border-blue-500/30 pl-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-blue-200">
                {job.title}
              </h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-blue-300">{job.company}</span>
                <span className="text-sm text-blue-400/70">{job.period}</span>
              </div>
              <p className="text-gray-300 text-sm">{job.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMeSection;
