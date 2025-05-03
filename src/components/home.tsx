import React, { useState, useEffect } from "react";
import ProjectsSection from "./ProjectsSection";
import GallerySection from "./GallerySection";
import BottomNavbar from "./BottomNavbar";
import HeaderBar from "./HeaderBar";
import AboutMeSection from "./AboutMeSection";
import ServicesSection from "./ServicesSection";

type Section = "home" | "about" | "services" | "projects" | "gallery";

const Home = () => {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [scrolling, setScrolling] = useState(false);

  // Handle scroll events to update active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(true);

      const homeSection = document.getElementById("home");
      const aboutSection = document.getElementById("about");
      const servicesSection = document.getElementById("services");
      const projectsSection = document.getElementById("projects");
      const gallerySection = document.getElementById("gallery");

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (
        homeSection &&
        scrollPosition < homeSection.offsetTop + homeSection.offsetHeight
      ) {
        setActiveSection("home");
      } else if (
        aboutSection &&
        scrollPosition >= aboutSection.offsetTop &&
        scrollPosition < aboutSection.offsetTop + aboutSection.offsetHeight
      ) {
        setActiveSection("about");
      } else if (
        servicesSection &&
        scrollPosition >= servicesSection.offsetTop &&
        scrollPosition <
          servicesSection.offsetTop + servicesSection.offsetHeight
      ) {
        setActiveSection("services");
      } else if (
        projectsSection &&
        scrollPosition >= projectsSection.offsetTop &&
        scrollPosition <
          projectsSection.offsetTop + projectsSection.offsetHeight
      ) {
        setActiveSection("projects");
      } else if (gallerySection && scrollPosition >= gallerySection.offsetTop) {
        setActiveSection("gallery");
      }

      // Reset scrolling state after a short delay
      setTimeout(() => setScrolling(false), 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation from bottom navbar
  const handleNavigation = (section: Section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Ambient gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 pointer-events-none z-0"></div>

      {/* Content container */}
      <div className="relative z-10">
        <section id="home">
          <HeaderBar
            name="Mike Jomari Rivera"
            title="Jr. Web Developer"
            profileImage="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&q=80"
          />
        </section>

        <section id="about" className="py-20">
          <AboutMeSection />
        </section>

        <section id="services" className="py-10">
          <ServicesSection />
        </section>

        <section id="projects" className="min-h-screen">
          <ProjectsSection />
        </section>

        <section id="gallery" className="min-h-screen">
          <GallerySection />
        </section>
      </div>

      {/* Bottom navigation */}
      <BottomNavbar
        activeSection={activeSection}
        onSectionChange={handleNavigation}
      />
    </div>
  );
};

export default Home;
