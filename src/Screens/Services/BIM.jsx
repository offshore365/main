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
import {
  Users,
  Lightbulb,
  Layers,
  AlertOctagon,
  Clock,
  Cloud,
} from "lucide-react";
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
        { name: "ARCHITECTURAL BIM", image: serviceImage },
        { name: "SCAN TO BIM", image: serviceImage },
        { name: "2D DRAWINGS", image: serviceImage },
        { name: "CONSTRUCTION DRAWINGS", image: serviceImage },
        { name: "SHOP DRAWINGS", image: serviceImage },
        { name: "BIM COORDINATION", image: serviceImage },
        { name: "CLASH DETECTION", image: serviceImage },
        { name: "REVIT FAMILY CREATION", image: serviceImage },
        { name: "POINT CLOUD REGISTRATION", image: serviceImage },
        { name: "SURVEY MAPPING", image: serviceImage },
        { name: "4D SCHEDULING", image: serviceImage },
        { name: "5D QUANTITIES AND COST", image: serviceImage },
       ],

    },
    tools: {
      title: "Connect with Offshore365 with the tools to already use",
      description: "Work seamlessly with offshore experts skilled in leading AEC software.",
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
          backDescription: "Billing is based on team hours, ideal for dynamic, evolving project scopes."
        },
        {
          title: "Fixed Fee ",
          description: "Set price for defined project scope.",
          backDescription: "A fixed cost is set upfront for clearly defined projects with stable requirements."
        },
        {
          title: "Project Based ",
          description: "Comprehensive pricing for entire projects.",
          backDescription: "Pricing aligns with project phases and milestones—great for phased delivery."
        },
        {
          title: "Dedicated Team ",
          description: "Full-time team for ongoing collaboration.",
          backDescription: "A team works exclusively on your project—best for long-term collaboration."
        },
        {
          title: "Performance Based",
          description: "Pricing tied to project outcomes.",
          backDescription: "Payment is based on results, motivating vendors to exceed targets."
        }
      ]
    }
    ,
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
          question: "What are BIM Outsourcing Services?",
          answer:
            "BIM outsourcing includes services like 3D modeling (LOD 100 to 400), construction docs, visualization, and simulation, done by experts like Uppteam.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          ),
        },
        {
          question: "Why outsource BIM Modeling Services?",
          answer:
            "Outsourcing saves time and cuts overhead costs. Uppteam’s expert team delivers fast, quality BIM models to boost your productivity.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          ),
        },
        {
          question: "What projects benefit from BIM outsourcing?",
          answer:
            "Industrial, residential, commercial, high-rise, prefabricated, renovation, and infrastructure projects all benefit from outsourcing BIM.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          ),
        },
        {
          question: "Do you offer 4D and 5D BIM services?",
          answer:
            "Yes, Uppteam provides both 4D and 5D BIM services to enhance project planning and cost management.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          ),
        },
        {
          question: "How secure is my data with BIM outsourcing?",
          answer:
            "We use strict access controls, regular security audits, and comply with data protection laws to keep your BIM data safe.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          ),
        },
        {
          question: "How do I start BIM outsourcing with Uppteam?",
          answer:
            "Fill out the form, and Uppteam will assign a team who'll manage your project with updates and incorporate your feedback.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
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
        {/* Background Image Overlay */}

        <div className="relative text-center px-4 z-10" data-aos="fade-up">
          <h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[100px] font-extrabold tracking-wide mb-4 drop-shadow-2xl"
          >
            BIM          </h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.2 }}
            className="text-[20px] font-light max-w-3xl mx-auto"
          >
            Offshore 365 empowers its global clientele with robust BIM solutions, consistently achieving successful outcomes on intricate projects across diverse sizes, sectors, and specialized fields.

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
        className={`z-20 bg-red-500 backdrop-blur-xl shadow-lg transition-all duration-300 ${isSticky ? "fixed top-[64px] left-0 right-0 shadow-xl" : "relative"
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
                className={`relative px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold transition-all duration-300 mx-1 text-white hover:text-red-600 hover:bg-red-100 rounded-md`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"
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
                Enhance BIM performance with
                Offshore 365
              </h1>
              <p className="text-[18px]  text-[#0d3557] leading-relaxed">
                Offshore 365 delivers end to end documentation services to <br /> a diverse range of sectors,
                supported by our global team, <br /> we empower your projects with accuracy, quality, and efficiency, <br />
                no matter the scale or complexity.
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
                    <div className="bg-red-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-red-600"
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
                    <span className="text-[#0d3557] regular text-[14px]">{feature.name}</span>
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
                    style={{ width: `${doubledFeatures.length * (imageWidth + gap)}px` }}
                  >
                    {doubledFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center mx-2 py-2"
                        onClick={() => setActiveIndex(index % features.length)}
                      >
                        <div
                          className={`w-24 h-24 rounded-lg overflow-hidden mb-1 cursor-pointer ${activeIndex === index % features.length ? "scale-105" : ""
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
                  className="group relative w-[250px] h-[200px] bg-red-600 shadow-lg rounded-2xl overflow-hidden transition-all duration-500"
                  style={{
                    border: "2px solid transparent",
                  }}
                >
                  
                  {/* Wave Effect for Each Card with Multiple Shades of Red */}
                  {["#8B0000", "#DC143C", "#FF6347"].map((color, i) => (
                    <div
                      key={`wave-${index}-${i}`}
                      className={`wave absolute w-[350px] h-[350px] opacity-50 left-0 ${i === 0 ? "top-0 -mt-[70%]" : "top-[150px]"
                        } -ml-[50%] rounded-[40%]`}
                      style={{
                        background: color,
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
          <div className="flex flex-col lg:flex-row-reverse items-start gap-8 md:gap-12">
            {/* Right side content: title, description, stats, benefits */}
            <div className="flex-1" data-aos="fade-left">

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
                {tabData["why-us"].stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="text-[34px] text-[#0d3557] font-bold mb-2">
                      {stat.number}+
                    </div>
                    <div className="text-[20px] regular text-[#0d3557] mb-2">{stat.label}</div>
                    <div className="w-full bg-red-300 rounded-full h-2.5">
                      <motion.div
                        className="bg-red-500 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 ">
                {tabData["why-us"].highlightedBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                    }}
                    className="p-4 bg-white rounded-xl shadow-lg border border-red-600/30 transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex items-start mb-2">
                      <div className="bg-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-white"
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
                      <h1 className="text-[18px]  text-red-800 tracking-wide font-semibold">
                        {benefit.title}
                      </h1>
                    </div>
                    <p className="text-[16px] text-[#0d3557] leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="flex-1 "
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              data-aos="fade-right"
            >
              <h1 className="text-[40px] font-bold mb-8 text-[#0d3557] tracking-wide leading-snug">
                Transform the way your organisation works
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {[
                  { text: "Enhanced collaboration", icon: "users" },
                  { text: "Better design insight", icon: "lightbulb" },
                  { text: "All stages of project lifecycle", icon: "layers" },
                  { text: "Clash detection & resolution", icon: "alert-octagon" },
                  { text: "Time & cost savings", icon: "clock" },
                  { text: "Cloud collaboration | BIM 360", icon: "cloud" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center text-center   bg-white  rounded-lg"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <svg
                      className="w-8 h-8 mb-4 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      {item.icon === "users" && (
                        <>
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </>
                      )}
                      {item.icon === "lightbulb" && (
                        <>
                          <path d="M9 18h6" />
                          <path d="M12 21v-3" />
                          <circle cx="12" cy="11" r="6" />
                        </>
                      )}
                      {item.icon === "layers" && (
                        <>
                          <polygon points="12 2 2 7 12 12 22 7 12 2" />
                          <polyline points="2 17 12 22 22 17" />
                          <polyline points="2 12 12 17 22 12" />
                        </>
                      )}
                      {item.icon === "alert-octagon" && (
                        <>
                          <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12" y2="16" />
                        </>
                      )}
                      {item.icon === "clock" && (
                        <>
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </>
                      )}
                      {item.icon === "cloud" && (
                        <>
                          <path d="M17.5 19a4.5 4.5 0 0 0 0-9h-.26A8 8 0 1 0 4 16.25" />
                        </>
                      )}
                    </svg>
                    <p className="text-[14px] regular text-[#0d3557]">{item.text}</p>
                  </motion.div>
                ))}
              </div>

            </motion.div>

          </div>

          {/* <div className="py-16 px-4 sm:px-6 lg:px-20">
            <div className="text-center mb-14">
              <h1 className="text-[40px] font-bold mb-8 text-[#0d3557] tracking-wide leading-snug">
                Our Expertise</h1>
              <p className="text-gray-500 mt-3 text-base max-w-xl mx-auto">
                We specialize in delivering solutions that drive real results. Here's what makes us stand out.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {tabData["why-us"].benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start text-center bg-white rounded-3xl shadow-md p-8 border border-gray-200 transform transition-all duration-300 hover:scale-105 hover:bg-red-500 hover:text-white hover:shadow-2xl"
                >
                  <div className="mb-6 p-2">
                    <div className="flex items-start justify-center w-12 h-12 border border-red-500 rounded-full bg-red-100 text-red-600 shadow-md transition-all duration-300 group-hover:bg-white group-hover:text-red-800">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-[20px] tracking-wide font-semibold mb-4 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-[16px] leading-relaxed transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div> */}
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