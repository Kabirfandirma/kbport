import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiCode,
  FiLayers,
} from "react-icons/fi";
import { TbDeviceDesktopCode } from "react-icons/tb";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 150]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  const floatingCards = [
    {
      icon: <TbDeviceDesktopCode />,
      label: "Full Stack",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: <FiCode />,
      label: "Clean Code",
      color: "from-emerald-500/20 to-green-500/20",
    },
    {
      icon: <FiLayers />,
      label: "UI/UX Design",
      color: "from-violet-500/20 to-purple-500/20",
    },
  ];

  const socialLinks = [
    { icon: <FiGithub />, href: "#", label: "GitHub" },
    { icon: <FiLinkedin />, href: "#", label: "LinkedIn" },
    { icon: <FiMail />, href: "#", label: "Email" },
  ];

  return (
    <section className="min-h-screen relative overflow-x-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100/50">
      {/* Dynamic gradient background - only on desktop */}
      {!isMobile && (
        <div
          className="absolute inset-0 opacity-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 119, 198, 0.15), transparent 80%)`,
          }}
        />
      )}

      {/* Responsive grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      {/* Floating shapes - simplified on mobile */}
      <motion.div
        className="absolute top-20 left-4 md:top-1/4 md:left-1/4 w-40 h-40 md:w-64 md:h-64 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-xl md:blur-3xl"
        animate={
          isMobile
            ? {}
            : {
                x: [0, 30, 0],
                y: [0, -30, 0],
              }
        }
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 right-4 md:bottom-1/4 md:right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-xl md:blur-3xl"
        animate={
          isMobile
            ? {}
            : {
                x: [0, -40, 0],
                y: [0, 40, 0],
              }
        }
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating skill cards - hidden on mobile, show on desktop */}
      {!isMobile &&
        floatingCards.map((card, index) => (
          <motion.div
            key={index}
            className="absolute bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-white/20 shadow-lg hidden md:block"
            style={{
              left: `${20 + index * 20}%`,
              top: `${30 + index * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              delay: index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              className={`p-3 rounded-xl bg-gradient-to-br ${card.color} inline-block mb-2`}
            >
              <span className="text-xl text-gray-800">{card.icon}</span>
            </div>
            <p className="text-sm font-medium text-gray-700">{card.label}</p>
          </motion.div>
        ))}

      {/* Mobile skill chips - show only on mobile */}
      {isMobile && (
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-2 w-full px-4 z-20">
          {floatingCards.map((card, index) => (
            <div
              key={index}
              className={`px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-white/20 shadow-sm flex items-center gap-2`}
            >
              <span className="text-gray-800">{card.icon}</span>
              <span className="text-sm font-medium text-gray-700">
                {card.label}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20 flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-screen relative z-10">
        {/* Left content */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Social links - centered on mobile, left on desktop */}
          <motion.div
            className="flex gap-3 md:gap-4 mb-6 md:mb-8 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="p-3 md:p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md"
                whileHover={{ scale: isMobile ? 1 : 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <span className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-base md:text-lg">
                  {link.icon}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Availability badge */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 mb-4 md:mb-6">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></span>
              <span className="text-xs md:text-sm font-medium text-gray-700">
                Available for work
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="block">Kabir</span>
            <span className="block">
              <motion.span
                className="inline-block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent"
                animate={isMobile ? {} : { backgroundPosition: ["0%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200%" }}
              >
                Fandirma
              </motion.span>
            </span>
          </motion.h1>

          {/* Title */}
          <motion.div
            className="mb-6 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-lg sm:text-xl md:text-2xl font-light text-gray-600 mb-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start gap-1 sm:gap-2">
                <motion.span
                  className="font-medium bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
                  animate={
                    isMobile ? {} : { color: ["#3b82f6", "#06b6d4", "#3b82f6"] }
                  }
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  Full Stack Developer
                </motion.span>
                <span className="hidden sm:inline">|</span>
                <span>Digital Creator</span>
              </div>
            </div>
            <div className="h-1 w-20 md:w-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto lg:mx-0"></div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-base md:text-lg text-gray-500 mb-8 md:mb-12 max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Building the future of web experiences with{" "}
            <span className="font-semibold text-gray-700">React</span>,{" "}
            <span className="font-semibold text-gray-700">Next.js</span>, and{" "}
            <span className="font-semibold text-gray-700">
              modern design systems
            </span>
            . Passionate about creating intuitive interfaces and scalable
            solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.button
              className="group relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
              whileHover={isMobile ? {} : { scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Hire Me</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>

            <motion.button
              className="group px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
              whileHover={isMobile ? {} : { scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </motion.button>
          </motion.div>

          {/* Stats - always centered and below buttons on mobile */}
          <motion.div
            className="flex gap-4 md:gap-6 mt-6 md:mt-8 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-gray-900">
                50+
              </div>
              <div className="text-xs md:text-sm text-gray-500">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-gray-900">
                3+
              </div>
              <div className="text-xs md:text-sm text-gray-500">Years Exp</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-gray-900">
                100%
              </div>
              <div className="text-xs md:text-sm text-gray-500">
                Satisfaction
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side - Profile image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 relative"
          style={isMobile ? {} : { y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="relative">
            {/* Outer glow - smaller on mobile */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl md:blur-2xl animate-pulse"></div>

            {/* Main profile container */}
            <motion.div
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 md:border-8 border-white shadow-xl md:shadow-2xl overflow-hidden mx-auto"
              initial={
                isMobile
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.8, rotate: -5 }
              }
              animate={
                isMobile ? { opacity: 1 } : { opacity: 1, scale: 1, rotate: 0 }
              }
              transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
              whileHover={isMobile ? {} : { scale: 1.02 }}
            >
              {/* Gradient border animation - only on desktop */}
              {!isMobile && (
                <div
                  className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-full opacity-75"
                  style={{
                    animation: "spin 8s linear infinite",
                  }}
                />
              )}

              {/* Image container */}
              <div className="absolute inset-1 md:inset-2 bg-white rounded-full overflow-hidden z-10">
                <img
                  src="/profileimg.jpg"
                  alt="Kabir Almustapha Fandirma"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex flex-col items-center justify-center text-gray-400 font-medium hidden">
                  <TbDeviceDesktopCode className="text-4xl md:text-6xl mb-2 md:mb-4" />
                  <span className="text-sm md:text-base">Kabir Fandirma</span>
                  <span className="text-xs md:text-sm mt-1 md:mt-2">
                    Full Stack Developer
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating badge - repositioned on mobile */}
            <motion.div
              className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-white/70 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg border border-white/20"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs md:text-sm font-semibold text-gray-700">
                  Open to work
                </span>
              </div>
            </motion.div>

            {/* Tech stack indicators - hidden on mobile, show on tablet+ */}
            <motion.div
              className="absolute -left-2 md:-left-4 top-1/3 bg-white/70 backdrop-blur-sm p-2 md:p-3 rounded-xl border border-white/20 hidden sm:block"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="flex flex-col gap-1 md:gap-2">
                {["React", "Next.js", "Node.js"].map((tech, i) => (
                  <div
                    key={i}
                    className="text-xs font-medium text-gray-700 px-1.5 md:px-2 py-0.5 md:py-1 bg-white/50 rounded whitespace-nowrap"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      {!isMobile && (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-400">Scroll down</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
