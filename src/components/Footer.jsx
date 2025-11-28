import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { name: "GitHub", icon: "🐱", url: "#" },
    { name: "LinkedIn", icon: "💼", url: "#" },
    { name: "X (Twitter)", icon: "🐦", url: "#" },
    { name: "Email", icon: "✉️", url: "mailto:kabir@example.com" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h3 className="text-3xl font-bold mb-4">
              Kabir Almustapha Fandirma
            </h3>
            <p className="text-gray-400 text-lg">
              Web Developer & Digital Creator
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-xl hover:bg-primary-500 hover-lift transition-all duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} Kabir Almustapha Fandirma. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
