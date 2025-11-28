import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pastel-blue/20 via-white to-pastel-lavender/30">
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pastel-yellow rounded-full opacity-60 animate-float"></div>
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-pastel-lavender rounded-full opacity-50 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-24 h-24 bg-pastel-pink rounded-full opacity-40 animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Kabir Almustapha{" "}
            <span className="text-gradient block">Fandirma</span>
          </motion.h1>

          <motion.div
            className="text-xl lg:text-2xl text-gray-600 mb-8 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="inline-block overflow-hidden border-r-4 border-primary-500 whitespace-nowrap animate-typewriter">
              Web Developer & Digital Creator
            </div>
          </motion.div>

          <motion.p
            className="text-lg text-gray-500 mb-12 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Crafting exceptional digital experiences with modern technologies,
            clean code, and user-centered design principles.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button className="bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold hover-lift shadow-lg hover:shadow-xl transition-all duration-300">
              Hire Me
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover-lift hover:border-primary-500 transition-all duration-300">
              View Portfolio
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-primary rounded-full flex items-center justify-center shadow-2xl p-2">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center p-2">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src="/profileimg.jpg"
                    alt="Kabir Almustapha Fandirma - Web Developer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  {/* Fallback if image doesn't load */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center text-gray-500 text-sm font-medium hidden">
                    Profile Image
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-pastel-yellow rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-pastel-green rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
