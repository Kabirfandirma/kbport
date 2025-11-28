import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { number: 50, label: "Projects Completed", suffix: "+" },
  { number: 3, label: "Years Experience", suffix: "+" },
  { number: 15, label: "Tools Mastered", suffix: "+" },
  { number: 25, label: "Satisfied Clients", suffix: "+" },
];

const StatCard = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="text-center"
  >
    <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="text-4xl lg:text-5xl font-bold text-gradient mb-4"
      >
        <CountUp end={stat.number} duration={2.5} suffix={stat.suffix} />
      </motion.div>
      <p className="text-lg text-gray-600 font-medium">{stat.label}</p>
    </div>
  </motion.div>
);

const Stats = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            By The Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quantifying my journey and impact through meaningful metrics
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
