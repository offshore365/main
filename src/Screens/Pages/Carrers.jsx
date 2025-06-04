import React, { useState, useEffect, useRef } from "react";
import { Search, MapPin, ChevronRight, ArrowRight, Upload, X, Send } from "lucide-react";
import mission from "../../assets/missin.png";

const CareersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationType, setLocationType] = useState("Location Type");

  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.AOS !== "undefined") {
      window.AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
    }
  }, []);

  const jobListings = [
    {
      title: "Architect",
      department: "Architecture",
      location: "On site - Delhi, India",
      type: "Full-time",
      description:
        "Design innovative architectural solutions and lead project development from concept to completion.",
    },
    {
      title: "BIM Architect",
      department: "Architecture",
      location: "On site - Delhi, India",
      type: "Full-time",
      description:
        "Create detailed 3D building models and coordinate multidisciplinary design using BIM technology.",
    },
    {
      title: "3D Visualiser",
      department: "Design",
      location: "On site - Delhi, India",
      type: "Full-time",
      description:
        "Transform architectural concepts into stunning photorealistic renderings and immersive visualizations.",
    },
    {
      title: "Lead - Marketing",
      department: "Marketing",
      location: "On site - Delhi, India",
      type: "Full-time",
      description:
        "Drive marketing strategy and brand growth while leading a dynamic team of marketing professionals.",
    },
  ];
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
    } else {
      alert('Please select a PDF file');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
    } else {
      alert('Please select a PDF file');
    }
  };

  const handleSubmit = () => {
    if (selectedFile) {
      alert(`Resume "${selectedFile.name}" uploaded successfully!`);
      setSelectedFile(null);
      setShowDropdown(false);
    } else {
      alert('Please select a PDF file first');
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
  };
  const containerRef = useRef(null);

  const steps = [
    {
      number: "01",
      title: "Global Talent Sourcing",
      description:
        "We search worldwide for top talent and conduct preliminary assessments.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Profile Review",
      description:
        "We evaluate candidates' skills and ensure cultural alignment.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Technical Validation",
      description:
        "Candidates undergo rigorous technical and domain-specific evaluations.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Project Simulation",
      description: "Candidates participate in real-world project scenarios.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      number: "05",
      title: "Final Integration",
      description:
        "Selected candidates receive a personalized onboarding plan.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".process-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="font-sans text-[#0d3557] bg-white">
      {/* Hero Section */}
      <section
        className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto text-center relative">
          {/* Floating Shapes */}
          <div
            className="absolute left-4 sm:left-10 md:left-20 top-20 sm:top-40 md:top-60 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-blue-200 rounded-full transform rotate-45"
            data-aos="zoom-in"
            data-aos-delay="200"
          ></div>
          <div
            className="absolute right-4 sm:right-8 md:right-16 top-8 sm:top-10 md:top-12 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 bg-red-200 rounded-full"
            data-aos="zoom-in"
            data-aos-delay="300"
          ></div>
          <div
            className="absolute left-8 sm:left-20 md:left-40 bottom-8 sm:bottom-10 md:bottom-12 w-14 sm:w-20 md:w-28 h-14 sm:h-20 md:h-28 bg-yellow-200 rounded-full transform -rotate-12"
            data-aos="zoom-in"
            data-aos-delay="400"
          ></div>
          <div
            className="absolute right-8 sm:right-20 md:right-40 bottom-12 sm:bottom-20 md:bottom-40 w-10 sm:w-16 md:w-20 h-10 sm:h-16 md:h-20 bg-green-200 rounded-full"
            data-aos="zoom-in"
            data-aos-delay="500"
          ></div>

          <div className="inline-block bg-blue-100 rounded-full px-3 py-1 mb-6 sm:mb-8">
            <span className="text-blue-500 text-sm regular">Carrer</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl tracking-wide  md:text-5xl font-bold mb-2 sm:mb-8  leading-relaxed relative z-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Ready to Build the Future with Us?
            <br />
            Empowering Innovation Together.
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-4xl mx-auto relative z-10 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Offshore 365 promotes a positive and supportive culture focused on
            strong values, communication, and teamwork. It offers continuous
            learning, access to advanced technologies, global client exposure,
            and opportunities for personal and professional growth.
          </p>

          <button
            className="bg-blue-600 regular hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-xl text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-12 sm:mb-16 relative z-10"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
           Join Us
          </button>

        
        </div>
      </section>

      {/* Mission Section */}
      <section
        className="py-12 sm:py-16 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-white via-gray-50 to-white relative"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center relative z-10">
          <div
            className="relative group overflow-hidden rounded-3xl shadow-2xl"
            data-aos="fade-right"
          >
            <img
              src={mission}
            
              className="w-[800px] h-[600px] object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div data-aos="fade-left">
            <h2             className="text-3xl sm:text-4xl tracking-wide  md:text-5xl font-bold mb-2 sm:mb-8  leading-relaxed relative z-10"            >
              Our Mission
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
              At Offshore 365, our mission is simple but powerful: enhance every
              AEC project interaction through clarity, connection, and ease. We
              help clients focus on building strong relationships by removing
              the hassle from scheduling and collaboration.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              As a driven and supportive team, we champion each other’s success
              and continuously aim to push the boundaries of productivity and
              innovation — together.
            </p>
            <div className="mt-8">
              <a
                href="#join-us"
                className="inline-block regular px-6 py-3 bg-blue-600 text-white text-base sm:text-lg rounded-xl shadow hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                Join Our Journey
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Academy Section */}
      <section
        className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div
              className="relative group rounded-3xl p-6 sm:p-8 transition-all duration-300 transform hover:scale-105 "
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-20 scale-[2.5] sm:scale-[3] md:scale-[4] group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="64"
                  width="64"
                  viewBox="0 -960 960 960"
                  fill="#4CC9F0"
                >
                  <path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z" />
                </svg>
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0d3557] mb-4">
                  Offshore 365 Culture
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-[#0d3557] leading-relaxed">
                  Offshore 365 thrives on teamwork, learning, and global
                  excellence. We value every voice, encourage innovation, and
                  prioritize client success. Our inclusive culture fosters
                  personal and professional growth while driving AEC innovation
                  every day of the year with passion, purpose, and people at its
                  heart.
                </p>
              </div>
            </div>

            <div
              className="relative group rounded-3xl p-6 sm:p-8 transition-all duration-300 transform hover:scale-105 "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-20 scale-[2.5] sm:scale-[3] md:scale-[4] group-hover:-translate-x-4 group-hover:-translate-y-4 transition-transform duration-500 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="64"
                  width="64"
                  viewBox="0 -960 960 960"
                  fill="#75FB4C"
                >
                  <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
                </svg>
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0d3557] mb-4">
                  Offshore 365 Academy
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-[#0d3557] leading-relaxed">
                  Offshore 365 Academy empowers our teams with expert-led
                  training in global design standards and client collaboration.
                  Through mentorship and hands-on learning, we develop
                  technically skilled professionals aligned with our clients’
                  visions—ready to deliver innovative, high-quality solutions on
                  a global stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Process Section */}
      <section
        className="py-12 sm:py-16 md:py-24 px-4 sm:px-6"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2             className="text-3xl sm:text-4xl tracking-wide  md:text-5xl font-bold mb-2 sm:mb-8  leading-relaxed relative z-10"            >
              Precision Talent Acquisition by Offshore 365
            </h2>
            <p className="text-sm sm:text-base md:text-lg  max-w-3xl mx-auto">
              Our comprehensive 5-step process ensures we find the perfect fit
              for both our team and your career aspirations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 overflow-x-auto">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="process-card flex-1 min-w-[200px] sm:min-w-[180px] border border-gray-200 rounded-xl p-4 sm:p-6 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="text-blue-500 font-bold text-lg sm:text-xl mb-2">
                  {step.number}
                </div>
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4 transition-colors duration-300 hover:bg-blue-200">
                  {step.icon}
                </div>
                <h3 className="text-base sm:text-lg regular text-center mb-2">
                  {step.title}
                </h3>
                <p className=" text-xs sm:text-sm text-center flex-grow">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section
        className="py-12 sm:py-16 md:py-24 px-4 sm:px-6"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="mb-12 sm:mb-16"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Careers you can grow with
            </h2>
            <p className="text-sm sm:text-base md:text-lg">
              Check out our open opportunities to see where you can make an
              impact.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {jobListings.map((job, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group border border-slate-200 flex flex-col h-full transform hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="mb-4 flex-shrink-0 text-left">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="inline-block bg-blue-100 regular text-blue-500 px-3 py-1 rounded-full text-xs sm:text-sm">
                      {job.department}
                    </span>
                    <span className="inline-block bg-green-100 regular text-green-600 px-3 py-1 rounded-full text-xs sm:text-sm">
                      {job.type}
                    </span>
                  </div>
                </div>
                <div className="mb-4 flex-grow text-left">
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {job.description}
                  </p>
                </div>
                <div className="flex items-center  mb-6 flex-shrink-0">
                  <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                  <span className="text-xs regular sm:text-sm">{job.location}</span>
                </div>
                <div className="flex justify-end">
                  <button className="bg-blue-600 regular hover:bg-blue-700 text-white text-xs sm:text-sm py-2 px-4 rounded-lg transition-all duration-300 flex items-center gap-2 group/btn transform hover:scale-110">
                    Join
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-full mx-auto">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
          {/* Only 2 background circles */}
          <div className="absolute top-4 sm:top-8 left-4 sm:left-8 w-16 sm:w-20 h-16 sm:h-20 bg-blue-300 rounded-full opacity-40"></div>
          <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 w-12 sm:w-16 h-12 sm:h-16 bg-blue-200 rounded-full opacity-40"></div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 relative z-10">
            Apply for Jobs
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center mb-8 relative z-10">
            <div className="bg-white rounded-2xl px-6 sm:px-8 py-4 shadow-lg flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <span className="text-blue-600 text-sm sm:text-lg regular">
              Career@offshore365.in
              </span>
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                <ChevronRight className="w-4 h-4 text-blue-400" />
              </div>
             
            </div>
          </div>

          <div className="max-w-3xl mx-auto relative z-10">
            <p className="text-blue-100 leading-relaxed text-sm sm:text-base md:text-lg mb-6">
              Offshore 365 welcomes all the talented and skilled Architects,
              Interior Designers, 3D Visualizers, Revit experts, and Engineers
              to partake in the rapidly growing organization with a global
              footprint. Offshore 365 values and welcomes all applicants who
              would help us in our aim of "Accelerating Growth Through
              Delivery Excellence".
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-8">
              <p className="text-white text-sm sm:text-base leading-relaxed">
                We welcome all the talented and skilled Architects, Interior
                Designers, 3D Visualizers, Revit experts, and Engineers to
                partake in the rapidly growing organization with a global
                footprint. We value and welcome all applicants who would help
                Offshore 365 in our aim of "Accelerating Growth Through
                Delivery Excellence"
              </p>
            </div>

            <div>
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                className="bg-white text-blue-600 hover:bg-blue-50 regular py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              >
                Send Your Resume
              </button>

              {/* Dropdown File Upload Section */}
              {showDropdown && (
                <div className="mt-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-2xl animate-in slide-in-from-top-2 duration-300">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-blue-800 regular text-lg">Upload Your Resume</h3>
                    <button 
                      onClick={() => setShowDropdown(false)}
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* File Upload Area */}
                  <div 
                    className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                      isDragOver 
                        ? 'border-blue-400 bg-blue-50' 
                        : selectedFile 
                          ? 'border-green-400 bg-green-50' 
                          : 'border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50'
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    {selectedFile ? (
                      <div className="space-y-4">
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <Upload className="w-6 h-6 text-green-600" />
                          </div>
                        </div>
                        <div>
                          <p className="text-green-700 regular">{selectedFile.name}</p>
                          <p className="text-gray-500 text-sm">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                        <button
                          onClick={removeFile}
                          className="text-red-500 hover:text-red-700 text-sm regular transition-colors"
                        >
                          Remove File
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="flex items-center justify-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <Upload className="w-6 h-6 text-blue-600" />
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-700 regular mb-2">
                            Drag and drop your PDF here, or click to browse
                          </p>
                          <p className="text-gray-500 text-sm">PDF files only, max 10MB</p>
                        </div>
                        <input
                          type="file"
                          accept=".pdf"
                          onChange={handleFileSelect}
                          className="hidden"
                          id="resume-upload"
                        />
                        <label
                          htmlFor="resume-upload"
                          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg regular hover:bg-blue-700 transition-colors cursor-pointer"
                        >
                          Choose File
                        </label>
                      </div>
                    )}
                  </div>

                  {/* Send Button */}
                  <div className="mt-6 flex justify-center">
                    <button
                      onClick={handleSubmit}
                      disabled={!selectedFile}
                      className={`flex items-center space-x-2 px-8 py-3 rounded-lg regular transition-all duration-300 ${
                        selectedFile
                          ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Resume</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .process-card {
          opacity: 0;
        }

        .process-card.animate-fade-in {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default CareersPage;
