import React from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiArrowUp,
  FiCoffee,
} from "react-icons/fi";
import { TbDeviceDesktopCode } from "react-icons/tb";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FiGithub />,
      url: "#",
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      url: "#",
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: <FiTwitter />,
      url: "#",
      color: "hover:text-sky-400",
    },
    {
      name: "Email",
      icon: <FiMail />,
      url: "mailto:kabir@example.com",
      color: "hover:text-red-400",
    },
  ];

  const quickLinks = [
    { name: "Home", url: "#" },
    { name: "Projects", url: "#" },
    { name: "About", url: "#" },
    { name: "Contact", url: "#" },
  ];

  const techStack = [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-16 pb-8">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900/20 via-transparent to-transparent opacity-50"></div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* Floating shapes */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 bg-cyan-500/10 rounded-full blur-xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg">
                <TbDeviceDesktopCode className="text-xl" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Kabir Fandirma
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer crafting exceptional digital experiences with
              modern technologies and user-centered design principles.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <FiCoffee className="text-amber-500" />
              <span>Fueled by coffee & passion for clean code</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <h4 className="text-sm font-medium text-gray-400 mb-2">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-800/50 backdrop-blur-sm rounded-full text-xs border border-gray-700 hover:border-cyan-500/30 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Let's Connect
              </h4>
              <p className="text-gray-400 mb-4">
                Have a project in mind? Let's create something amazing together.
              </p>
              <a
                href="mailto:kabir@example.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <FiMail />
                Get in Touch
              </a>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-400 mb-3">
                Follow Me
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="group relative p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <span
                      className={`text-xl transition-colors duration-300 ${social.color}`}
                    >
                      {social.icon}
                    </span>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {social.name}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8 lg:my-12"
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Kabir Almustapha Fandirma. All rights
              reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with React, Next.js & Tailwind CSS
            </p>
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="group relative p-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-cyan-500 transition-all duration-300"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <FiArrowUp className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Back to top
            </div>
          </motion.button>
        </div>

        {/* Copyright Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-6 pt-4 border-t border-gray-800/50 text-center"
        >
          <p className="text-gray-500 text-xs">
            Designed with ❤️ • Deployed with Vercel • Open to opportunities
            worldwide
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
