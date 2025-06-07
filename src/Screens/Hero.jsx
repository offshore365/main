"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useInView,
  useAnimation,
} from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation

import card1 from "../assets/ar.png";
import card2 from "../assets/interior.jpg";
import card3 from "../assets/BIM.jpg";
import card4 from "../assets/3DVisualization.jpg";
import card5 from "../assets/a.png";
import card6 from "../assets/it.jpg";
import card7 from "../assets/mr.png";

// ✅ Add route links
const cards = [
  { id: 1, title: "Reduce no-shows", image: card1, overlayText: "Architecture", link: "/architecture" },
  { id: 2, title: "Share your booking page", image: card2, overlayText: "Interior", link: "/interior" },
  { id: 3, title: "Manage your schedule", image: card3, overlayText: "BIM", link: "/bim" },
  { id: 4, title: "Connect your calendar", image: card4, overlayText: "3D Visualisation", link: "/3dvisualization" },
  { id: 5, title: "Customize your experience", image: card6, overlayText: "IT", link: "/it" },
  { id: 6, title: "Marketing Tools", image: card7, overlayText: "Marketing", link: "/marketing" },
  { id: 7, title: "Admin Tools", image: card5, overlayText: "Admin", link: "/admin" },
];

const AnimatedText = ({ text, className, delay = 0 }) => {
  const words = text.split(" ");
  return (
    <span className="inline-block overflow-hidden">
      {words.map((word, wIdx) => (
        <span key={wIdx} className="inline-block mr-2">
          {word.split("").map((char, cIdx) => (
            <motion.span
              key={`${wIdx}-${cIdx}`}
              className={`inline-block ${className}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: delay + (wIdx * 0.3) + cIdx * 0.03,
                ease: [0.215, 0.61, 0.355, 1],
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
};

const AnimatedSection = ({ children, className, initialX = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: initialX, y: 30 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
        delay: initialX !== 0 ? (initialX > 0 ? 0.3 : 0.1) : 0,
      }}
    >
      {children}
    </motion.div>
  );
};

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full w-full">
      <AnimatePresence mode="wait">
        {cards.map((card, index) => {
          const distance = Math.abs(index - currentIndex);
          const isActive = index === currentIndex;
          const zIndex = cards.length - distance;

          return (
            <motion.div
              key={card.id}
              className="absolute top-0 left-0 w-full h-full"
              initial={{ opacity: 0, y: 50, rotateX: 10, scale: 0.9 }}
              animate={{
                opacity: isActive ? 1 : 0.7 - distance * 0.15,
                y: isActive ? 0 : 20 + distance * 10,
                rotateX: isActive ? 0 : 5,
                scale: isActive ? 1 : 0.95 - distance * 0.03,
                zIndex,
              }}
              exit={{ opacity: 0, y: -50, rotateX: -10, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30, duration: 0.5 }}
              style={{
                transformOrigin: "center bottom",
                pointerEvents: isActive ? "auto" : "none",
              }}
            >
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 h-full">
                <div className="relative h-full">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex top-[80%] justify-center">
                    <motion.h2
                      className="text-2xl md:text-3xl regular tracking-wide text-white"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: isActive ? 0.2 : 0 }}
                    >
                      {card.overlayText}
                    </motion.h2>
                  </div>

                  {/* ✅ Learn More link */}
                  <Link to={card.link}>
                    <motion.p
                      className="absolute top-4 right-4 text-white bg-white/30 px-4 py-2 rounded-full text-sm hover:bg-white/60 transition-colors cursor-pointer"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: isActive ? 0.4 : 0 }}
                    >
                      Learn More
                    </motion.p>
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const shapeY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const shapeY2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const shapeY3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div
      className="w-full min-h-screen bg-white flex items-start justify-center py-12 px-4 sm:px-6 lg:px-8"
      ref={containerRef}
    >
      <motion.div className="container mx-auto relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Column */}
          <AnimatedSection className="w-full lg:w-5/12 text-center lg:text-left" initialX={-100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0d3557] leading-tight">
              <AnimatedText text="Unlock" className="text-[#0d3557]" delay={0.2} />
              <br />
              <AnimatedText text="Infinite" delay={0.4} />
              <AnimatedText text="Productivity" delay={0.6} />
            </h1>
            <motion.p
              className="mt-2 text-base sm:text-lg md:text-xl text-[#0d3557]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Join World's #1 Trusted, Tech-Powered Offshore AEC Partner for Seamless Project Delivery
            </motion.p>
            <motion.div
              className="mt-8 flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.button
                className="w-full sm:w-auto text-lg sm:text-xl bg-[#256bff] text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="regular cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => {
                    const section = document.getElementById("scheduling");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Schedule a Meet
                </motion.span>
              </motion.button>
            </motion.div>
          </AnimatedSection>

          {/* Right Column */}
          <AnimatedSection className="w-full lg:w-7/12" initialX={100}>
            <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
              <CardCarousel />
            </div>
          </AnimatedSection>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
