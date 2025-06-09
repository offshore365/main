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
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import card1 from "../assets/h1.png";
import card2 from "../assets/interior.jpg";
import card3 from "../assets/bim.jpg";
import card4 from "../assets/h4.jpg";
import card5 from "../assets/aa.png";
import card6 from "../assets/it.png";
import card7 from "../assets/mrr.png";

const cards = [
  { id: 1, title: "Architecture", image: card1, link: "/architecture" },
  { id: 2, title: "Interior", image: card2, link: "/interior" },
  { id: 3, title: "BIM", image: card3, link: "/bim" },
  { id: 4, title: "3D Visualisation", image: card4, link: "/3dvisualization" },
  { id: 5, title: "IT", image: card6, link: "/it" },
  { id: 6, title: "Marketing", image: card7, link: "/marketing" },
  { id: 7, title: "Admin", image: card5, link: "/admin" },
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
              <div className=" rounded-xl shadow-2xl overflow-hidden border h-full">
                <div className="relative h-full">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                  <Link to={card.link}>
                    <motion.div
                      className="absolute bottom-10 right-10 border border-white bg-black/30 text-white px-6 py-2 rounded-full text-sm sm:text-base md:text-lg regular flex items-center gap-2 hover:bg-black/70 transition-all duration-300 group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: isActive ? 0.3 : 0 }}
                    >
                      <span className="regular">{card.title}</span>
                      <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </motion.div>
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
      className="w-full min-h-screen bg-white/90 flex items-start justify-center py-12 px-4 sm:px-6 lg:px-8"
      ref={containerRef}
    >
      <motion.div className="container mx-auto relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
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
                        if (section) section.scrollIntoView({ behavior: "smooth" });
                      }}
      >
        Schedule a Meet
      </motion.span>
              </motion.button>
            </motion.div>
          </AnimatedSection>

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

