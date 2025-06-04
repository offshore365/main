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
        {/* Background Image Overlay */}

        <div className="relative text-center px-4 z-10" data-aos="fade-up">
          <h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[100px] font-extrabold tracking-wide mb-4 drop-shadow-2xl"
          >
            IT{" "}
          </h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.2 }}
            className="text-[34px] regular max-w-3xl mx-auto"
          >
            ALL-IN-ONE DIGITAL SERVICES
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

      {/* Tabs Navigation */}
      <motion.div
        ref={tabsRef}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`z-20 bg-purple-500 backdrop-blur-xl shadow-lg transition-all duration-300 ${
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
                className={`relative px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold transition-all duration-300 mx-1 text-white hover:text-purple-600 hover:bg-purple-100 rounded-md`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600"
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
                Transform Your Brand With Offshore365
              </h1>
              <p className="text-[18px]  text-[#0d3557] leading-relaxed">
                we help you transform your brand by providing customized
                marketing <br /> and development solutions tailored specifically{" "}
                <br /> to your business needs.
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
                    <div className="bg-purple-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-purple-600"
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
              <h2 className="text-[34px] font-bold tracking-wide text-[#0d3557] leading-snug">
                Transform the way your organisation works
              </h2>

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
                    <div className="bg-purple-800 regular text-[12px] text-white font-bold w-10 h-10 flex items-center justify-center rounded-full mr-4">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <div className="text-purple-900 regular text-base tracking-wide">
                      {item}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="w-full lg:w-1/2 space-y-6">
              <p className="text-[#0d3557] text-[18px] leading-relaxed">
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
                        className="w-8 h-8 text-purple-900"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9.75 3L8.25 21M15.75 3L14.25 21M3 9.75L21 8.25M3 15.75L21 14.25" />
                      </svg>
                    ),
                  },
                  {
                    text: "Scalable Architecture",
                    icon: (
                      <svg
                        className="w-8 h-8 text-purple-900"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4 6h16M4 12h16M4 18h7" />
                      </svg>
                    ),
                  },
                  {
                    text: "Integration Expertise",
                    icon: (
                      <svg
                        className="w-8 h-8 text-purple-900"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 8v8m0 0l-4-4m4 4l4-4M4 4h16v16H4z" />
                      </svg>
                    ),
                  },
                  {
                    text: "User-Centric Design",
                    icon: (
                      <svg
                        className="w-8 h-8 text-purple-900"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM4 20c0-4 4-6 8-6s8 2 8 6" />
                      </svg>
                    ),
                  },
                ].map((benefit, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="flex flex-col items-center text-center gap-2  backdrop-blur-md rounded-lg px-4 py-5  hover:shadow-md cursor-pointer"
                  >
                    {benefit.icon}
                    <p className="text-purple-900 font-medium text-sm">
                      {benefit.text}
                    </p>
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
