import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Facebook,
  Youtube,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Contact from "../Contact";

export default function ContactPage() {
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0) translateX(0)";
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden leading-relaxed">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="py-12 sm:py-16 lg:py-20 h-[400px] sm:h-[500px] lg:h-[600px] transition-all duration-1000 text-white flex justify-center items-center relative overflow-hidden"
        style={{
          background: "linear-gradient(90deg, #003087, #006BFF)",
        }}
      >
        {/* Background Waves */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`bg-wave-${i}`}
            className="wave absolute w-[250%] h-[250%]  left-[-0%] top-[-50%] rounded-full"
            style={{
              background: "linear-gradient(744deg, #003087, #006BFF 60%, #E6F0FA)",
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + i * 5}s`,
            }}
          />
        ))}

        {/* Foreground Content */}
        <div className="relative text-center px-4 sm:px-6 lg:px-4 z-10 max-w-6xl mx-auto" data-aos="fade-up">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] font-extrabold tracking-wide mb-3 sm:mb-4 drop-shadow-2xl leading-tight"
          >
            Let’s Get Started
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.2 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] font-light max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
          >
            Power up your productivity with Offshore 365
          </motion.p>

         
        </div>
      </motion.section>


      <Contact />
      {/* Map Section - Adelaide Office */}
      <section className="p-0 h-[400px] sm:h-[500px] relative">
        <div
          className="animate-on-scroll h-full"
          style={{
            opacity: 0,
            transform: "translateY(32px)",
            transition: "all 1s ease",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.032514960684!2d-73.98565868428388!3d40.7642099431287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fdd3899f41%3A0x94d79ae64f617c5d!2s1755%20Broadway%2C%20New%20York%2C%20NY%2010019%2C%20USA!5e0!3m2!1sen!2sin!4v1717666263274!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="New York Office Location"
          />

        </div>
      </section>
      <section className="py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0d3557] mb-4 text-center">
            More ways to reach us
          </h2>
          <p className="text-md sm:text-lg text-[#0d3557] mb-12 text-center">
            Connect with us across our global locations or explore partnership opportunities!
          </p>
<div className="flex justify-center items-center gap-6 text-[#0d3557] text-sm sm:text-base mb-12">
  <div className="flex items-center gap-2">
    <Phone className="w-4 h-4 text-[#006BFF] regular" />
    <span className="regular">+1 917 905 1135 </span>
  </div>
  <div className="flex items-center gap-2">
    <Mail className="w-4 h-4 text-[#006BFF] regular" />
    <span className="regular">contact@offshore365.in</span>
  </div>
</div>

          {/* Address Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Delhi Office */}
            <div className="bg-white text-[#0d3557] rounded-xl p-6 border border-gray-200 ">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-[#006BFF]" />
                <h3 className="text-lg font-semibold">Delhi, India</h3>
              </div>
              <p className="text-[#0d3557] text-sm leading-relaxed">
                J-129, Kirti Nagar<br />
                Delhi, 110015<br />
                India
              </p>
            </div>

            {/* Ahmedabad Office */}
            <div className="bg-white text-[#0d3557] rounded-xl p-6 border border-gray-200 ">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-[#006BFF]" />
                <h3 className="text-lg font-semibold">Ahmedabad, India</h3>
              </div>
              <p className="text-[#0d3557] text-sm leading-relaxed">
                27, Adarsh Nagar<br />
                Ahmedabad, 380019<br />
                India
              </p>
            </div>

            {/* Sydney Office */}
            <div className="bg-white text-[#0d3557] rounded-xl p-6 border border-gray-200 ">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-[#006BFF]" />
                <h3 className="text-lg font-semibold">Sydney, Australia</h3>
              </div>
              <p className="text-[#0d3557] text-sm leading-relaxed">
                Unit 514, 4 Uhrig Road<br />
                Lidcombe, NSW 2041<br />
                Australia
              </p>
            </div>

            {/* Adelaide Office */}
            <div className="bg-white text-[#0d3557] rounded-xl p-6 border border-gray-200 ">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-[#006BFF]" />
                <h3 className="text-lg font-semibold">Adelaide, Australia</h3>
              </div>
              <p className="text-[#0d3557] text-sm leading-relaxed">
                6/76 Wood Ave<br />
                Ridleyton, Adelaide 5008<br />
                South Australia
              </p>
            </div>
          </div>


        </div>
      </section>



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
    </div>
  );
}
