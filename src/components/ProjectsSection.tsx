import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

interface ProjectsSectionProps {
  projects?: Project[];
}

const ProjectsSection = ({
  projects = defaultProjects,
}: ProjectsSectionProps) => {
  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-black py-20 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative endeavors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Gradient overlay effect */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-blue-900/20 opacity-50" />
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
    >
      <Card className="overflow-hidden h-full bg-gray-900/80 border-gray-800 hover:border-gray-700 transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
        </div>

        <CardHeader>
          <CardTitle className="text-xl text-white">{project.title}</CardTitle>
          <CardDescription className="text-gray-400">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-gray-800 text-gray-300 hover:bg-gray-700"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
            >
              View Project →
            </a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

// Default projects data
const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description:
      "A modern dark-themed portfolio with gradient effects and smooth animations.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#",
  },
  {
    id: "2",
    title: "E-commerce Platform",
    description:
      "A fully responsive e-commerce solution with dark mode and product filtering.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    tags: ["Next.js", "TypeScript", "Stripe"],
    link: "#",
  },
  {
    id: "3",
    title: "Music Streaming App",
    description:
      "A sleek music player with visualizations and playlist management.",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    tags: ["React", "Node.js", "Web Audio API"],
    link: "#",
  },
  {
    id: "4",
    title: "Task Management Tool",
    description:
      "A productivity app with drag-and-drop interface and team collaboration features.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
    link: "#",
  },
  {
    id: "5",
    title: "Weather Dashboard",
    description:
      "A beautiful weather app with animated forecasts and location tracking.",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    tags: ["React", "OpenWeather API", "Styled Components"],
    link: "#",
  },
  {
    id: "6",
    title: "Social Media Analytics",
    description:
      "A dashboard for tracking social media performance with interactive charts.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["React", "D3.js", "Express"],
    link: "#",
  },
];

export default ProjectsSection;
