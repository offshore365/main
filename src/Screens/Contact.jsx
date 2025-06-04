"use client";

import { useState, useEffect } from "react";
import logo from '../assets/logo.png'; // Adjust path based on file structure

function CountUp({ target, duration = 2000, delay = 0, className = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    let end = parseInt(target);
    if (end === 0) return;

    let increment = end / (duration / 50); // Update every 50ms
    let current = start;
    let timer;

    const startCounting = () => {
      timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 50);
    };

    const delayTimeout = setTimeout(startCounting, delay);

    return () => {
      clearInterval(timer);
      clearTimeout(delayTimeout);
    };
  }, [target, duration, delay]);

  return <div className={className}>{count}+</div>;
}

export default function ContactPage() {
  const [circleColor, setCircleColor] = useState("bg-blue-500");

  useEffect(() => {
    const colors = ["bg-blue-500"];
    let colorIndex = 0;

    const colorInterval = setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length;
      setCircleColor(colors[colorIndex]);
    }, 3000);

    return () => clearInterval(colorInterval);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    teamSize: "",
    usage: "",
    services: "",
    message: "",
  });

  const [showToast, setShowToast] = useState(false);

  const teamSizes = [
    "1-10 users",
    "11-25 users",
    "26-50 users",
    "51-100 users",
    "101-500 users",
    "500+ users",
  ];

  const services = [
    "Architecture",
    "Interior",
    "BIM",
    "3D Visualization",
    "IT",
    "Marketing",
    "Admin",
  ];

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8556/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          teamSize: "",
          usage: "",
          services: "",
          message: "",
        });
      } else {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      alert('Failed to submit form. Please try again.');
    }
  };

  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 sm:py-12 md:px-8 lg:px-16 bg-white relative overflow-hidden">
      {/* Animated Background Circle */}
      <div
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full animate-float transition-colors duration-1000 ${circleColor} z-0 opacity-50`}
      ></div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-lg shadow-lg z-50 transition-all duration-300">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium text-sm sm:text-base">
              Message sent successfully!
            </span>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Form Section */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 px-6 py-6 sm:px-8 sm:py-8 relative z-20">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0d3557] mb-2">
                Let's Chat
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-[#0d3557]">
                An Offshore 365 expert will reach out to discuss your needs.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {/* Name Fields */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    className="w-full regular  h-10 sm:h-12 px-3 sm:px-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:border-gray-400 hover:shadow-md group-hover:shadow-lg bg-white/80 backdrop-blur-sm text-sm sm:text-base"
                    required
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    className="w-full regular h-10 sm:h-12 px-3 sm:px-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:border-gray-400 hover:shadow-md group-hover:shadow-lg bg-white/80 backdrop-blur-sm text-sm sm:text-base"
                    required
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Email and Team Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative group">
                  <input
                    type="email"
                    placeholder="Work Email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="w-full regular h-10 sm:h-12 px-3 sm:px-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:border-gray-400 hover:shadow-md group-hover:shadow-lg bg-white/80 backdrop-blur-sm text-sm sm:text-base"
                    required
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                <div className="relative group">
                  <select
                    value={formData.teamSize}
                    onChange={(e) => handleChange("teamSize", e.target.value)}
                    className="w-full regular h-10 sm:h-12 px-3 sm:px-4 pr-8 sm:pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 appearance-none bg-white/80 backdrop-blur-sm text-[#0d3557] hover:border-gray-400 hover:shadow-md cursor-pointer text-sm sm:text-base"
                    required
                  >
                    <option value="" disabled className="text-gray-400">
                      Team Size
                    </option>
                    {teamSizes.map((size) => (
                      <option key={size} value={size} className="text-[#0d3557]">
                        {size}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:pr-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#0d3557] transition-transform duration-200 group-hover:scale-110"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Services Dropdown */}
              <div className="relative group">
                <select
                  value={formData.services}
                  onChange={(e) => handleChange("services", e.target.value)}
                  className="w-full regular h-10 sm:h-12 px-3 sm:px-4 pr-8 sm:pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 appearance-none bg-white/80 backdrop-blur-sm text-[#0d3557] hover:border-gray-400 hover:shadow-md cursor-pointer text-sm sm:text-base"
                  required
                >
                  <option value="" disabled className="text-gray-400">
                    How do you plan on using Offshore 365?
                  </option>
                  {services.map((service) => (
                    <option key={service} value={service} className="text-[#0d3557]">
                      {service}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:pr-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#0d3557] transition-transform duration-200 group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                    </svg>
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Message */}
              <div className="relative group">
                <textarea
                  placeholder="How can we help you? Please describe your project requirements..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="w-full regular min-h-[100px] sm:min-h-[120px] px-3 sm:px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 resize-none hover:border-gray-400 hover:shadow-md group-hover:shadow-lg bg-white/80 backdrop-blur-sm text-sm sm:text-base"
                  required
                />
                <div className="absolute  inset-0 rounded-xl bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full h-10 sm:h-12 bg-blue-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 relative overflow-hidden group text-sm sm:text-base"
                >
                  <span className="relative z-10">Submit Request</span>
                </button>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="lg:pl-8">
            <div className="mb-4 sm:mb-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0d3557] mb-2">
                Meet with our Offshore 365 experts
              </h1>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="border-b-2 border-yellow-500 pb-3 sm:pb-4">
                <CountUp
                  target={500}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500 mb-2"
                  delay={500}
                />
                <div className="text-yellow-500 regular text-sm sm:text-base md:text-lg">
                  projects completed globally
                </div>
              </div>

              <div className="border-b-2 border-blue-500 pb-3 sm:pb-4">
                <CountUp
                  target={150}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500 mb-2"
                  delay={600}
                />
                <div className="text-blue-500 regular text-sm sm:text-base md:text-lg">
                  AEC firms partnered
                </div>
              </div>

              <div className="border-b-2 border-red-500 pb-3 sm:pb-4">
                <CountUp
                  target={25}
                  className="text-3xl sm:text-4xl  md:text-5xl font-bold text-red-500 mb-2"
                  delay={700}
                />
                <div className="text-red-500 regular text-sm sm:text-base md:text-lg">
                  countries with active engagements
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(-50%);
          }
          50% {
            transform: translateY(calc(-50% - 15px));
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        /* Custom scrollbar for mobile */
        @media (max-width: 768px) {
          ::-webkit-scrollbar {
            width: 4px;
          }
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
          }
          ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
        }
      `}</style>
    </div>
  );
}