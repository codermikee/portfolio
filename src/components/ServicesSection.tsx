import React from "react";
import { motion } from "framer-motion";

interface ServiceItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceItem = ({ title, description, icon }: ServiceItemProps) => {
  return (
    <motion.div
      className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.1)",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-600/30 to-blue-600/30 text-purple-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-purple-200">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

interface ServicesSectionProps {
  services?: ServiceItemProps[];
}

const ServicesSection = ({
  services = [
    {
      title: "Web Development",
      description:
        "Creating responsive, modern websites using the latest technologies like React, TypeScript, and Tailwind CSS.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 16 4-4-4-4" />
          <path d="m6 8-4 4 4 4" />
          <path d="m14.5 4-5 16" />
        </svg>
      ),
    },
    {
      title: "UI/UX Design",
      description:
        "Designing beautiful, intuitive user interfaces and experiences that engage users and meet business goals.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" x2="9.01" y1="9" y2="9" />
          <line x1="15" x2="15.01" y1="9" y2="9" />
        </svg>
      ),
    },
    {
      title: "Mobile App Development",
      description:
        "Building cross-platform mobile applications that provide seamless experiences across iOS and Android devices.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      ),
    },
  ],
}: ServicesSectionProps) => {
  return (
    <div className="py-20 px-6 w-full max-w-6xl mx-auto">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          Services I Offer
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Specialized expertise to help bring your digital vision to life with
          modern technologies and creative solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
