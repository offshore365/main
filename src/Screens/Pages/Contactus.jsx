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
        className="py-20 px-4 sm:px-8 min-h-screen transition-all duration-1000 text-white flex justify-center items-center relative overflow-hidden bg-gradient-to-r from-[#003087] to-[#006BFF]"
      >
        {[...Array(3)].map((_, i) => (
          <div
            key={`bg-wave-${i}`}
            className="wave absolute w-[300%] h-[300%] opacity-30 left-[-0%] top-[-0%] rounded-full"
            style={{
              background:
                "linear-gradient(744deg, #003087, #006BFF 60%, #E6F0FA)",
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + i * 5}s`,
            }}
          />
        ))}

        <div className="relative text-center z-10 max-w-6xl mx-auto">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[32px] sm:text-[40px] md:text-[50px] font-extrabold tracking-wide mb-4 drop-shadow-2xl leading-tight"
          >
            Let’s Get Started
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-[20px] font-light max-w-2xl mx-auto text-gray-200"
          >
            Power up your productivity with Offshore365
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 sm:mt-8">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(255, 255, 255, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-[#003087] rounded-xl transition-all duration-300 text-base shadow-lg"
            >
              Schedule a Consultation
            </motion.button>

            <Link to="/contact">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(255, 255, 255, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-white text-white rounded-xl hover:bg-white hover:text-[#003087] transition-all duration-300 regular text-base shadow-lg"
              >
                Contact Our Team
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.section>

      <Contact />

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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799160891!2d-74.25987368715491!3d40.697670063539654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"
          />
        </div>
      </section>

      <section className="py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003087] mb-4 text-center">
            More ways to reach us
          </h2>
          <p className="text-md sm:text-lg text-gray-600 mb-12 text-center">
            Need some content about joining us in a partner or career adventure!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white text-[#003087] rounded-xl p-6 shadow-lg">
              <h3 className="text-xl regular mb-2">Join our team</h3>
              <p className="text-gray-600 mb-4">
                Interested in applying for a position? View our Careers page for open positions and apply.
              </p>
              <a href="#" className="text-[#006BFF] regular flex items-center gap-2">
                Calendly careers <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="bg-white text-[#003087] rounded-xl p-6 shadow-lg">
              <h3 className="text-xl regular mb-2">Become a partner</h3>
              <p className="text-gray-600 mb-4">
                For general queries, including partnership opportunities.
              </p>
              <a href="#" className="text-[#006BFF] regular flex items-center gap-2">
                Get in touch with partners <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="bg-white text-[#003087] rounded-xl p-6 shadow-lg">
              <span className="inline-block bg-[#E6F0FA] text-[#006BFF] text-xs regular px-2.5 py-0.5 rounded-full mb-2">
                FEATURED
              </span>
              <h3 className="text-xl regular mb-2">2024 Report: The State of Meetings</h3>
              <p className="text-gray-600 mb-4">
                See the latest data on meeting culture and productivity
              </p>
              <a href="#" className="text-[#006BFF] regular flex items-center gap-2">
                Easy ahead <ArrowRight className="w-5 h-5" />
              </a>
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
