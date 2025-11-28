import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    icon: "💻",
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks like React, Next.js, and Vue.js.",
  },
  {
    icon: "🎨",
    title: "Web Design",
    description:
      "Beautiful, responsive designs that provide exceptional user experiences across all devices.",
  },
  {
    icon: "✨",
    title: "UI/UX Design",
    description:
      "User-centered design solutions that combine aesthetics with functionality and usability.",
  },
  {
    icon: "⚡",
    title: "Frontend Engineering",
    description:
      "Optimized, scalable frontend architecture with performance and maintainability in mind.",
  },
];

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl p-8 shadow-lg hover-lift border border-gray-100"
  >
    <div className="text-4xl mb-6">{service.icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-4">
      {service.title}
    </h3>
    <p className="text-gray-600 leading-relaxed">{service.description}</p>
  </motion.div>
);

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Services I Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive web development and design services to bring your
            digital vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
