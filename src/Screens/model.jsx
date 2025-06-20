import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Clock, DollarSign, Layers, Users, TrendingUp } from 'lucide-react';
import card1 from "../assets/m4.png";
import card2 from "../assets/m2.png";
import card3 from "../assets/timee.png";
import card4 from "../assets/m3.png";
import card6 from "../assets/m5.png";

const Model = () => {
  const [activeSection, setActiveSection] = useState(0); // Start with first section open
  const [progress, setProgress] = useState(0);
  const timeoutRef = useRef(null);

  const sections = [
    {
      title: "Hourly Billing Model",
      description:
        "Clients are billed based on the number of hours worked by the outsourcing team. Suitable for projects with dynamic requirements and variable scopes.",
      image: card3,
      colorClass: "bg-[#E1C2C1]",
      icon: <Clock className="h-5 w-5 md:h-6 md:w-6 text-[#E1C2C1] mr-2" />,
    },
    {
      title: "Fixed Fee Model",
      description:
        "A predetermined, fixed cost is agreed upon for the entire project. Appropriate for well-defined projects with clear specifications.",
      image: card2,
      colorClass: "bg-[#FFCF72]",
      icon: <DollarSign className="h-5 w-5 md:h-6 md:w-6 text-[#FFCF72] mr-2" />,
    },
    {
      title: "Project Based Model",
      description:
        "Costs are determined based on the overall scope and milestones of the project. Ideal for projects with distinct phases and deliverables.",
      image: card4,
      colorClass: "bg-[#E2E0A0]",
      icon: <Layers className="h-5 w-5 md:h-6 md:w-6 text-[#E2E0A0] mr-2" />,
    },
    {
      title: "Dedicated Team Model",
      description:
        "The outsourcing firm provides a dedicated team of architects and professionals exclusively for the client. Suited for long-term projects requiring ongoing collaboration and support.",
      image: card1,
      colorClass: "bg-[#B2E7F1]",
      icon: <Users className="h-5 w-5 md:h-6 md:w-6 text-[#B2E7F1] mr-2" />,
    },
    {
      title: "Performance Model",
      description:
        "Payment is tied to specific project outcomes or performance metrics. Encourages the outsourcing firm to meet or exceed predefined goals.",
      image: card6,
      colorClass: "bg-[#CCB4FE]",
      icon: <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-[#CCB4FE] mr-2" />,
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSectionClick = (index) => {
    if (index === 0) {
      clearTimeout(timeoutRef.current);
      setActiveSection(0);
      return;
    }

    clearTimeout(timeoutRef.current);
    setActiveSection(index);
    setProgress(0);

    timeoutRef.current = setTimeout(() => {
      setActiveSection(0);
      setProgress(0);
    }, 12000);
  };

  useEffect(() => {
    setProgress(0);
    const timer = setTimeout(() => setProgress(100), 50);
    return () => clearTimeout(timer);
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8 sm:py-12">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12" data-aos="fade-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0d3557] mb-2 tracking-tight">
          Scalable Productivity Models
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-[#0d3557] max-w-2xl mx-auto">
          Optimized for your success
        </p>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-6 px-4 sm:px-6 md:px-8">
        {/* Accordion Panel */}
        <div className="w-full md:w-1/2 space-y-4">
          {sections.map((section, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div
                className="p-4 cursor-pointer rounded-md transition"
                onClick={() => handleSectionClick(index)}
              >
                <div className="flex items-center mb-2">
                  {section.icon}
                  <h1
                    className={`text-lg sm:text-xl md:text-2xl font-bold transition-all duration-300 ${activeSection === index ? 'text-[#0d3557]' : 'text-gray-500'}`}
                  >
                    {section.title}
                  </h1>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${activeSection === index ? 'max-h-40 opacity-100 mt-2 p-2' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-sm sm:text-base text-[#0d3557]">{section.description}</p>
                </div>
                <div className="h-0.5 bg-gray-200 w-full mt-3 rounded">
                  {activeSection === index && (
                    <div
                      className={`h-0.5 transition-all duration-[5000ms] ease-in-out rounded ${section.colorClass}`}
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </div>
              </div>

              {/* Mobile Image */}
              <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${activeSection === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="relative w-full h-48 sm:h-64 mt-4 rounded-md overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 right-3">
                    <button
                      onClick={() => {
                        const section = document.getElementById("scheduling");
                        if (section) section.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="bg-white/30 text-sm regular sm:text-base text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-md shadow-md hover:bg-white/50 transition duration-300"
                    >
                      <span className="regular">Choose Model</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Image Panel */}
        <div className="hidden md:flex md:w-1/2 flex-col items-center justify-center" data-aos="fade-left">
          {activeSection !== null && (
            <>
              <div className="relative w-full max-w-[600px] h-64 sm:h-80 md:h-96 rounded-md overflow-hidden">
                <img
                  key={sections[activeSection].image}
                  src={sections[activeSection].image}
                  alt={sections[activeSection].title}
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                  loading="lazy"
                />
                <div className="absolute bottom-4 right-4">
                  <button
                    onClick={() => {
                      const section = document.getElementById("scheduling");
                      if (section) section.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="bg-white/30 text-sm regular sm:text-base text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-md shadow-md hover:bg-white/50 transition duration-300"
                  >
                    <span className="regular">Choose Model</span>
                  </button>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm sm:text-base md:text-lg text-[#0d3557]">
                  Not sure which model is right for you?{" "}
                  <a href="#scheduling" className="text-blue-600 regular hover:text-blue-800 transition">
                    Schedule a Meet
                  </a>{" "}
                  with our experts
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Model;
