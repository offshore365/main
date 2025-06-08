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
import figma from "../../assets/figma.png";
import wordpress from "../../assets/wd.png";
import canva from "../../assets/canva.svg";
import vscode from "../../assets/vscode.png";


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
  { name: "Figma", image: figma },
  { name: "WordPress", image: wordpress },
  { name: "Canva", image: canva },
  { name: "VS Code", image: vscode },
];


  const tabs = [
    { id: "services", label: "Services" },
    { id: "tools", label: "Tools" },
    { id: "why-us", label: "Why Us?" },
    { id: "get-started", label: "Get Started" },
    { id: "faq", label: "FAQ" },
  ];

  const tabData = {
    services: {
      title: "Comprehensive Architechural Excellence Services",
      description:
        "We provide end-to-end Architectural Excellence solutions from concept to completion. Our team delivers innovative designs tailopurple to your specific needs and vision.",
      image: architectureHero,
      features: [
        { name: "WEB DEVELOPMENT", image: serviceImage },
        { name: "DIGITAL MARKETING", image: serviceImage },
        { name: "APP DEVELOPMENT", image: serviceImage },
        { name: "CRM / ERP", image: serviceImage },
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
      description: "Choose from a variety of plans tailopurple to your needs.",
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
          title: "purpleuced Administrative Burden",
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
            "purpleuce costs significantly compapurple to in-house hiring.",
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
          question: "What web development services do you offer?",
          answer:
            "We provide a wide range of web development services including Shopify development, WordPress development, Magento development, API development and integration, Wix development, and custom web designing.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-purple-600"
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
            "What platforms do you specialize in for e-commerce development?",
          answer:
            "We specialize in Shopify and Magento development for e-commerce solutions, ensuring a seamless online shopping experience for your customers.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-purple-600"
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
          question: "Can you help with custom web design?",
          answer:
            "Yes, we offer custom web designing services tailored to meet your specific business needs and branding requirements.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-purple-600"
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
          question: "Do you provide WordPress development services?",
          answer:
            "Absolutely! We offer comprehensive WordPress development services, from theme customization to plugin development and site maintenance.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-purple-600"
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
            "What is included in your API development and integration services?",
          answer:
            "Our API development and integration services include creating custom APIs, integrating third-party APIs, and ensuring seamless data flow between different software systems.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-purple-600"
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
          question: "How do you approach custom web designing projects?",
          answer:
            "We start with a thorough understanding of your business goals and target audience, followed by creating a unique design that aligns with your brand identity and delivers an exceptional user experience.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-purple-600"
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

  const activeGradient = "linear-gradient(744deg, #E6D9FF, #CCB4FE 50%, #8F6FFF)";

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
            IT
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.2 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] font-light max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
          >
            All in One Digital Services
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
        className={`z-20 bg-[#8F6FFF] backdrop-blur-xl shadow-lg transition-all duration-300 ${isSticky ? "fixed top-[64px] left-0 right-0 shadow-xl" : "relative"
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
                    ? "bg-[#CCB4FE] text-[#8F6FFF] font-semibold"
                    : "text-white hover:bg-[#CCB4FE] hover:text-[#8F6FFF]"
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
          className="py-8 sm:py-12 mb-20 lg:py-16  scroll-mt-20"
          id="services"
          data-aos="fade-up"
        >
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* LEFT: TEXT SECTION */}
            <div className="flex-1 w-full lg:w-auto" data-aos="fade-right">
              <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold mb-3 lg:mb-2 text-[#0d3557] tracking-wide leading-tight lg:leading-snug">
                Transform Your Brand With Offshore 365
              </h1>
              <p className="text-sm sm:text-base lg:text-[18px] text-[#0d3557] leading-relaxed">
                we help you transform your brand by providing customized marketing and development solutions tailored specifically to your business needs.
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
                    <div className="bg-[#CCB4FE] rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-[#8F6FFF]"
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


            </div>
          </div>
        </motion.section>

        {/* Tools Section */}
        <section
          ref={(ref) => setRef("tools", ref)}
          className="py-8 sm:py-12 lg:py-16 scroll-mt-20 mb-20 rounded-2xl px-4 sm:px-6 lg:px-8 text-white"
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
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4  justify-items-center">
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
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>




        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="py-16 mb-20 px-6 mb-20 sm:px-12 bg-white text-[#3c2063] scroll-mt-20"
          id="why-us"
        >
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start gap-12">
            {/* Left Side */}
            <div className="w-full lg:w-1/2 space-y-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] text-[#0d3557] font-extrabold mb-3 sm:mb-4 lg:mb-2 leading-tight">
                Grow your business with Offshore 365
              </h1>

              <div className="space-y-4">
                {[
                  "Experience & Expertise",
                  "Customization",
                  "Affordable Pricing",
                  "Proven Track Record",
                  "Excellent Customer Support",
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center  rounded-xl   transition-all duration-300"
                  >
                    <div className="bg-[#CCB4FE] regular text-[12px] text-[#8F6FFF] font-bold w-10 h-10 flex items-center justify-center rounded-full mr-4">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <span className="text-[#0d3557] regular text-sm sm:text-[14px] leading-relaxed">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="w-full lg:w-1/2 space-y-6">
              <p className="text-sm sm:text-base lg:text-[18px] text-[#0d3557] mb-8 leading-relaxed">
                Our CRM and ERP development services combine years of expertise
                with a commitment to building trusted, customized solutions that
                drive your business’ success.
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    text: "Customized Solutions",
                    icon: (
                      <svg
                        className="w-8 h-8 text-[#8F6FFF] "
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m0 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                        />
                      </svg>
                    ),
                  },
                  {
                    text: "Scalable Architecture",
                    icon: (
                      <svg
                        className="w-8 h-8 text-[#8F6FFF] "
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.937 3.45c.318.375.49.84.49 1.35v.75H19.5a3 3 0 00-3 3v6.75a3 3 0 003 3h1.5a3 3 0 003-3v-6.75a3 3 0 00-3-3H5.25z"
                        />
                      </svg>
                    ),
                  },
                  {
                    text: "Integration Expertise",
                    icon: (
                      <svg
                        className="w-8 h-8 text-[#8F6FFF] "
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                      </svg>
                    ),
                  },
                  {
                    text: "User-Centric Design",
                    icon: (
                      <svg
                        className="w-8 h-8 text-[#8F6FFF] "
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                        />
                      </svg>
                    ),
                  },
                ].map((benefit, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="flex flex-col items-center text-center gap-2 backdrop-blur-md rounded-lg px-4 py-5 hover:shadow-md cursor-pointer"
                  >
                    {benefit.icon}
                    <span className="text-[#0d3557] regular text-sm sm:text-[14px] leading-relaxed">
                      {benefit.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0d3557] text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-[#1a4475] transition-colors duration-300"
              >
                Book A Quote
              </motion.button> */}
            </div>
          </div>
        </motion.section>

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
                          <div className="mt-1 flex-shrink-0 text-[#8F6FFF]">{faq.icon}</div>
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
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-[#8F6FFF] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-[#0d3557]"
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
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-[#8F6FFF] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-[#0d3557]"
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
      scrollbar-color: #8F6FFF transparent;
    }

    .overflow-x-auto::-webkit-scrollbar {
      height: 6px;
    }

    .overflow-x-auto::-webkit-scrollbar-track {
      background: transparent;
    }

    .overflow-x-auto::-webkit-scrollbar-thumb {
      background-color: #8F6FFF;
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
