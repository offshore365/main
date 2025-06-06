import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import architectureHero from "../../assets/architecture.png";
import serviceImage from "../../assets/architecture.png";
import toolsImage from "../../assets/architecture.png";
import plansImage from "../../assets/architecture.png";
import whyUsImage from "../../assets/architecture.png";
import getStartedImage from "../../assets/architecture.png";
import { Link } from "react-router-dom";
import architectureVideo from "../../assets/architecture.mp4";
import Scheduling from "../Scheduling";
import figmaLogo from "../../assets/ms.png";
import offshoreLogo from "../../assets/logowh.png"; // adjust path if needed
import autocad from "../../assets/autocad.png";
import revit from "../../assets/revit.jpg";
import sketchup from "../../assets/sketchup.png";
import vray from "../../assets/vray.png";
import lumion from "../../assets/lumion.png";
import enscape from "../../assets/enscape.png";
import photoshop from "../../assets/photoshop.jpg";
import illustrator from "../../assets/illustrator.jpg";
import archicad from "../../assets/archicad.jpg";
import msoffice from "../../assets/ms.png";


const Architecture = () => {
  const [activeTab, setActiveTab] = useState("services");
  const [isSticky, setIsSticky] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [showSchedulingSection, setShowSchedulingSection] = useState(false);
  const sectionRefs = useRef({});
  const tabsRef = useRef(null);
  const placeholderRef = useRef(null);
  const originalTopRef = useRef(null);
  const toolsList = [
    { name: "AutoCAD", image: autocad },
    { name: "Revit", image: revit },
    { name: "SketchUp", image: sketchup },
    { name: "V-Ray", image: vray },
    { name: "Lumion", image: lumion },
    { name: "Enscape", image: enscape },
    { name: "Photoshop", image: photoshop },
    { name: "Illustrator", image: illustrator },
    { name: "Archicad", image: archicad },
    { name: "MS Office", image: msoffice },
  ];

  const tabs = [
    { id: "services", label: "Services" },
    { id: "tools", label: "Tools" },
    { id: "plans", label: "Plans" },
    { id: "why-us", label: "Why Us?" },
    { id: "get-started", label: "Get Started" },
    { id: "faq", label: "FAQ" },
  ];

  const tabData = {
    services: {
      title: "Comprehensive Architechural Excellence Services",
      description:
        "We provide end-to-end Architectural Excellence solutions from concept to completion. Our team delivers innovative designs tailored to your specific needs and vision.",
      image: architectureHero,
      features: [
        { name: "PRE CONCEPT DESIGN", image: serviceImage },
        { name: "SCHEMATIC DESIGN", image: serviceImage },
        { name: "DESIGN DEVELOPMENT", image: serviceImage },
        { name: "CONSTRUCTION DOCUMENTS", image: serviceImage },
        { name: "SPACE PLANING", image: serviceImage },
        { name: "DRAFTING", image: serviceImage },
        { name: " 3D MODELLING AND RENDERING", image: serviceImage },
        { name: " BOQ AND MATERIAL TAKE OFF", image: serviceImage },
        { name: "WALK THROUGH ANIMATIONS", image: serviceImage },
        { name: "QUALITY CHECKS", image: serviceImage },
      ],
    },
    tools: {
      title: "Connect with Offshore365 with the tools you already use",
      description:
        "Work seamlessly with offshore experts skilled in leading AEC software.",
      image: toolsImage,
      software: [
        { name: "Zoom", icon: "Z" },
        { name: "Salesforce", icon: "S" },
        { name: "Slack", icon: "S" },
        { name: "Microsoft Teams", icon: "M" },
        { name: "Gmail", icon: "G" },
        { name: "Outlook", icon: "O" },
        { name: "Google Chrome", icon: "C" },
        { name: "PayPal", icon: "P" },
        { name: "LinkedIn", icon: "L" },
        { name: "Stripe", icon: "S" },
      ],
    },
    plans: {
      title: "Pick the perfect model for your team",
      description: "Choose from a variety of plans tailored to your needs.",
      image: plansImage,
      plans: [
        {
          title: "Hourly Billing ",
          description: "Flexible billing based on hours worked.",
          backDescription:
            "Billing is based on team hours, ideal for dynamic, evolving project scopes.",
        },
        {
          title: "Fixed Fee ",
          description: "Set price for defined project scope.",
          backDescription:
            "A fixed cost is set upfront for clearly defined projects with stable requirements.",
        },
        {
          title: "Project Based ",
          description: "Comprehensive pricing for entire projects.",
          backDescription:
            "Pricing aligns with project phases and milestones—great for phased delivery.",
        },
        {
          title: "Dedicated Team ",
          description: "Full-time team for ongoing collaboration.",
          backDescription:
            "A team works exclusively on your project—best for long-term collaboration.",
        },
        {
          title: "Performance Based",
          description: "Pricing tied to project outcomes.",
          backDescription:
            "Payment is based on results, motivating vendors to exceed targets.",
        },
      ],
    },
    "why-us": {
      title: "Why Choose Our Architectural Excellence Services?",
      description:
        "We combine creativity with technical expertise to deliver exceptional results.",
      image: whyUsImage,
      stats: [
        { number: 250, label: "Architects", max: 300, percentage: 83 },
        { number: 15, label: "Countries", max: 20, percentage: 75 },
        { number: 500, label: "Global Projects", max: 600, percentage: 83 },
      ],
      highlightedBenefits: [
        {
          title: "Reduced Administrative Burden",
          description:
            "Offshore365 handles the administrative tasks associated with hiring and managing staff, such as recruitment, onboarding, and payroll. This allows clients to focus on their core business operations.",
        },
        {
          title: "Time Zone Advantage",
          description:
            "Offshore teams can work while your in-house team is off, enabling faster project turnaround times and shorter project cycles. This can be a significant advantage for projects with tight deadlines.",
        },
      ],
      benefits: [
        {
          title: "AEC Expertise",
          description:
            "We specialize in Architecture, Engineering, and Construction staffing.",
        },
        {
          title: "Global Talent",
          description: "Access highly skilled AEC professionals worldwide.",
        },
        {
          title: "Cost-Effective",
          description:
            "Reduce costs significantly compared to in-house hiring.",
        },
        {
          title: "Scalable Teams",
          description: "Quickly scale your team up or down as needed.",
        },
        {
          title: "Boost Productivity",
          description: "Free up your in-house team to focus on core tasks.",
        },
        {
          title: "Seamless Integration",
          description: "Easy collaboration with your existing workflows.",
        },
        {
          title: "Quality and Reliability",
          description: "Rigorous screening ensures top-tier talent.",
        },
        {
          title: "Faster Turnaround",
          description:
            "Leverage time zone differences for quicker project completion.",
        },
      ],
      academy: {
        title: "Academy - Training on International Standards",
        description:
          "Our academy provides comprehensive training programs aligned with international standards, ensuring our professionals are equipped with the latest skills and knowledge in the AEC industry.",
      },
    },
    faq: {
      title: "FAQ",
      description: "Here are some of the frequently asked questions",
      faqs: [
        {
          question: "What architectural design services do you offer?",
          answer:
            "We provide schematic design, concept development, construction documentation, 3D rendering, walkthroughs, interior design, flythroughs, 360° views, and high-quality visualizations.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-[#A66A6C]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
          ),
        },
        {
          question:
            "How can our firm benefit from outsourcing architectural services?",
          answer:
            "Outsourcing helps reduce costs, access expert talent, improve project delivery speed, and lets you focus on core competencies without expanding internal resources.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-[#A66A6C]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          ),
        },
        {
          question:
            "Do you provide permit drawings as per U.S. building codes?",
          answer:
            "We can help guide and review permit drawings for compliance with U.S. building codes, but we do not stamp final drawings for permit submission.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-[#A66A6C]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
          ),
        },
        {
          question: "How do you ensure accuracy and quality in your work?",
          answer:
            "Our certified designers follow strict quality protocols, detailed reviews, and building codes, ensuring accurate, high-standard outputs on every project.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-[#A66A6C]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
          ),
        },
        {
          question: "How does your team collaborate with in-house architects?",
          answer:
            "Our team integrates closely with your architects to align on design intent, offer support where needed, and ensure seamless documentation and execution.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-[#A66A6C]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              />
            </svg>
          ),
        },
        {
          question:
            "Do you offer dedicated teams for long-term architectural support?",
          answer:
            "Yes, we provide dedicated design teams for ongoing partnerships, offering consistent, customized support to match your firm’s workflow and goals.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-[#A66A6C]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
              />
            </svg>
          ),
        },
      ],
    },

    "get-started": {
      title: "Start Your Architectural Excellence Project Today",
      description:
        "Get in touch to discuss your project requirements and how we can help bring your vision to life.",
      image: getStartedImage,
      steps: [
        "Schedule a consultation",
        "Discuss your project needs",
        "Receive a customized proposal",
        "Begin the design process",
      ],
    },
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    if (tabsRef.current && !originalTopRef.current) {
      originalTopRef.current = tabsRef.current.offsetTop;
    }

    const handleScroll = () => {
      if (tabsRef.current && originalTopRef.current) {
        const tabsTop = tabsRef.current.getBoundingClientRect().top;
        const scrollPosition = window.scrollY;

        if (tabsTop <= 0 && scrollPosition >= originalTopRef.current) {
          setIsSticky(true);
        } else if (scrollPosition < originalTopRef.current) {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveTab(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % tabData.tools.software.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const setRef = (id, ref) => {
    sectionRefs.current[id] = ref;
  };

  const handleTabClick = (id) => {
    setActiveTab(id);
    if (sectionRefs.current[id]) {
      sectionRefs.current[id].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const features = tabData.services.features;
  const doubledFeatures = [...features, ...features];
  const imageWidth = 100;
  const gap = 16;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === features.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  const activeGradient = "linear-gradient(744deg, #D9B3B2, #D9B3B2 30%, #B78485 65%, #A66A6C)";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="py-12 sm:py-16 lg:py-20 h-[400px] sm:h-[500px] lg:h-[600px] transition-all duration-1000 text-white flex justify-center items-center relative overflow-hidden"
        style={{ background: activeGradient }}
      >
        {/* Background Waves */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`bg-wave-${i}`}
            className="wave absolute w-[300%] h-[300%] opacity-20 sm:opacity-25 lg:opacity-30 left-[-50%] top-[-50%] rounded-[100%]"
            style={{
              background: activeGradient,
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + i * 5}s`,
            }}
          />
        ))}

        <div className="relative text-center px-4 sm:px-6 lg:px-4 z-10 max-w-6xl mx-auto" data-aos="fade-up">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] font-extrabold tracking-wide mb-3 sm:mb-4 drop-shadow-2xl leading-tight"
          >
            Interior
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.2 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] font-light max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
          >
            Offshore365 has completed over 200+ Large Scale Architectural
            Projects using BIM & CAD, produced in accordance with AIA and RIBA
            architecture standards.
          </motion.p>
        </div>
      </motion.section>

      <style jsx>{`
        .wave {
          animation: wave 5s infinite linear;
          pointer-events: none;
        }

        .wave:nth-child(2) {
          animation-duration: 2s;
        }

        .wave:nth-child(3) {
          animation-duration: 2s;
        }

        .group:hover .wave {
          animation-play-state: paused;
        }

        @keyframes wave {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>

      {/* Placeholder for Tabs Bar */}
      <div
        ref={placeholderRef}
        className={`${isSticky ? "block" : "hidden"}`}
        style={{
          height: tabsRef.current ? `${tabsRef.current.offsetHeight}px` : "0px",
        }}
      ></div>

      <motion.div
        ref={tabsRef}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`z-20 bg-[#A66A6C] backdrop-blur-xl shadow-lg transition-all duration-300 ${isSticky ? "fixed top-[64px] left-0 right-0 shadow-xl" : "relative"
          }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-3 gap-2 sm:gap-3 flex-wrap">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`relative px-4 sm:px-6 py-2 text-sm regular rounded-md transition-all duration-300
            ${activeTab === tab.id
                    ? "bg-[#D9B3B2] text-[#A66A6C] font-semibold"
                    : "text-white hover:bg-[#D9B3B2] hover:text-[#A66A6C]"
                  }`}
              >
                {tab.label}

              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>


      {/* Main Content */}
      <div className="container mx-auto px-2 sm:px-24">
        {/* Services Section */}
        <motion.section
          ref={(ref) => setRef("services", ref)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-8 sm:py-12 lg:py-16 scroll-mt-20"
          id="services"
          data-aos="fade-up"
        >
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* LEFT: TEXT SECTION */}
            <div className="flex-1 w-full lg:w-auto" data-aos="fade-right">
              <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold mb-3 lg:mb-2 text-[#0d3557] tracking-wide leading-tight lg:leading-snug">
                Amplify Productivity with Offshore 365
              </h1>
              <p className="text-sm sm:text-base lg:text-[18px] text-[#0d3557] leading-relaxed">
                Offshore 365 delivers end to end documentation services to a diverse range of sectors, supported by our global team, we empower your projects with accuracy, quality, and efficiency, no matter the scale or complexity.
              </p>
            </div>

            {/* RIGHT: FEATURES + CAROUSEL */}
            <div className="flex-1 w-full lg:w-auto flex flex-col gap-4 sm:gap-6" data-aos="fade-left">
              {/* Feature boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-[#1F3B4D]">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, backgroundColor: "#f1f5f9" }}
                    className="flex items-start p-1 sm:p-2 bg-white rounded-xl hover:shadow-lg transition-all duration-300 "
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="bg-[#D9B3B2] rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-[#A66A6C]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-[#0d3557] regular text-sm sm:text-[14px] leading-relaxed">
                      {feature.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Carousel below feature boxes */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative w-full h-[120px] sm:h-[140px] lg:h-[150px]"
              >
                <div className="absolute bottom-0 w-full h-full overflow-hidden rounded-lg">
                  <motion.div
                    className="flex"
                    animate={{
                      x: `-${activeIndex * (imageWidth + gap)}px`,
                      transition: {
                        x: {
                          duration: 0.5,
                          ease: "easeInOut",
                        },
                      },
                    }}
                    style={{
                      width: `${doubledFeatures.length * (imageWidth + gap)}px`,
                    }}
                  >
                    {doubledFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center mx-1 sm:mx-2 py-2"
                        onClick={() => setActiveIndex(index % features.length)}
                      >
                        <div
                          className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg overflow-hidden mb-1 cursor-pointer transition-transform duration-200 `}
                        >
                          <img
                            src={feature.image}
                            alt={feature.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-[#0d3557] regular text-xs sm:text-[12px] text-center leading-tight max-w-[80px] sm:max-w-none">
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </div>


              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Tools Section */}
        <section
          ref={(ref) => setRef("tools", ref)}
          className="py-8 sm:py-12 lg:py-16 scroll-mt-20 rounded-2xl px-4 sm:px-6 lg:px-8 text-white"
          id="tools"
          data-aos="fade-up"
        >
          <div className="container max-w-4xl mx-auto flex flex-col lg:flex-row items-start gap-4 lg:gap-8">
            <div className="flex-1 w-full">
              {/* Title and Description */}
              <div className="text-center lg:text-left mb-8 sm:mb-12 lg:mb-16">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] text-[#0d3557] font-extrabold mb-3 sm:mb-4 lg:mb-2 leading-tight">
                  {tabData.tools.title}
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-[#0d3557] leading-relaxed max-w-3xl mx-auto lg:mx-0">
                  {tabData.tools.description}
                </p>
              </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
                {toolsList.map((tool, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center group hover:scale-105 transition-all duration-300 ease-out"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl overflow-hidden mb-2 sm:mb-3 group-hover:shadow-xl transition-shadow duration-300">
                      <img
                        src={tool.image}
                        alt={tool.name}
                        className="w-full h-full object-contain bg-white p-2 sm:p-3"
                      />
                    </div>
                    <p className="text-sm sm:text-base text-[#0d3557] font-medium">{tool.name}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Plans Section */}
        <>
          <section
            ref={(ref) => setRef("plans", ref)}
            className="py-12 sm:py-16 lg:py-20 mb-12 sm:mb-16 lg:mb-20 scroll-mt-20 px-4 sm:px-6 lg:px-8"
            id="plans"
          >
            <div className="max-w-7xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] tracking-wide text-[#0d3557] font-extrabold mb-3 sm:mb-4 lg:mb-2 leading-tight">
                  {tabData.plans.title}
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-[#0d3557] leading-relaxed max-w-3xl mx-auto px-4">
                  {tabData.plans.description}
                </p>
              </div>

              {/* Plans Grid - Mobile Horizontal Scroll, Desktop Grid */}
              <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 sm:gap-4 lg:gap-6 sm:justify-items-center">
                {/* Mobile Horizontal Scroll Container */}
                <div className="sm:hidden">
                  <div className="overflow-x-auto pb-4" id="mobile-plans-scroll">
                    <div className="flex gap-4 px-2" style={{ width: 'max-content' }}>
                      {tabData.plans.plans.slice(0, 5).map((plan, index) => (
                        <div
                          key={index}
                          className="group relative flex-shrink-0 w-[280px] h-[200px] bg-[#A66A6C] shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105"
                          style={{
                            border: "2px solid transparent",
                          }}
                        >
                          {/* Wave Effects */}
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={`wave-${index}-${i}`}
                              className={`wave absolute w-[320px] h-[320px] opacity-50 left-0 ${i === 0 ? "top-0 -mt-[70%]" : "top-[150px]"
                                } -ml-[50%] rounded-[40%]`}
                              style={{
                                background:
                                  i === 0
                                    ? "#D9B3B2" // Light shore blue
                                    : i === 1
                                      ? "#A66A6C" // Core blue
                                      : "#2C3E47", // Deep slate
                                animationDelay: `${i * 1}s`,
                                animationDuration: `${5 + i * 2}s`,
                              }}
                            />
                          ))}

                          {/* Card Content */}
                          <div className="relative z-10 flex flex-col items-center text-center justify-center h-full text-white px-6">
                            <h1 className="text-xl tracking-wider text-white font-regular mb-3 transition-transform duration-300 group-hover:scale-110 leading-tight">
                              {plan.title}
                            </h1>
                            <p className="text-base text-white/80 mb-4 leading-relaxed transition-transform duration-300 group-hover:scale-110 line-clamp-3">
                              {plan.description.slice(0, 60)}...
                            </p>
                            <button
                              onClick={() => {
                                const target = document.getElementById("get-started");
                                if (target) {
                                  target.scrollIntoView({ behavior: "smooth" });
                                }
                              }}
                              className="w-full py-2.5 text-base rounded-lg bg-white text-[#0d3557] font-regular transition duration-300 hover:bg-gray-100 hover:shadow-md active:scale-95"
                            >
                              Get started
                            </button>

                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Navigation Buttons */}
                  <div className="flex justify-center items-center gap-4 mt-6">
                    <button
                      onClick={() => {
                        const container = document.getElementById('mobile-plans-scroll');
                        container.scrollBy({ left: -300, behavior: 'smooth' });
                      }}
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-[#A66A6C] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-[#B78485]"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>



                    <button
                      onClick={() => {
                        const container = document.getElementById('mobile-plans-scroll');
                        container.scrollBy({ left: 300, behavior: 'smooth' });
                      }}
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-[#A66A6C] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-[#B78485]"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Desktop Grid Items - Hidden on Mobile */}
                {tabData.plans.plans.slice(0, 5).map((plan, index) => (
                  <div
                    key={index}
                    className="group relative hidden sm:block w-full max-w-[280px] sm:w-[250px] lg:w-[240px] xl:w-[250px] h-[180px] sm:h-[200px] lg:h-[220px] xl:h-[200px] bg-[#A66A6C] shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105"
                    style={{
                      border: "2px solid transparent",
                    }}
                  >
                    {/* Wave Effects */}
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={`wave-desktop-${index}-${i}`}
                        className={`wave absolute w-[280px] sm:w-[320px] lg:w-[350px] h-[280px] sm:h-[320px] lg:h-[350px] opacity-50 left-0 ${i === 0 ? "top-0 -mt-[60%] sm:-mt-[70%]" : "top-[120px] sm:top-[150px]"
                          } -ml-[40%] sm:-ml-[50%] rounded-[40%]`}
                        style={{
                          background:
                            i === 0
                              ? "#D9B3B2" // Light shore blue
                              : i === 1
                                ? "#A66A6C" // Core blue
                                : "#B78485", // Deep slate
                          animationDelay: `${i * 1}s`,
                          animationDuration: `${5 + i * 2}s`,
                        }}
                      />
                    ))}

                    {/* Card Content */}
                    <div className="relative z-10 flex flex-col items-center text-center justify-center h-full text-white px-4 sm:px-6">
                      <h1 className="text-lg sm:text-xl lg:text-[20px] tracking-wider text-white font-regular mb-2 sm:mb-3 transition-transform duration-300 group-hover:scale-110 leading-tight">
                        {plan.title}
                      </h1>
                      <p className="text-sm sm:text-base lg:text-[16px] text-white/80 mb-3 sm:mb-4 leading-relaxed transition-transform duration-300 group-hover:scale-110 line-clamp-3">
                        {plan.description.slice(0, 60)}...
                      </p>
                      <button
                        onClick={() => {
                          const target = document.getElementById("get-started");
                          if (target) {
                            target.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        className="w-full py-2 sm:py-2.5 text-sm sm:text-base lg:text-[16px] rounded-lg bg-white text-[#A66A6C] font-regular transition duration-300 hover:bg-gray-100 hover:shadow-md active:scale-95"
                      >
                        Get started
                      </button>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Styles */}
          <style jsx>{`
    .wave {
      animation: wave 5s infinite linear;
      pointer-events: none;
    }

    .wave:nth-child(2) {
      animation-duration: 7s;
    }

    .wave:nth-child(3) {
      animation-duration: 9s;
    }

    .group:hover .wave {
      animation-play-state: paused;
    }

    @keyframes wave {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    .line-clamp-3 {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* Mobile horizontal scroll styling */
    .overflow-x-auto {
      scrollbar-width: thin;
      scrollbar-color: #A66A6C transparent;
    }

    .overflow-x-auto::-webkit-scrollbar {
      height: 6px;
    }

    .overflow-x-auto::-webkit-scrollbar-track {
      background: transparent;
    }

    .overflow-x-auto::-webkit-scrollbar-thumb {
      background-color: #A66A6C;
      border-radius: 3px;
    }

    .overflow-x-auto::-webkit-scrollbar-thumb:hover {
      background-color: #0d3557;
    }

    /* Mobile-specific optimizations */
    @media (max-width: 640px) {
      .wave {
        animation-duration: 6s;
      }
      
      .wave:nth-child(2) {
        animation-duration: 8s;
      }

      .wave:nth-child(3) {
        animation-duration: 10s;
      }
    }
  `}</style>
        </>

        {/* Why Us Section */}
        <section
          ref={(ref) => setRef("why-us", ref)}
          className="py-8 sm:py-12 lg:py-16 scroll-mt-20 mb-12 sm:mb-16 lg:mb-20 rounded-2xl px-4 sm:px-6 lg:px-8 text-[#1F3B4D]"
          id="why-us"
          data-aos="zoom-in"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row-reverse items-start gap-6 sm:gap-8 lg:gap-12">

              {/* Right side content - Stats and Benefits */}
              <div className="flex-1 w-full" data-aos="fade-left">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  {tabData["why-us"].stats.map((stat, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-start"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="text-2xl sm:text-3xl lg:text-[34px] text-[#0d3557] mt-2 sm:mt-4 font-bold mb-1 sm:mb-2">
                        {stat.number}+
                      </div>
                      <div className="text-sm sm:text-lg lg:text-[20px] regular text-[#1F3B4D] mb-2 leading-tight">
                        {stat.label}
                      </div>
                      <div className="w-full bg-[#D9B3B2] rounded-full h-2 sm:h-2.5">
                        <div
                          className="bg-[#A66A6C] h-2 sm:h-2.5 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${stat.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {tabData["why-us"].highlightedBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="group p-3 sm:p-4 bg-white rounded-xl shadow-lg border border-[#3C6E71]/30 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="flex items-start mb-2">
                        <div className="bg-[#D9B3B2] rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 mt-0.5">
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4 text-[#A66A6C]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <h1 className="text-sm sm:text-[14px] text-[#B78485] tracking-wide font-semibold leading-tight">
                          {benefit.title}
                        </h1>
                      </div>
                      <p className="text-xs sm:text-[12px] text-[#0d3557] leading-relaxed pl-7 sm:pl-9">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Left side content - Main heading and features */}
              <div
                className="flex-1 w-full order-first lg:order-none"
                data-aos="fade-right"
              >
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-bold mb-6 sm:mb-8 text-[#0d3557] tracking-wide leading-tight">
                  Transform the way your organisation works
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-[#1F3B4D]">
                  {[
                    "AEC Expertise",
                    "Global Talent",
                    "Cost Effective",
                    "Scalable Teams",
                    "Boost Productivity",
                    "Seamless Integration",
                    "Quality & Reliability",
                    "Faster Turnaround",
                  ].map((point, index) => (
                    <div
                      key={index}
                      className="group flex items-start p-2 sm:p-3 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#f1f5f9] cursor-pointer"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="bg-[#D9B3B2] rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 ">
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4 text-[#A66A6C]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-sm sm:text-[14px] uppercase text-[#0d3557] regular">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section
          ref={(ref) => setRef("get-started", ref)}
          className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 min-h-[400px] sm:min-h-[500px] lg:h-[550px] transition-all duration-1000 text-white flex rounded-2xl justify-center items-center relative overflow-hidden"
          style={{ background: activeGradient }}
          id="get-started"
        >
          {/* Background Waves - Responsive */}
          {[...Array(3)].map((_, i) => (
            <div
              key={`bg-wave-${i}`}
              className={`wave absolute opacity-20 sm:opacity-30 left-0 top-0 rounded-full
            w-[200%] h-[200%] sm:w-[250%] sm:h-[250%] lg:w-[300%] lg:h-[300%]
            ${i === 0 ? '-translate-x-1/4 -translate-y-1/4' : ''}
            ${i === 1 ? '-translate-x-1/3 -translate-y-1/3' : ''}
            ${i === 2 ? '-translate-x-1/2 -translate-y-1/2' : ''}
          `}
              style={{
                background: activeGradient,
                animationDelay: `${i * 2}s`,
                animationDuration: `${15 + i * 5}s`,
              }}
            />
          ))}

          {/* Content Container */}
          <div className="relative text-center z-10 max-w-6xl mx-auto w-full">

            {/* Logo Section */}
            <div className="mb-6 sm:mb-8 lg:mb-10 flex justify-center">
              <img
                src={offshoreLogo}
                alt="Offshore365 Logo"
                className="w-[300px] sm:w-64 md:w-80 lg:w-[500px] xl:w-[600px]  object-contain transition-all duration-500"
              />
            </div>

            {/* Tagline */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] font-light max-w-xs sm:max-w-md lg:max-w-2xl mx-auto text-gray-200 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
              Power Your Business Today with 365 Productivity.
            </p>

            {/* Action Buttons */}
            {/* Action Buttons */}
            <div className="flex flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
              <button
                onClick={() => setShowSchedulingSection(true)}
                className="group px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-gray-700 rounded-xl transition-all duration-300 text-sm sm:text-base regular shadow-lg hover:shadow-xl hover:scale-[1.02] sm:hover:scale-105 active:scale-95 transform"
              >
                <span className="group-hover:animate-pulse regular">Schedule a Meet</span>
              </button>

              <button
                className="group px-6 sm:px-8 py-3 sm:py-3.5 border border-white text-white rounded-xl hover:bg-white hover:text-gray-700 transition-all duration-300 regular text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-[1.02] sm:hover:scale-105 active:scale-95 transform"
              >
                <span className="group-hover:animate-pulse regular">Contact Our Team</span>
              </button>
            </div>



          </div>

          {/* Styles for animations */}
          <style jsx>{`
        .wave {
          animation: float 20s infinite linear;
          pointer-events: none;
        }

        .wave:nth-child(2) {
          animation-duration: 25s;
          animation-direction: reverse;
        }

        .wave:nth-child(3) {
          animation-duration: 30s;
        }

        @keyframes float {
          0% {
            transform: rotate(0deg) translateX(0) translateY(0);
          }
          33% {
            transform: rotate(120deg) translateX(20px) translateY(-20px);
          }
          66% {
            transform: rotate(240deg) translateX(-20px) translateY(20px);
          }
          100% {
            transform: rotate(360deg) translateX(0) translateY(0);
          }
        }

        /* Enhanced mobile touch targets */
        @media (max-width: 640px) {
          .wave {
            animation-duration: 25s;
          }
          
          .wave:nth-child(2) {
            animation-duration: 30s;
          }

          .wave:nth-child(3) {
            animation-duration: 35s;
          }
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          .wave {
            animation: none;
          }
          
          .animate-bounce {
            animation: none;
          }
          
          .group-hover\\:animate-pulse:hover {
            animation: none;
          }
        }
      `}</style>
        </section>

        {/* Scheduling Section */}
        {showSchedulingSection && (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            id="scheduling-section"
            data-aos="fade-up"
          >
            <div className="">
              <Scheduling />
            </div>
          </motion.section>
        )}

        {/* FAQ Section */}
        <motion.section
          ref={(ref) => setRef("faq", ref)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-8 sm:py-12 lg:py-16 scroll-mt-20 rounded-2xl px-4 sm:px-6 lg:px-8"
          id="faq"
          data-aos="fade-up"
        >
          <div className="p-4 sm:p-6 lg:p-8 rounded-lg max-w-7xl mx-auto">
            {/* Title */}
            <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#0d3557] tracking-wide text-center leading-tight">
              {tabData.faq.title}
            </h4>

            {/* Subtitle */}
            <p className="text-center text-[#0d3557] text-base sm:text-lg lg:text-[20px] mt-3 sm:mt-2 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              {tabData.faq.description}
            </p>

            {/* FAQ Cards - Mobile Horizontal Scroll, Desktop Grid */}
            <div className="mt-6 sm:mt-8">
              {/* Mobile Horizontal Scroll Container */}
              <div className="md:hidden">
                <div className="overflow-x-auto pb-4" id="mobile-faq-scroll">
                  <div className="flex gap-4 px-2" style={{ width: 'max-content' }}>
                    {tabData.faq.faqs.map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex-shrink-0 w-[320px] p-4 rounded-lg bg-white/80 backdrop-blur-sm   transition-all duration-300 hover:scale-105 "
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 flex-shrink-0 text-[#A66A6C]">{faq.icon}</div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-lg font-bold text-[#0d3557] leading-tight mb-2">
                              {faq.question}
                            </h4>
                            <p className="text-[#0d3557] text-sm leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Mobile Navigation Buttons */}
                <div className="flex justify-center items-center gap-4 mt-6">
                  <button
                    onClick={() => {
                      const container = document.getElementById('mobile-faq-scroll');
                      container.scrollBy({ left: -340, behavior: 'smooth' });
                    }}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-[#A66A6C] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-[#A66A6C]"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>



                  <button
                    onClick={() => {
                      const container = document.getElementById('mobile-faq-scroll');
                      container.scrollBy({ left: 340, behavior: 'smooth' });
                    }}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-[#A66A6C] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-[#A66A6C]"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Desktop Grid - Hidden on Mobile */}
              <div className="hidden md:grid grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 xl:gap-12 px-0 sm:px-2 xl:px-12">
                {tabData.faq.faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 lg:p-0 rounded-lg bg-white/50 sm:bg-transparent sm:border-none"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="mt-1 flex-shrink-0">{faq.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg sm:text-xl lg:text-[20px] font-bold text-[#0d3557] leading-tight">
                        {faq.question}
                      </h4>
                      <p className="text-[#0d3557] text-sm sm:text-base lg:text-[14px] my-2 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Styles */}
          <style jsx>{`
    /* Mobile horizontal scroll styling */
    .overflow-x-auto {
      scrollbar-width: thin;
      scrollbar-color: #A66A6C transparent;
    }

    .overflow-x-auto::-webkit-scrollbar {
      height: 6px;
    }

    .overflow-x-auto::-webkit-scrollbar-track {
      background: transparent;
    }

    .overflow-x-auto::-webkit-scrollbar-thumb {
      background-color: #A66A6C;
      border-radius: 3px;
    }

    .overflow-x-auto::-webkit-scrollbar-thumb:hover {
      background-color: #0d3557;
    }
  `}</style>
        </motion.section>
      </div>
    </div>
  );
};

export default Architecture;
