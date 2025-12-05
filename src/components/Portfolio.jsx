import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiEye,
  FiCode,
  FiLayers,
  FiSmartphone,
  FiGlobe,
} from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = [
    { name: "All", icon: <FiGlobe />, count: portfolioData.length },
    {
      name: "Web Development",
      icon: <FiCode />,
      count: portfolioData.filter((p) => p.category === "Web Development")
        .length,
    },
    {
      name: "UI/UX Design",
      icon: <FiLayers />,
      count: portfolioData.filter((p) => p.category === "UI/UX Design").length,
    },
    {
      name: "Frontend",
      icon: <FiSmartphone />,
      count: portfolioData.filter((p) => p.category === "Frontend Engineering")
        .length,
    },
    {
      name: "Full Stack",
      icon: <FiGlobe />,
      count: portfolioData.filter((p) => p.category === "Full Stack").length,
    },
  ];

  const filteredProjects =
    filter === "All"
      ? portfolioData
      : portfolioData.filter(
          (project) =>
            project.category.toLowerCase().includes(filter.toLowerCase()) ||
            (filter === "Frontend" &&
              project.category === "Frontend Engineering") ||
            (filter === "Full Stack" && project.category === "Full Stack")
        );

  const ProjectCard = ({ project, index }) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative h-full"
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      {/* Card background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-100 group-hover:border-blue-200 transition-all duration-500"></div>

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Image container */}
      <div className="relative overflow-hidden rounded-t-3xl">
        <div className="relative h-56 md:h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Category badge */}
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800">
            {project.category}
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
            <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <motion.a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white text-gray-900 rounded-full hover:bg-blue-50 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiExternalLink className="text-lg" />
              </motion.a>
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub className="text-lg" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-950 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full border border-blue-100 hover:border-blue-200 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Project stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <FiEye className="text-gray-400" />
            <span>{project.views || "1.2k"} views</span>
          </div>
          <div className="flex items-center gap-2">
            <FiGithub className="text-gray-400" />
            <span>{project.stars || "45"} stars</span>
          </div>
        </div>

        {/* Progress indicator */}
        {hoveredProject === project.id && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-b-3xl"></div>
        )}
      </div>
    </motion.div>
  );

  return (
    <section
      id="portfolio"
      className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-50/30 via-transparent to-transparent"></div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-32 left-10 w-4 h-4 bg-blue-400/20 rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 right-10 w-3 h-3 bg-cyan-400/20 rounded-full"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 mb-4">
            <FiCode className="text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            A curated selection of my work, showcasing modern web development
            and design solutions
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              onClick={() => setFilter(category.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.name
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  filter === category.name ? "bg-white/20" : "bg-gray-100"
                }`}
              >
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 text-6xl mb-4">📁</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500">
              Try selecting a different category or check back soon for new
              projects!
            </p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 text-center"
        >
          <p className="text-gray-600 mb-6">
            Interested in seeing more? Check out my GitHub for additional
            projects and code samples.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300"
          >
            <FiGithub className="text-xl" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
