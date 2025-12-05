import React from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiLayout,
  FiSmartphone,
  FiZap,
  FiPenTool,
  FiTrendingUp,
  FiShield,
  FiGlobe,
} from "react-icons/fi";

const Services = () => {
  const services = [
    {
      icon: <FiCode />,
      title: "Full Stack Development",
      description:
        "End-to-end web applications with modern frameworks like React, Next.js, and Node.js.",
      gradient: "from-blue-500/10 to-cyan-500/10",
      hoverGradient: "hover:from-blue-500/20 hover:to-cyan-500/20",
      features: ["React/Next.js", "Node.js", "REST APIs", "Databases"],
    },
    {
      icon: <FiLayout />,
      title: "UI/UX Design",
      description:
        "User-centered design solutions that combine aesthetics with functionality and usability.",
      gradient: "from-emerald-500/10 to-green-500/10",
      hoverGradient: "hover:from-emerald-500/20 hover:to-green-500/20",
      features: ["Figma", "Prototyping", "User Research", "Design Systems"],
    },
    {
      icon: <FiSmartphone />,
      title: "Responsive Web Design",
      description:
        "Beautiful, responsive designs that provide exceptional experiences across all devices.",
      gradient: "from-violet-500/10 to-purple-500/10",
      hoverGradient: "hover:from-violet-500/20 hover:to-purple-500/20",
      features: [
        "Mobile First",
        "Cross-browser",
        "Performance",
        "Accessibility",
      ],
    },
    {
      icon: <FiZap />,
      title: "Performance Optimization",
      description:
        "Optimized, scalable frontend architecture with performance and maintainability in mind.",
      gradient: "from-amber-500/10 to-orange-500/10",
      hoverGradient: "hover:from-amber-500/20 hover:to-orange-500/20",
      features: ["Lighthouse", "Web Vitals", "Code Splitting", "Caching"],
    },
    {
      icon: <FiPenTool />,
      title: "Custom Solutions",
      description:
        "Tailored digital solutions to meet your specific business needs and requirements.",
      gradient: "from-rose-500/10 to-pink-500/10",
      hoverGradient: "hover:from-rose-500/20 hover:to-pink-500/20",
      features: ["Consulting", "Custom APIs", "Integration", "Maintenance"],
    },
    {
      icon: <FiTrendingUp />,
      title: "SEO & Analytics",
      description:
        "Data-driven strategies to improve visibility, traffic, and conversion rates.",
      gradient: "from-indigo-500/10 to-blue-500/10",
      hoverGradient: "hover:from-indigo-500/20 hover:to-blue-500/20",
      features: ["SEO Audit", "Analytics", "Conversion", "Reports"],
    },
  ];

  const ServiceCard = ({ service, index }) => (
    <motion.div
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
    >
      {/* Card background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-100 group-hover:border-blue-200 transition-all duration-500"></div>

      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      ></div>

      {/* Content */}
      <div className="relative h-full p-6 md:p-8 flex flex-col">
        {/* Icon */}
        <div className="mb-6">
          <div
            className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} group-hover:scale-110 transition-transform duration-500`}
          >
            <div className="text-2xl text-gray-800 group-hover:text-gray-900">
              {service.icon}
            </div>
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-950 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
          {service.description}
        </p>

        {/* Features */}
        <div className="space-y-2">
          {service.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300"
            >
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
              {feature}
            </div>
          ))}
        </div>

        {/* Hover indicator */}
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
            <div className="text-white text-sm">→</div>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 blur-xl"></div>
    </motion.div>
  );

  return (
    <section
      id="services"
      className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent"></div>

      {/* Floating dots */}
      <motion.div
        className="absolute top-20 left-10 w-3 h-3 bg-blue-400/20 rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-4 h-4 bg-cyan-400/20 rounded-full"
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
            <FiGlobe className="text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            End-to-end services to transform your ideas into exceptional digital
            experiences
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative"
        >
          {/* Simplified pattern background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0"></div>
          </div>

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="lg:w-2/3">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Have a project in mind?
                </h3>
                <p className="text-blue-100 text-lg">
                  Let's discuss how we can bring your vision to life with
                  cutting-edge solutions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-lg"
                >
                  Start a Project
                  <FiZap className="text-lg" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border-2 border-white/30 text-white rounded-full font-semibold hover:border-white transition-all duration-300"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
