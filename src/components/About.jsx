import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "React & Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "UI/UX Design",
    "Responsive Design",
    "Performance Optimization",
    "Git & GitHub",
    "REST APIs",
    "Testing & Debugging",
  ];

  const [imageError, setImageError] = React.useState(false);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center shadow-2xl p-2">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center p-2">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                    {!imageError ? (
                      <img
                        src="/profileimg.jpg" // You can use the same image or a different one
                        alt="Kabir Almustapha Fandirma - About Me"
                        className="w-full h-full object-cover"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex flex-col items-center justify-center text-gray-600">
                        <div className="text-4xl mb-2">💼</div>
                        <div className="text-sm font-semibold">
                          Kabir Fandirma
                        </div>
                        <div className="text-xs opacity-75 mt-1">
                          Web Developer
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-pastel-yellow rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-pastel-green rounded-full"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              About Me
            </h2>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Hello! I'm Kabir Almustapha Fandirma, a passionate web developer
                and digital creator with a love for crafting exceptional digital
                experiences. With years of experience in the industry, I
                specialize in turning complex problems into simple, beautiful,
                and intuitive designs.
              </p>

              <p>
                My approach combines technical expertise with creative thinking
                to deliver solutions that not only look great but also perform
                exceptionally well. I believe in the power of clean code,
                user-centered design, and continuous learning.
              </p>

              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through technical writing and mentorship.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-pastel-blue/50 rounded-lg px-4 py-3 text-center text-gray-700 font-medium hover-lift hover:bg-pastel-blue/70 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Additional info section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 p-6 bg-pastel-lavender/30 rounded-2xl border border-pastel-lavender"
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                What drives me
              </h4>
              <p className="text-gray-600">
                I'm passionate about creating digital solutions that make a real
                impact. Whether it's building a responsive web application,
                optimizing performance, or designing intuitive user interfaces,
                I thrive on challenges that push me to grow and innovate.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
