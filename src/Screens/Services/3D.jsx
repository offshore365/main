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
import Scheduling from "../Scheduling";
import figmaLogo from "../../assets/ms.png";
import offshoreLogo from "../../assets/logowh.png"; // adjust path if needed
const Architecture = () => {
  const [activeTab, setActiveTab] = useState("services");
  const [isSticky, setIsSticky] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [showSchedulingSection, setShowSchedulingSection] = useState(false);
  const sectionRefs = useRef({});
  const tabsRef = useRef(null);
  const placeholderRef = useRef(null);
  const originalTopRef = useRef(null);
  const [counters, setCounters] = useState([
    { number: 0, target: 60, label: "Core 3D Team" },
    { number: 0, target: 5, label: "Avg Years of Experience" },
    { number: 0, target: 250, label: "Supporting Architects" },
  ]);

  const benefits = [
    {
      title: "Premium Quality",
      points: [
        "Industry Leading Standards",
        "Rigorous Testing Process",
        "Long-lasting Durability",
        "Customer Satisfaction Guarantee",
      ],
    },
    {
      title: "Expert Support",
      points: [
        "24/7 Customer Service",
        "Technical Consultation",
        "Installation Assistance",
        "Ongoing Maintenance",
      ],
    },
    {
      title: "Cost Effective",
      points: [
        "Competitive Pricing",
        "Flexible Payment Options",
        "Long-term Savings",
        "ROI Optimization",
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % benefits.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [benefits.length]);

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
      title: "Comprehensive Interior Services",
      description:
        "We provide end-to-end Interior solutions from concept to completion. Our team delivers innovative designs tailored to your specific needs and vision.",
      image: architectureHero,
      features: [
        { name: "SCHEMATIC DESIGN", image: serviceImage },
        { name: "DESIGN DEVELOPMENT", image: serviceImage },
        { name: "CONSTRUCTION DOCUMENTS", image: serviceImage },
        { name: "SPACE PLANNING", image: serviceImage },
        { name: "DRAFTING", image: serviceImage },
        { name: "INTERIOR 3D MODELLING & RENDERING", image: serviceImage },
        { name: "360 DEGREE INTERIOR", image: serviceImage },
        { name: "MILLWORK DRAWINGS", image: serviceImage },
        { name: "QUALITY CHECKS", image: serviceImage },
        { name: "BOQ AND MATERIAL TAKE OFF", image: serviceImage },
      ],
    },
    tools: {
      title: "Connect with Offshore365 with the tools to already use",
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
      title: "Why Choose Our Interior Services?",
      description:
        "We combine creativity with technical expertise to deliver exceptional results.",
      image: whyUsImage,
      stats: [
        {
          number: 250,
          label: " Interior Architects",
          max: 300,
          percentage: 83,
        },
        { number: 21, label: "Countries", max: 20, percentage: 75 },
        { number: 250, label: "Global Projects", max: 600, percentage: 83 },
      ],
      highlightedBenefits: [
        {
          title: "Delivery Models",
          points: [
            "Agile Design: Visualizing Creative Ideas",
            "One Time Renderings - A three-step process to Realize Your Design Concept",
            "Unreal Engine VR Walkthrough Package",
          ],
        },
        {
          title: "Visualization Softwares",
          points: [
            "Expertise in 3ds Max",
            "Unreal Engine Walkthroughs",
            "Sketchup Renderings",
            "Vray & Corona for high quality renderings",
          ],
        },
        {
          title: "Architectural Precision",
          points: [
            "The Renderings are Architecturally precise",
            "3D team collaborates closely with architects and designers to grasp space dimensions",
          ],
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
          question:
            "What’s the difference between walkthroughs and flythroughs?",
          answer:
            "While walkthroughs provide an engaging perspective of a building’s interior, our flythrough highlights its exterior.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-600"
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
            "What software do you use for creating renderings and animations?",
          answer:
            "Uppteam uses superior-quality software, including Revit, 3ds Max, Lumion, Photoshop, and SketchUp, to create high-quality visualizations.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-600"
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
          question: "Do you provide 3D renderings of the proposed designs?",
          answer:
            "Yes, we offer 3D renderings. However, it will be at an additional cost.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-600"
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
          question:
            "What kinds of architectural visualizations do you produce?",
          answer:
            "Our skilled architectural designers can produce commercial, industrial, and residential visualizations, including 3D walkthroughs, flythroughs, 360° views, and more.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-600"
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
          question:
            "What are the advantages of hiring Uppteam for architectural rendering?",
          answer:
            "Uppteam’s skilled and certified architectural designers produce architectural renderings that are ideal for seeing what a project will appear after completion. Our 3D renderings allow you to make informed decisions based on the visualization, minimizing the chances of errors and helping in cost-efficiency.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-600"
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
            "How much time do you need to create 3D visualizations of an entire building?",
          answer:
            "While we can produce 3D visualizations of an entire building, it depends on the project’s complexity, size, and scope of work to commit to a specific timeframe. However, our designers keep you updated at every stage of the process.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M7 24v16M16 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 0 00-1-1H4a1 0 0 00-1 1v14a1 1 0 001 1z"
              />
            </svg>
          ),
        },
      ],
    },

    "get-started": {
      title: "Start Your Interior Project Today",
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

  // Counter Animation Effect
  useEffect(() => {
    const timers = counters.map((counter, index) => {
      let start = 0;
      const duration = 2000; // Animation duration in milliseconds
      const increment = counter.target / (duration / 16); // Approx 60fps
      const timer = setInterval(() => {
        start += increment;
        if (start >= counter.target) {
          start = counter.target;
          clearInterval(timer);
        }
        setCounters((prev) =>
          prev.map((item, i) =>
            i === index ? { ...item, number: Math.floor(start) } : item
          )
        );
      }, 16);
      return timer;
    });

    return () => timers.forEach((timer) => clearInterval(timer));
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

  const activeGradient = "linear-gradient(744deg, #FFE3A1, #FCD073 50%, #C28E23)";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="py-20 h-[600px] transition-all duration-1000 text-white flex justify-center items-center relative overflow-hidden"
        style={{ background: activeGradient }}
      >
        {/* Background Waves */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`bg-wave-${i}`}
            className="wave absolute w-[300%] h-[300%] opacity-30 left-[-50%] top-[-50%] rounded-[100%]"
            style={{
              background: activeGradient,
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + i * 5}s`,
            }}
          />
        ))}
        {/* Content */}
        <div className="relative text-center px-4 z-10" data-aos="fade-up">
          <h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[100px] font-extrabold tracking-wide mb-4 drop-shadow-2xl"
          >
            3D Visualization
          </h1>
          <div className="flex justify-center gap-12 sm:gap-12 mt-6">
            {counters.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <div className="text-[34] sm:text-[48px] regular font-bold text-white">
                  {stat.number}+
                </div>
                <p className="text-[16px] sm:text-[18px] regular text-white max-w-[250px]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
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

      {/* Tabs Navigation */}
      <motion.div
        ref={tabsRef}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`z-20 bg-green-500 backdrop-blur-xl shadow-lg transition-all duration-300 ${
          isSticky ? "fixed top-[64px] left-0 right-0 shadow-xl" : "relative"
        }`}
      >
        <div className="container flex justify-center items-start mx-auto ">
          <div className="flex overflow-x-auto scrollbar-hide py-3">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold transition-all duration-300 mx-1 text-white hover:text-green-600 hover:bg-green-100 rounded-md`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600"
                    layoutId="underline"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-24  ">
        {/* Services Section */}
        <motion.section
          ref={(ref) => setRef("services", ref)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-12 sm:py-16 scroll-mt-20"
          id="services"
          data-aos="fade-up"
        >
          <div className="flex flex-col lg:flex-row items-start gap-4  px-4 sm:px-8">
            {/* LEFT: TEXT SECTION */}
            <div className="flex-1" data-aos="fade-right">
              <h1 className="text-[40px] font-bold mb-4 text-[#0d3557] tracking-wide leading-snug">
                Discover Cutting-Edge 3D Visualisation with Offshore 365
              </h1>
              <p className="text-[18px]  text-[#0d3557] leading-relaxed">
                Offshore 365 offers multidimensional architectural visualization{" "}
                <br /> services to Architects, Interior Design firms and
                Realtors. <br /> The 3D studio provides renderings, walkthroughs
                & flythroughs <br /> in 3ds Max, Sketchup and Interactive
                walkthroughs in Unreal Engine.
              </p>
            </div>

            {/* RIGHT: FEATURES + CAROUSEL */}
            <div className="flex-1 flex flex-col gap-6" data-aos="fade-left">
              {/* Feature boxes */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, backgroundColor: "#f1f5f9" }}
                    className="flex items-start p-2 bg-white rounded-xl   hover:shadow-lg transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="bg-green-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-green-600"
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
                    <span className="text-[#0d3557] regular text-[14px]">
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
                className="relative w-full h-[150px]"
              >
                <div className="absolute bottom-0 w-full h-[140px] overflow-hidden">
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
                        className="flex flex-col items-center mx-2 py-2"
                        onClick={() => setActiveIndex(index % features.length)}
                      >
                        <div
                          className={`w-24 h-24 rounded-lg overflow-hidden mb-1 cursor-pointer ${
                            activeIndex === index % features.length
                              ? "scale-105"
                              : ""
                          }`}
                        >
                          <img
                            src={feature.image}
                            alt={feature.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-[#0d3557] regular text-[10px] text-center">
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
        <motion.section
          ref={(ref) => setRef("tools", ref)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-12 sm:py-16 scroll-mt-20 rounded-2xl px-4 sm:px-8 text-white"
          id="tools"
          data-aos="fade-up"
        >
          <div className="container max-w-4xl mx-auto flex flex-col lg:flex-row items-start gap-4">
            <div className="flex-1" data-aos="fade-left">
              <h1 className="text-[32px] sm:text-[40px] tracking-wide text-[#0d3557] text-justify font-extrabold mb-4">
                {tabData.tools.title}
              </h1>
              <p className="text-[18px] sm:text-[20px] text-left text-[#0d3557] mb-12 sm:mb-16 leading-relaxed">
                {tabData.tools.description}
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-0 justify-items-center">
                {tabData.tools.software.slice(0, 8).map((tool, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-start hover:scale-105 transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden mb-1 sm:mb-2"
                    >
                      <img
                        src={figmaLogo}
                        alt={tool.name}
                        className="w-full h-full object-contain bg-white"
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Plans Section */}
        <motion.section
          ref={(ref) => setRef("plans", ref)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 sm:py-20 mb-20 scroll-mt-20"
          id="plans"
        >
          <div className="max-w-full    ">
            <div className="text-center mb-8">
              <h1 className="text-[40px] tracking-wide text-[#0d3557] text-center  font-extrabold  mb-4">
                {tabData.plans.title}
              </h1>
              <p className="text-[20px]  text-center text-[#0d3557] mb-16 leading-relaxed">
                {tabData.plans.description}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {tabData.plans.plans.slice(0, 5).map((plan, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="group relative w-[250px] h-[200px] bg-green-600 shadow-lg rounded-2xl overflow-hidden transition-all duration-500"
                  style={{
                    border: "2px solid transparent",
                  }}
                >
                  {/* Wave Effect for Each Card with Multiple Shades of Green */}
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={`wave-${index}-${i}`}
                      className={`wave absolute w-[350px] h-[350px] opacity-50 left-0 ${
                        i === 0 ? "top-0 -mt-[70%]" : "top-[150px]"
                      } -ml-[50%] rounded-[40%]`}
                      style={{
                        background:
                          i === 0
                            ? "#013220" // Very dark green
                            : i === 1
                            ? "#057d2d" // Medium-dark green
                            : "#7CFC00", // Lime green for a bright, contrasting end
                        animationDelay: `${i * 1}s`,
                        animationDuration: `${5 + i * 2}s`,
                      }}
                    />
                  ))}

                  {/* Card Content - Centered */}
                  <div className="relative z-10 flex flex-col items-center text-center justify-center h-full  text-white px-6">
                    <h1 className="text-[20px] tracking-wider text-white font-regualr mb-2 transition-transform duration-300 group-hover:scale-110">
                      {plan.title}
                    </h1>
                    <p className="text-[14px] text-white/80 mb-4 leading-relaxed transition-transform duration-300 group-hover:scale-110">
                      {plan.description.slice(0, 60)}
                    </p>
                    <button className="w-full py-2 rounded-lg bg-white text-[#0d3557]  regular transition duration-300 hover:bg-gray-100">
                      Get started
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

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
            `}</style>
          </div>
        </motion.section>

        {/* Why Us Section */}
        <motion.section
          ref={(ref) => setRef("why-us", ref)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-12 sm:py-16 mb-20 scroll-mt-20 rounded-2xl px-4 sm:px-8 text-gray-800"
          id="why-us"
          data-aos="zoom-in"
        >
          <div className="flex flex-col items-center gap-8 md:gap-12 w-full">
            {/* Heading */}
            <div className="text-center mb-8">
              <h1 className="text-[40px] tracking-wide text-[#0d3557] text-center  font-extrabold  mb-4">
                Transform the way your organisation works
              </h1>
              <p className="text-[20px]  text-center text-[#0d3557]  leading-relaxed">
                Transform the way your organisation works
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const isActive = index === activeIndex;

                return (
                  <div
                    key={index}
                    className={`group relative bg-white rounded-3xl p-8 transition-all duration-500 transform cursor-pointer border border-gray-200 ${
                      isActive
                        ? "shadow-2xl -translate-y-2 scale-105"
                        : "hover:shadow-2xl hover:-translate-y-2"
                    }`}
                  >
                    {/* Animated gradient background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-green-400/5 via-emerald-400/5 to-teal-400/5 rounded-3xl transition-opacity duration-500 ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    />

                    {/* Glow effect */}
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl blur transition-opacity duration-500 ${
                        isActive
                          ? "opacity-20"
                          : "opacity-0 group-hover:opacity-20"
                      }`}
                    />

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="mb-6 flex justify-center">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-white transition-transform duration-300 ${
                            isActive ? "scale-110" : "group-hover:scale-110"
                          }`}
                        >
                          {benefit.title.toLowerCase().includes("eco") ||
                          benefit.title.toLowerCase().includes("green") ? (
                            <svg
                              className="w-8 h-8"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22.23C9.5,15.93 16,14 16,14C16,14 16.4,9.84 17,8M12.19,21.79C12.7,22.36 13.4,22.5 13.85,22.12C14.29,21.75 14.3,21 13.85,20.56L12,18.76L10.15,20.56C9.7,21 9.71,21.75 10.15,22.12C10.6,22.5 11.3,22.36 11.81,21.79L12.19,21.79M8.5,9.5C9.33,9.5 10,8.83 10,8C10,7.17 9.33,6.5 8.5,6.5C7.67,6.5 7,7.17 7,8C7,8.83 7.67,9.5 8.5,9.5Z" />
                            </svg>
                          ) : benefit.title
                              .toLowerCase()
                              .includes("quality") ? (
                            <svg
                              className="w-8 h-8"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
                            </svg>
                          ) : benefit.title
                              .toLowerCase()
                              .includes("support") ? (
                            <svg
                              className="w-8 h-8"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10.1V11.1C14.8,12.6 13.4,14.1 12,14.1C10.6,14.1 9.2,12.6 9.2,11.1V10.1C9.2,8.6 10.6,7 12,7M18,14.3V11.3C18,16.8 15.7,21.4 12,22.4C8.3,21.4 6,16.8 6,11.3V14.3C6,18.8 8.3,22.4 12,22.4C15.7,22.4 18,18.8 18,14.3Z" />
                            </svg>
                          ) : (
                            <svg
                              className="w-8 h-8"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z" />
                            </svg>
                          )}
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-[20px] font-bold text-[#0d3557] mb-6 text-center transition-colors duration-300 ${
                          isActive
                            ? "text-green-700"
                            : "group-hover:text-green-700"
                        }`}
                      >
                        {benefit.title}
                      </h3>

                      {/* Points */}
                      <ul className="space-y-3">
                        {benefit.points?.map((point, i) => (
                          <li
                            key={i}
                            className={`flex items-start space-x-3 transition-colors duration-300 ${
                              isActive
                                ? "text-gray-700"
                                : "text-gray-600 group-hover:text-gray-700"
                            }`}
                            style={{ animationDelay: `${i * 100}ms` }}
                          >
                            <div
                              className={`flex-shrink-0 w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mt-2 transition-transform duration-300 ${
                                isActive ? "scale-125" : "group-hover:scale-125"
                              }`}
                            />
                            <span className="text-[14px] text-[#0d3557] regular leading-relaxed">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Progress indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {benefits.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-green-500 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* Points List */}
          </div>
        </motion.section>

        {/* Get Started Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="py-20 px-4 sm:px-8 h-auto sm:h-[550px] transition-all duration-1000 text-white flex rounded-2xl justify-center items-center relative overflow-hidden"
          style={{ background: activeGradient }}
        >
          {/* Background Waves */}
          {[...Array(3)].map((_, i) => (
            <div
              key={`bg-wave-${i}`}
              className="wave absolute w-[300%] h-[300%] opacity-30 left-[-0%] top-[-0%] rounded-[100%]"
              style={{
                background: activeGradient,
                animationDelay: `${i * 2}s`,
                animationDuration: `${15 + i * 5}s`,
              }}
            />
          ))}

          {/* Content */}
          <div className="relative text-center z-10 max-w-6xl mx-auto">
            {/* Logo Image Below Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-10 flex justify-center "
            >
              <img
                src={offshoreLogo}
                alt="Offshore365 Logo"
                className="w-[200px] sm:w-[200px] md:w-[200px] lg:w-[600px] object-contain"
              />
            </motion.div>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.2 }}
              className="text-base mt-10 sm:text-lg md:text-xl lg:text-[20px] font-light max-w-2xl mx-auto text-gray-200"
            >
              Power Your Bussiness Toady with 365 Porductivity.
            </motion.p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-start mt-6 sm:mt-8">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(255, 255, 255, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSchedulingSection(true)}
                className="px-6 py-3 bg-white regular text-gray-700 rounded-xl transition-all duration-300  text-base shadow-lg"
              >
                Schedule a Meet
              </motion.button>

              <Link to="/contact">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(255, 255, 255, 0.6)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border regular border-white text-white rounded-xl hover:bg-white hover:text-black transition-all duration-300 font-semibold text-base shadow-lg"
                >
                  Contact Our Team
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Scheduling Section */}
        {showSchedulingSection && (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-12 sm:py-16 scroll-mt-20"
            id="scheduling-section"
            data-aos="fade-up"
          >
            <div className="container mx-auto px-4 sm:px-6">
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
          className="py-12 sm:py-16 scroll-mt-20 rounded-2xl px-4 sm:px-8"
          id="faq"
          data-aos="fade-up"
        >
          <div className="p-4 sm:p-8 rounded-lg">
            {/* Title */}
            <h4 className="text-[36px] sm:text-[48px] md:text-[54px] lg:text-[40px] font-extrabold text-[#0d3557] tracking-wide text-center leading-tight">
              {tabData.faq.title}
            </h4>

            {/* Subtitle */}
            <p className="text-center text-[#0d3557] text-base sm:text-lg md:text-xl lg:text-[20px] mt-2 max-w-3xl mx-auto">
              {tabData.faq.description}
            </p>

            {/* FAQ Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-12 px-2 xl:px-12 mt-8">
              {tabData.faq.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="mt-1">{faq.icon}</div>
                  <div>
                    <h4 className="text-[20px] font-bold text-[#0d3557]">
                      {faq.question}
                    </h4>
                    <p className="text-[#0d3557] text-[14px] my-2 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Architecture;
