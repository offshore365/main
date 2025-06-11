import React, { useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/logo.png"; // Import the logo

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className="relative border-t border-gray-200 text-[#0d3557] pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-8 lg:pb-10 bg-white overflow-hidden">
      {/* Animated Circles */}
      <div className="absolute w-32 sm:w-48 lg:w-60 h-32 sm:h-48 lg:h-60 top-[-20px] sm:top-[-40px] lg:top-[-50px] right-[-20px] sm:right-[-40px] lg:right-[-50px] bg-[#E1C2C1] backdrop-blur-lg rounded-full z-0 animate-float-right" />
      <div className="absolute w-40 sm:w-56 lg:w-72 h-40 sm:h-56 lg:h-72 bottom-[-24px] sm:bottom-[-48px] lg:bottom-[-60px] left-[-24px] sm:left-[-48px] lg:left-[-60px]  bg-[#B2E7F1] backdrop-blur-lg rounded-full z-0 animate-float-left" />

      <div className="absolute inset-0 z-0" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          {/* About Us */}
          <div className="sm:col-span-2 lg:col-span-1" data-aos="fade-up">
            <img src={logo} alt="OffShore365 Logo" className="h-10 sm:h-12 mb-3 sm:mb-4" />
            <p className="text-xs sm:text-sm text-[#0d3557] mb-3 leading-relaxed text-justify">
              Your global productivity partner delivering tech smart workforce solutions tailored for your AEC Business ensuring seamless expansion and efficiency.
            </p>
          </div>

          {/* Services */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#0d3557]">Services</h3>
            <ul className="text-xs sm:text-sm space-y-1.5 sm:space-y-2 text-[#0d3557]">
              <li>
                <a href="/architecture" className="hover:text-[#256bff] transition regular">Architecture</a>
              </li>
              <li>
                <a href="/interior" className="hover:text-[#256bff] transition regular">Interior</a>
              </li>
              <li>
                <a href="/3dvisualization" className="hover:text-[#256bff] transition regular">3D Visualisation</a>
              </li>
              <li>
                <a href="/bim" className="hover:text-[#256bff] transition regular">BIM</a>
              </li>
              <li>
                <a href="/it" className="hover:text-[#256bff] transition regular">IT</a>
              </li>
              <li>
                <a href="/marketing" className="hover:text-[#256bff] transition regular">Marketing</a>
              </li>
              <li>
                <a href="/admin" className="hover:text-[#256bff] transition regular">Admin</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="150">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#0d3557]">Quick Links</h3>
            <ul className="text-xs sm:text-sm space-y-1.5 sm:space-y-2 text-[#0d3557]">
              <li><a href="/" className="hover:text-[#256bff] transition regular">Home</a></li>
              <li><a href="/about" className="hover:text-[#256bff] transition regular">About Us</a></li>
              <li><a href="/careers" className="hover:text-[#256bff] transition regular">Career</a></li>
              <li><a href="/contact" className="hover:text-[#256bff] transition regular">Contact Us</a></li>
              <li><a href="/blogs" className="hover:text-[#256bff] transition regular">Blogs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#0d3557]">Contact Info</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2">
                <a href="tel:+13469109009" className="text-xs sm:text-sm text-[#0d3557] hover:text-[#256bff] transition regular">
               +1 917 905 1135 
                </a>
              </div>
              <div className="flex items-start gap-2">
                <div className="text-xs sm:text-sm text-[#0d3557] leading-relaxed">
                  <div className="regular">1755 Broadway

                  </div>
                  <div className="regular">FRNT 3 #1165</div>
                  <div className="regular">New York, NY 10019
                  </div>

                  <div className="regular">United States</div>

                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div data-aos="fade-up" data-aos-delay="250">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#0d3557]">Subscribe</h3>
            <p className="text-xs sm:text-sm mb-3 sm:mb-4 text-[#0d3557]">
              Join our newsletter for updates and offers.
            </p>
            <div className="flex flex-col sm:flex-row ">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-xs sm:text-sm regular text-[#0d3557] bg-[#f0f5ff] rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-[#256bff]"
              />
              <button className="bg-[#256bff] text-white px-3 py-2 text-xs sm:text-sm rounded-md sm:rounded-l-none sm:rounded-r-md hover:bg-[#1e4cd6] transition whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-6 sm:mt-8 lg:mt-12 flex justify-center gap-3 sm:gap-4 lg:gap-5">
          {[
            { Icon: FaFacebookF, url: "https://www.facebook.com/profile.php?id=61576854336791&mibextid=LQQJ4d" },
            { Icon: FaXTwitter, url: "https://x.com/Offshore365_" },
            { Icon: FaInstagram, url: "https://www.instagram.com/offshore365?igsh=MWI5bGg3YjV5bWd1MQ==" },
            { Icon: FaLinkedinIn, url: "https://www.linkedin.com/company/offshore365/" },
            { Icon: FaYoutube, url: "https://www.youtube.com/@OFFSHORE_365" },
          ].map(({ Icon, url }, idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10 flex items-center justify-center rounded-full border border-[#0d3557] text-[#0d3557] hover:bg-[#B2E7F1] hover:text-white hover:border-[#B2E7F1] transition duration-300"
            >
              <Icon size={14} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
            </a>
          ))}
        </div>

        <div className="regular text-center mt-4 sm:mt-6 lg:mt-8 text-xs sm:text-sm text-[#0d3557] border-t border-gray-200 pt-4 sm:pt-6">
          © {new Date().getFullYear()} OffShore365. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
