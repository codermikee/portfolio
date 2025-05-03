import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, Image } from "lucide-react";

interface BottomNavbarProps {
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

const BottomNavbar = ({
  activeSection = "home",
  onSectionChange = () => {},
}: BottomNavbarProps) => {
  const [active, setActive] = useState(activeSection);

  useEffect(() => {
    setActive(activeSection);
  }, [activeSection]);

  const handleNavClick = (section: string) => {
    setActive(section);
    onSectionChange(section);

    // Scroll to the section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-6 pointer-events-none">
      <motion.div
        className="flex items-center justify-between px-6 py-4 rounded-full bg-black/80 backdrop-blur-md border border-white/10 shadow-lg pointer-events-auto"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <NavItem
          icon={<Home size={20} />}
          label="HOME"
          isActive={active === "home"}
          onClick={() => handleNavClick("home")}
        />
        <NavItem
          icon={<Briefcase size={20} />}
          label="PROJECTS"
          isActive={active === "projects"}
          onClick={() => handleNavClick("projects")}
        />
        <NavItem
          icon={<Image size={20} />}
          label="GALLERY"
          isActive={active === "gallery"}
          onClick={() => handleNavClick("gallery")}
        />
      </motion.div>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem = ({ icon, label, isActive, onClick }: NavItemProps) => {
  return (
    <motion.button
      className={`flex flex-col items-center justify-center px-6 py-2 mx-2 rounded-full transition-colors ${isActive ? "text-white" : "text-gray-400"}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        {icon}
        {isActive && (
          <motion.div
            className="absolute -bottom-1 left-1/2 w-5 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
            layoutId="activeIndicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ x: "-50%" }}
          />
        )}
      </div>
      <span className="mt-1 text-xs font-medium">{label}</span>
    </motion.button>
  );
};

export default BottomNavbar;
