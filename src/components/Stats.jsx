import React from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiClock,
  FiTool,
  FiUsers,
  FiTrendingUp,
  FiAward,
  FiStar,
  FiTarget,
} from "react-icons/fi";

const Stats = () => {
  const stats = [
    {
      number: 50,
      label: "Projects Completed",
      suffix: "+",
      icon: <FiCode />,
      gradient: "from-blue-500/10 to-cyan-500/10",
      color: "text-blue-600",
    },
    {
      number: 3,
      label: "Years Experience",
      suffix: "+",
      icon: <FiClock />,
      gradient: "from-emerald-500/10 to-green-500/10",
      color: "text-emerald-600",
    },
    {
      number: 25,
      label: "Satisfied Clients",
      suffix: "+",
      icon: <FiUsers />,
      gradient: "from-violet-500/10 to-purple-500/10",
      color: "text-violet-600",
    },
    {
      number: 15,
      label: "Tools Mastered",
      suffix: "+",
      icon: <FiTool />,
      gradient: "from-amber-500/10 to-orange-500/10",
      color: "text-amber-600",
    },
    {
      number: 100,
      label: "Code Commits",
      suffix: "+",
      icon: <FiTrendingUp />,
      gradient: "from-rose-500/10 to-pink-500/10",
      color: "text-rose-600",
    },
    {
      number: 98,
      label: "Client Satisfaction",
      suffix: "%",
      icon: <FiStar />,
      gradient: "from-indigo-500/10 to-blue-500/10",
      color: "text-indigo-600",
    },
  ];

  const StatCard = ({ stat, index }) => (
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
      className="group relative"
    >
      {/* Card background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-100 group-hover:border-blue-200 transition-all duration-500"></div>

      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      ></div>

      {/* Content */}
      <div className="relative p-6 md:p-8 text-center">
        {/* Icon */}
        <div className="mb-4">
          <div
            className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.gradient} group-hover:scale-110 transition-transform duration-500`}
          >
            <div
              className={`text-2xl ${stat.color} group-hover:scale-110 transition-transform duration-300`}
            >
              {stat.icon}
            </div>
          </div>
        </div>

        {/* Animated number */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            delay: index * 0.2,
            type: "spring",
            stiffness: 100,
          }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2"
        >
          {stat.number}
          <span className="text-2xl md:text-3xl lg:text-4xl">
            {stat.suffix}
          </span>
        </motion.div>

        {/* Label */}
        <p className="text-base md:text-lg text-gray-600 font-medium">
          {stat.label}
        </p>

        {/* Progress bar for percentage */}
        {stat.suffix === "%" && (
          <div className="mt-4 relative">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${stat.number}%` }}
                transition={{ duration: 2, delay: 0.5 }}
                viewport={{ once: true }}
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
              />
            </div>
          </div>
        )}

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 blur-xl"></div>
      </div>
    </motion.div>
  );

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent"></div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-1/4 w-4 h-4 bg-blue-400/20 rounded-full"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 right-1/4 w-3 h-3 bg-cyan-400/20 rounded-full"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
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
            <FiTarget className="text-blue-600" />
            <span className="text-sm font-medium text-gray-700">
              Impact Metrics
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Results{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              That Matter
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Quantifying excellence through meaningful metrics and tangible
            outcomes
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Decorative quotes */}
            <div className="absolute -top-4 -left-4 text-6xl text-blue-200">
              "
            </div>
            <div className="absolute -bottom-8 -right-4 text-6xl text-cyan-200">
              "
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-blue-100">
              <div className="text-center">
                <FiAward className="text-4xl text-blue-600 mx-auto mb-4" />
                <p className="text-xl md:text-2xl font-light text-gray-700 italic mb-6 leading-relaxed">
                  "Quality is not an act, it is a habit. These numbers represent
                  the consistent dedication to excellence in every project."
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                    K
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Kabir Fandirma
                    </p>
                    <p className="text-sm text-gray-600">
                      Full Stack Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            * Metrics updated monthly • Based on actual project data and client
            feedback
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
