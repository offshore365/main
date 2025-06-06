import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, Users, MessageCircle } from "lucide-react";
import nileshImg from "../../assets/nilesh.png";
import shivaniImg from "../../assets/shivani.png";
import rubyImg from "../../assets/ruby.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate, useLocation } from "react-router-dom";

const AboutOffshore365 = () => {
  const [circleColor, setCircleColor] = useState("bg-blue-100");
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1200, // Slower duration for smooth effect
      easing: "ease-out",
      once: true,
      mirror: false,
    });

    // Automatically change circle color every 3 seconds
    const colors = ["bg-blue-500"];
    let colorIndex = 0;

    const colorInterval = setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length;
      setCircleColor(colors[colorIndex]);
    }, 3000);

    return () => clearInterval(colorInterval);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const items = [
    {
      title: "Vision",
      metric:
        "To be the most trusted offshore partner, delivering innovative solutions for Architecture, Interior Design, and Engineering through expertise and excellence.",
      borderColor: "border-[#B2E7F1]",       // soft blue
      textColor: "text-[#B2E7F1]",
      circleColor: "bg-[#B2E7F1]",
    },
    {
      title: "Mission",
      metric:
        "Improving the quality of every project building process by delivering cutting-edge solutions and empowering client success through innovation and excellence.",
      borderColor: "border-[#FFCF72]",       // soft yellow-orange
      textColor: "text-[#FFCF72]",
      circleColor: "bg-[#FFCF72]",
    },
    {
      title: "Core Values",
      metric:
        "Commitment to Excellence, Continuous Process Innovation, Partner in Growth, and upholding Integrity and Trust in every interaction.",
      borderColor: "border-[#CCB4FE]",       // soft purple
      textColor: "text-[#CCB4FE]",
      circleColor: "bg-[#CCB4FE]",
    },
  ];


  const leaders = [
    {
      name: "Nilesh Malhotra",
      role: "Chief Executive Officer",
      description:
        "Nilesh founded Offshore 365 with a vision to revolutionize the AEC industry through innovative offshore solutions.",
      initials: "NM",
      followers: 425,
      following: 67,
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
      image: nileshImg,
    },
    {
      name: "Ruby Malhotra",
      role: "Chief Operating Officer",
      description:
        "Ruby oversees day-to-day operations and ensures seamless project delivery across all departments.",
      initials: "RM",
      followers: 312,
      following: 48,
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
      image: shivaniImg,
    },
    {
      name: "Shivani Malhotra",
      role: "Chief Financial Officer",
      description:
        "Shivani manages financial strategy and ensures sustainable growth for the company.",
      initials: "SM",
      followers: 289,
      following: 52,
      bgColor: "bg-gradient-to-br from-teal-500 to-teal-600",
      image: rubyImg,
    },
  ];

  return (
    <div className="font-sans text-[#0d3557] text-center">
      {/* Hero Section */}
      <section
        className="py-12 min-h-screen  px-4 sm:px-6 md:px-12 lg:px-24  relative "
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div
          className={`absolute left-[-100px] top-[20%] w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] rounded-full animate-float transition-colors duration-1000 bg-[#E1C2C1] z-0`}
        ></div>
        <div className="absolute right-[-100px] bottom-[-100px] w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] bg-[#E1C2C1] rounded-full animate-float z-0"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-block bg-blue-100 rounded-full px-3 py-1 mb-6 sm:mb-8">
            <span className="text-blue-500 text-sm regular">About Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6 sm:mb-8">
            Amplifying productivity for AEC businesses worldwide.
          </h1>
          <p className="text-[20px] sm:text-lg md:text-xl mb-8 sm:mb-12 regular opacity-80 leading-relaxed">
            Offshore 365's dedicated global teams and comprehensive AEC
            solutions deliver exceptional projects, scale your operations
            seamlessly, enhance productivity, and drive sustainable growth.
          </p>
         <button
      className="bg-[#006bff] hover:bg-blue-700 text-white regular px-4 py-2 rounded-lg text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      onClick={() => {
        const currentPath = location.pathname;
        const targetPath = "/";

        // Reset scroll position immediately
        window.scrollTo(0, 0);

        if (currentPath === targetPath) {
          // Same page - just scroll to section
          const element = document.getElementById("scheduling");
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        } else {
          // Different page - navigate and scroll to section
          navigate("/#scheduling");
          setTimeout(() => {
            const element = document.getElementById("scheduling");
            if (element) {
              element.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }, 100);
        }
      }}
    >
      Schedule a meet
    </button>
          <p className="mt-24 sm:mt-12 md:mt-16 text-sm sm:text-base md:text-lg regular">
            The trusted offshore AEC partner for firms globally, from dynamic
            design studios to large-scale construction enterprises.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 "
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            Offshore 365 - One stop solution
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            Offshore 365 seamlessly extends your in-house capabilities, serving
            as your singular hub for comprehensive AEC solutions. Our expertise
            spans specialized BIM Consultancy, meticulous Design Documentation,
            and stunning 3D Visualization for Interior Design, Architecture, and
            Engineering projects.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 md:mt-20">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#E1C2C1] font-bold mb-4">
                500+
              </h2>
              <p className="text-base sm:text-lg md:text-xl">
                Projects Completed
              </p>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#B2E7F1] font-bold mb-4">
                250+
              </h2>
              <p className="text-base sm:text-lg md:text-xl">
                Satisfied Clients
              </p>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#FFCF72] font-bold mb-4">
                6+
              </h2>
              <p className="text-base sm:text-lg md:text-xl">
                Years of Excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Improving the Quality Section */}
      <section
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24  relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div
          className={`absolute left-[-100px] top-[20%] w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] rounded-full animate-float transition-colors duration-1000 bg-[#B2E7F1] z-0`}
        ></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 md:mb-20 text-center">
            Improving the quality <br /> of every project building process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="overflow-hidden relative group  rounded-xl  p-6 sm:p-8"
                style={{ minHeight: "300px" }}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                data-aos="zoom-in"
                data-aos-delay={`${400 + index * 100}`}
              >
                <div className="relative z-10 text-center">
                  <h3
                    className={`text-xl sm:text-2xl font-bold mb-4 ${item.textColor}`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed regular">
                    {item.metric}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0d3557] mb-6 leading-tight">
                Offshore 365 Infrastructure
              </h2>
              <p className="text-base sm:text-lg text-[#0d3557] leading-relaxed mb-6">
                Offshore 365 operates on a secure, redundant infrastructure with
                high-speed leased lines and no single point of failure. Our
                systems are protected by multi-layered security protocols and
                backed by on-site power generation.
              </p>
              <p className="text-base sm:text-lg text-[#0d3557] leading-relaxed">
                Physical facilities are secured round-the-clock with restricted
                access, while modern training rooms and video conferencing
                support continuous collaboration and professional development.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {
                [
                  {
                    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                    color: "text-[#F1B2B2]", // Soft Coral Red
                    title: "Office Space, Desks & Tools",
                  },
                  {
                    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                    color: "text-[#B2F1C1]", // Pastel Green
                    title: "Computer Hardware + Office Software",
                  },
                  {
                    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                    color: "text-[#B2E7F1]", // Light Blue
                    title: "Data Security",
                  },
                  {
                    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                    color: "text-[#FFCF72]", // Warm Yellow
                    title: "Payroll, Taxes & Benefits",
                  },
                  {
                    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9",
                    color: "text-[#CCB4FE]", // Light Purple
                    title: "Remote Tools, Training & Support",
                  },
                  {
                    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                    color: "text-[#F1C1E3]", // Soft Pink
                    title: "Family Health Insurance",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl p-4 sm:p-6 hover:shadow-md transition-all duration-300 text-center"
                    data-aos="zoom-in"
                    data-aos-delay={`${500 + index * 100}`}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className={`w-6 h-6 sm:w-8 sm:h-8 ${item.color}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={item.icon}
                        />
                      </svg>
                    </div>
                    <h3 className="text-sm sm:text-base regular text-[#0d3557]">
                      {item.title}
                    </h3>
                  </div>
                ))
              }

            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0d3557] mb-4">
              Meet Our Leadership Team
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#0d3557]">
              Our team is customer-obsessed, mission-oriented, and believes
              anything is possible.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl border border-gray-200 overflow-hidden max-w-sm mx-auto transform transition duration-300 ease-in-out hover:scale-105 hover:-translate-y-1"
                data-aos="zoom-in"
                data-aos-delay={`${600 + index * 100}`}
              >
                <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-4 sm:px-6 py-4">
                  <div className="flex items-center justify-center mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0d3557] mr-2">
                      {leader.name}
                    </h3>
                  </div>
                  <p className="text-[#0d3557] underline text-center text-sm sm:text-base mb-4">
                    {leader.role}
                  </p>
                  <p className="text-[#0d3557] text-sm sm:text-base text-center leading-relaxed">
                    {leader.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Section */}
      <section
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0d3557] mb-6">
              CSR at Offshore 365
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#0d3557] max-w-4xl mx-auto leading-relaxed">
              "At Offshore 365, we believe that businesses have a responsibility
              to contribute positively to society. Our CSR initiatives are
              driven by our commitment to sustainability, community engagement,
              and ethical business practices."
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div
              className="relative group rounded-3xl p-6 sm:p-10 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-20 scale-[3] sm:scale-[4] group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500 pointer-events-none">
                <svg
                  className="w-16 h-16 sm:w-24 sm:h-24 text-blue-600"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="mb-6 relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0d3557] mb-4">
                  OUR MISSION
                </h3>
              </div>
              <p className="text-base sm:text-lg text-[#0d3557] leading-relaxed relative z-10">
                “At The NMD - The Global Design Remote Partner, we believe that
                businesses have a responsibility to contribute positively to
                society. Our CSR initiatives are driven by our commitment to
                sustainability, community engagement, and ethical business
                practices.”
              </p>
            </div>
            <div
              className="relative group rounded-3xl p-6 sm:p-10 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="800"
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-20 scale-[3] sm:scale-[4] group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="64"
                  width="64"
                  viewBox="0 -960 960 960"
                  fill="#75FB4C"
                >
                  <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" />
                </svg>
              </div>
              <div className="mb-6 relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0d3557] mb-4">
                  OUR VISION
                </h3>
              </div>
              <p className="text-base sm:text-lg text-[#0d3557] leading-relaxed relative z-10">
                We envision a future where architecture and design contribute to
                a more sustainable, inclusive, and equitable society. We promote
                eco-friendly and energy-efficient design. Support
                underprivileged communities by improving their living and
                working environments. Encourage education and skill development
                in architecture and interior design.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutOffshore365;
