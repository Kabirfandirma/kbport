import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiStar,
  FiChevronLeft,
  FiChevronRight,
  FiCheckCircle,
  FiMessageSquare,
} from "react-icons/fi";
import { testimonialsData } from "../data/testimonialsData";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const TestimonialCard = ({ testimonial, index, isActive = false }) => (
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
      className={`group relative h-full ${isActive ? "scale-105" : ""}`}
    >
      {/* Card background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-100 group-hover:border-blue-200 transition-all duration-500"></div>

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Quote icon */}
      <div className="absolute top-6 right-6 text-blue-100 text-4xl">"</div>

      {/* Content */}
      <div className="relative p-6 md:p-8">
        {/* Star rating */}
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <FiStar
              key={i}
              className={`text-lg ${
                i < testimonial.rating
                  ? "text-amber-500 fill-amber-500"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-sm text-gray-500 ml-2">
            {testimonial.rating}.0
          </span>
        </div>

        {/* Testimonial text */}
        <p className="text-gray-600 leading-relaxed mb-6 italic relative z-10">
          "{testimonial.text}"
        </p>

        {/* Client info */}
        <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
          <div className="relative">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-lg">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <FiCheckCircle className="text-white text-xs" />
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
            <p className="text-gray-600 text-sm">{testimonial.position}</p>
            <p className="text-gray-500 text-xs mt-1">{testimonial.company}</p>
          </div>
        </div>

        {/* Project tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {testimonial.tags?.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 blur-xl"></div>
      </div>
    </motion.div>
  );

  return (
    <section
      id="testimonials"
      className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/30 via-transparent to-transparent"></div>

      {/* Floating quotes */}
      <motion.div
        className="absolute top-20 left-10 text-6xl text-blue-100"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        "
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-6xl text-cyan-100"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      >
        "
      </motion.div>

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
            <FiStar className="text-amber-500" />
            <span className="text-sm font-medium text-gray-700">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Client{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Real feedback from clients I've had the pleasure of working with
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {testimonialsData.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              isActive={index === 1} // Center card is active
            />
          ))}
        </div>

        {/* Additional Testimonials (Desktop slider) - Optional */}
        {testimonialsData.length > 3 && (
          <div className="hidden lg:block">
            <div className="relative max-w-6xl mx-auto">
              {/* Navigation buttons */}
              <motion.button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 p-3 bg-white rounded-full border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 z-20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiChevronLeft className="text-gray-600" />
              </motion.button>

              <motion.button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 p-3 bg-white rounded-full border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 z-20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiChevronRight className="text-gray-600" />
              </motion.button>

              {/* Slider container */}
              <div className="overflow-hidden">
                <motion.div
                  animate={{ x: -activeIndex * 416 }} // Adjust based on card width + gap
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="flex gap-8"
                >
                  {testimonialsData.slice(3).map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className="w-[400px] flex-shrink-0"
                    >
                      <TestimonialCard
                        testimonial={testimonial}
                        index={index}
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonialsData.slice(3).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-gradient-to-r from-blue-500 to-cyan-500"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0"></div>
            </div>

            <div className="relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {testimonialsData.length}+
                  </div>
                  <div className="text-blue-100">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">4.9</div>
                  <div className="text-blue-100">Avg. Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    100%
                  </div>
                  <div className="text-blue-100">Repeat Business</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    24/7
                  </div>
                  <div className="text-blue-100">Support</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">
            Ready to become another success story?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            Start Your Project
            <FiMessageSquare className="text-lg" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
