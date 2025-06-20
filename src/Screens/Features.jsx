import React, { useRef, useEffect } from 'react';
import { StackedCarousel } from 'react-stacked-center-carousel';
import { motion } from 'framer-motion';
import AOS from 'aos';
import gsap from 'gsap';
import 'aos/dist/aos.css';

import autocad from "../assets/autocad.png";
import revit from "../assets/revit.jpg";
import sketchup from "../assets/sketchup.png";
import vray from "../assets/vray.png";
import lumion from "../assets/lumion.png";
import enscape from "../assets/enscape.png";
import max3ds from "../assets/3ds max.png";
import archicad from "../assets/archicad.jpg";
import navisworks from "../assets/navisworks.png";
import civil3d from "../assets/3dcivil.webp";
import premierepro from "../assets/premierepro.png";
import photoshop from "../assets/ps.png";
import illustrator from "../assets/ai.png";
import msoffice from "../assets/ms.png";

const cardData = [
  { title: "Global Experts", description: "250+ skilled AEC professionals trained to global standards." },
  { title: "Value Leader", description: "35–40% more economical than in-house teams." },
  { title: "Synergy", description: "Adapting to your standards for consistent, high-quality output." },
  { title: "Growth Partner", description: "Commitment to exceptional service and lasting client relationships." },
  { title: "BIM Experts", description: "Expertise in cutting-edge AEC software and methodologies." },
  { title: "Flexibility", description: "Easily scale teams to meet evolving project needs." },
  { title: "System Efficiency", description: "Comprehensive management of infrastructure, HR, and benefits." },
  { title: "Team Power", description: "Enabling your in-house staff to focus on strategic growth." },
];

const toolIcons = [
  { name: "AutoCAD", image: autocad },
  { name: "Revit", image: revit },
  { name: "SketchUp", image: sketchup },
  { name: "V-Ray", image: vray },
  { name: "Lumion", image: lumion },
  { name: "Enscape", image: enscape },
  { name: "3ds Max", image: max3ds },
  { name: "Photoshop", image: photoshop },
  { name: "Illustrator", image: illustrator },
  { name: "Archicad", image: archicad },
  { name: "Navisworks", image: navisworks },
  { name: "Civil 3D", image: civil3d },
  { name: "Premiere Pro", image: premierepro },
  { name: "MS Office", image: msoffice },
];

const readMoreColors = ['pastel-red', 'pastel-yellow', 'pastel-green', 'pastel-blue'];
const colorMap = {
  'pastel-red': '#F4E7DD',
  'pastel-yellow': '#FFCF72',
  'pastel-green': '#E2E0A0',
  'pastel-blue': '#B2E7F1',
};

const FeatureCard = React.memo(({ data, dataIndex }) => {
  const readMoreColor = readMoreColors[dataIndex % readMoreColors.length];
  const hoverBgColor = colorMap[readMoreColor];

  // Prevent all click events
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  return (
    <motion.div
      className="relative rounded-2xl shadow-md flex flex-col justify-between px-6 py-8 bg-white border-2 border-gray-300 overflow-hidden group"
      style={{
        width: '500px',
        height: '250px',
        transition: 'background-color 0.5s ease',
        cursor: 'default', // Remove pointer cursor
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBgColor)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
      onClick={handleClick}
      onMouseDown={handleClick}
      onMouseUp={handleClick}
      onTouchStart={handleClick}
      onTouchEnd={handleClick}
    >
      <div className="flex flex-col justify-start relative z-20">
        <h3 className="text-[28px] sm:text-[34px] font-bold text-[#0d3557] mb-4 text-left tracking-tight transition-colors duration-500">
          {data.title}
        </h3>
        <p className="text-[16px] sm:text-[20px] text-[#0d3557] text-left leading-relaxed transition-colors duration-500">
          {data.description}
        </p>
      </div>

      <motion.div
        className="absolute bottom-0 right-0 z-10"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } }}
        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
      >
        <div className="relative w-32 h-16">
          <div
            style={{ backgroundColor: hoverBgColor }}
            className="absolute bottom-0 right-0 w-32 h-16 rounded-tl-full flex items-center justify-center"
          ></div>
        </div>
      </motion.div>
    </motion.div>
  );
});

const Features = () => {
  const ref = useRef();
  const intervalRef = useRef(null);

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      ref.current?.goNext();
    }, 2000);
  };

  const stopAutoplay = () => {
    clearInterval(intervalRef.current);
  };

  const handleMouseEnter = () => {
    stopAutoplay();
    document.body.classList.add('disable-click-temporarily');
  };

  const handleMouseLeave = () => {
    startAutoplay();
    document.body.classList.remove('disable-click-temporarily');
  };

  // Prevent clicks on the entire carousel container
  const handleCarouselClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    startAutoplay();

    gsap.from(".gsap-heading span", {
      y: 60,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power4.out",
    });

    gsap.from(".gsap-subtext", {
      x: 80,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
    });

    return () => stopAutoplay();
  }, []);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
      <h1 className="text-[36px] sm:text-[50px] font-bold text-[#0d3557] mb-2 tracking-wide gsap-heading">
        Innovate with Offshore 365
      </h1>

      <p className="text-[18px] sm:text-[20px] text-[#0d3557] mb-10 max-w-2xl mx-auto ">
        Deliver seamless projects with our exceptional expertise
      </p>

      <div
        className="carousel-container flex justify-center overflow-x-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleCarouselClick}
        onMouseDown={handleCarouselClick}
        onMouseUp={handleCarouselClick}
        onTouchStart={handleCarouselClick}
        onTouchEnd={handleCarouselClick}
        style={{ cursor: 'default' }}
      >
        <StackedCarousel
          ref={ref}
          slideComponent={(props) => (
            <FeatureCard {...props} data={cardData[props.dataIndex]} />
          )}
          slideWidth={360}
          carouselWidth={2000}
          data={cardData}
          maxVisibleSlide={5}
          customScales={[1, 0.9, 0.8, 0.7]}
          transitionTime={500}
        />
      </div>

      <div className="relative w-full mt-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-16 sm:w-24 h-full z-10 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 sm:w-24 h-full z-10 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none" />

        <p className="text-[16px] px-12 sm:px sm:text-[20px] text-[#0d3557] mb-10 max-w-2xl mx-auto leading-relaxed">
          We bring together the finest talent and the most advanced technologies to empower your business.
        </p>

        <div className="overflow-hidden w-full">
          <motion.div
            className="flex gap-10 sm:gap-12 w-max px-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-10 sm:gap-12">
                {toolIcons.map((tool, idx) => (
                  <div key={`${i}-${idx}`} className="flex flex-col items-center min-w-[80px] sm:min-w-[100px]">
                    <img src={tool.image} alt={tool.name} className="w-8 h-8 sm:w-10 sm:h-10" />
                    <p className="text-[12px] sm:text-[14px] text-[#0d3557] mt-2">{tool.name}</p>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .disable-click-temporarily * {
          pointer-events: none !important;
        }
        .carousel-container * {
          pointer-events: auto !important;
        }
        
        /* Disable all click interactions on carousel cards */
        .carousel-container .feature-card,
        .carousel-container .feature-card * {
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }
      `}</style>
    </div>
  );
};

export default Features;