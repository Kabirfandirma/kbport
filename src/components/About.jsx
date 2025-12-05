import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiLayers,
  FiTool,
  FiTarget,
  FiCoffee,
  FiBookOpen,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import { TbDeviceDesktopCode } from "react-icons/tb";

const About = () => {
  const [imageError, setImageError] = useState(false);

  const skillCategories = [
    {
      title: "Frontend",
      icon: <FiLayers />,
      color: "from-blue-500/10 to-cyan-500/10",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      title: "Backend",
      icon: <FiCode />,
      color: "from-emerald-500/10 to-green-500/10",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
    },
    {
      title: "Tools & Others",
      icon: <FiTool />,
      color: "from-violet-500/10 to-purple-500/10",
      skills: ["Git/GitHub", "Docker", "AWS", "Figma", "Agile/Scrum"],
    },
  ];

  const values = [
    {
      icon: <FiTarget />,
      title: "Quality Focus",
      description: "Delivering pixel-perfect, performant solutions",
    },
    {
      icon: <FiBookOpen />,
      title: "Continuous Learning",
      description: "Always exploring new technologies and best practices",
    },
    {
      icon: <FiUsers />,
      title: "Collaboration",
      description: "Working together to achieve exceptional results",
    },
    {
      icon: <FiTrendingUp />,
      title: "Growth Mindset",
      description: "Embracing challenges as opportunities to improve",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent"></div>

      {/* Animated dots */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
      <div
        className="absolute bottom-40 right-20 w-3 h-3 bg-cyan-400/30 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 mb-4">
            <TbDeviceDesktopCode className="text-blue-600" />
            <span className="text-sm font-medium text-gray-700">About Me</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Crafting Digital{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Passionate developer with a focus on creating impactful digital
            experiences
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-2/5 relative"
          >
            <div className="relative max-w-sm mx-auto">
              {/* Outer glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse"></div>

              {/* Main image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 md:border-8 border-white shadow-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
                {!imageError ? (
                  <img
                    src="/profileimg.jpg"
                    alt="Kabir Almustapha Fandirma"
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 p-8">
                    <TbDeviceDesktopCode className="text-6xl mb-4 text-gray-300" />
                    <div className="text-xl font-semibold text-gray-600">
                      Kabir Fandirma
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      Full Stack Developer
                    </div>
                  </div>
                )}
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <FiCode className="text-blue-600 text-xl" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-14 h-14 bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <FiLayers className="text-cyan-600 text-2xl" />
              </motion.div>
            </div>

            {/* Experience stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-sm mx-auto">
              <div className="text-center bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="text-2xl font-bold text-gray-900">3+</div>
                <div className="text-sm text-gray-600">Years Exp</div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-3/5"
          >
            {/* Introduction */}
            <div className="space-y-4 mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Hi, I'm <span className="text-blue-600">Kabir</span> 👋
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A passionate Full Stack Developer specializing in modern web
                technologies. I create digital experiences that combine
                aesthetic appeal with exceptional performance and usability.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With expertise spanning across the entire development stack, I
                bring ideas to life through clean code, thoughtful design, and
                cutting-edge technologies. My approach balances technical
                precision with creative problem-solving.
              </p>
            </div>

            {/* Values */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                My Values
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg">
                        <div className="text-blue-600">{value.icon}</div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900">
                          {value.title}
                        </h5>
                        <p className="text-sm text-gray-600 mt-1">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills Categories */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Skills & Expertise
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/80 backdrop-blur-sm p-5 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}
                      >
                        <div className="text-gray-800">{category.icon}</div>
                      </div>
                      <h5 className="font-semibold text-gray-900">
                        {category.title}
                      </h5>
                    </div>
                    <div className="space-y-2">
                      {category.skills.map((skill) => (
                        <div
                          key={skill}
                          className="px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-700 text-sm transition-colors duration-300"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Let's build something amazing together
                  </h4>
                  <p className="text-gray-600">
                    Have a project in mind? I'd love to hear about it.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Get in Touch
                  <FiCoffee className="text-lg" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
