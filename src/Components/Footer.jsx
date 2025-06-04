import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
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
    <footer className="relative border r-t-gray-200 text-[#0d3557] pt-12 sm:pt-16 pb-8 sm:pb-10 bg-white overflow-hidden">
      {/* Animated Circles */}
      <div className="absolute w-48 sm:w-60 h-48 sm:h-60 top-[-40px] sm:top-[-50px] right-[-40px] sm:right-[-50px] bg-blue-100 backdrop-blur-lg rounded-full z-0 animate-float-right" />
      <div className="absolute w-56 sm:w-72 h-56 sm:h-72 bottom-[-48px] sm:bottom-[-60px] left-[-48px] sm:left-[-60px] bg-blue-100 backdrop-blur-lg rounded-full z-0 animate-float-left" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10 md:gap-12">
        {/* About Us */}
        <div data-aos="fade-up">
          <img
            src={logo}
            alt="OffShore365 Logo"
            className="h-12  mb-4" // Adjust height as needed
          />
          <p className="text-sm text-[#0d3557] mb-3">
            Your global productivity partner delivering tech smart workforce
            solutions tailored for your AEC Business ensuring seamless expansion
            and efficiency.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
  <h3 className="text-xl font-bold mb-4 text-[#0d3557]">Services</h3>
  <ul className="text-sm space-y-2 text-[#0d3557]">
    <li>
      <Link to="/architecture" className="hover:text-[#256bff] transition regular">
        Architecture
      </Link>
    </li>
    <li>
      <Link to="/interior" className="hover:text-[#256bff] transition regular">
        Interior
      </Link>
    </li>
    <li>
      <Link to="/3dvisualization" className="hover:text-[#256bff] transition regular">
        3D Visualisation
      </Link>
    </li>
    <li>
      <Link to="/bim" className="hover:text-[#256bff] transition regular">
        BIM
      </Link>
    </li>
    <li>
      <Link to="/it" className="hover:text-[#256bff] transition regular">
        IT
      </Link>
    </li>
    <li>
    <Link to="/marketing" className="hover:text-[#256bff] transition regular">
        Marketing
      </Link>
    </li>
    <li>
    
      <Link to="/admin" className="hover:text-[#256bff] transition regular">
        Admin
      </Link>
    </li>
  </ul>
</div>

        {/* Quick Links */}
        {/* Quick Links */}
        <div data-aos="fade-up" data-aos-delay="150">
          <h3 className="text-xl font-bold mb-4 text-[#0d3557]">Quick Links</h3>
          <ul className="text-sm space-y-2 text-[#0d3557]">
            <li>
              <a href="/" className="hover:text-[#256bff] transition regular">
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-[#256bff] transition regular"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/careers"
                className="hover:text-[#256bff] transition regular"
              >
                Career
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-[#256bff] transition regular"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/blogs"
                className="hover:text-[#256bff] transition regular"
              >
                Blogs
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-xl font-bold mb-4 text-[#0d3557]">
            Contact Info
          </h3>
        </div>

        {/* Newsletter */}
        <div data-aos="fade-up" data-aos-delay="250">
          <h3 className="text-xl font-bold mb-4 text-[#0d3557]">Subscribe</h3>
          <p className="text-sm mb-4 text-[#0d3557]">
            Join our newsletter for updates and offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 sm:px-4 py-2 regular text-[#0d3557] bg-[#f0f5ff] rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#256bff]"
            />
            <button className="bg-[#256bff] text-white px-3 sm:px-4 py-2 rounded-r-md hover:bg-[#1e4cd6] transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="relative z-10 mt-8 sm:mt-10 md:mt-12 flex justify-center gap-4 sm:gap-5">
        {[
          {
            Icon: FaFacebookF,
            url: "https://www.facebook.com/profile.php?id=61576854336791&mibextid=LQQJ4d",
          },
          { Icon: FaXTwitter, url: "https://x.com/Offshore365_" },
          {
            Icon: FaInstagram,
            url: "https://www.instagram.com/offshore365?igsh=MWI5bGg3YjV5bWd1MQ==",
          },
          {
            Icon: FaLinkedinIn,
            url: "https://www.linkedin.com/company/offshore365/",
          },
          { Icon: FaYoutube, url: "https://www.youtube.com/@OFFSHORE_365" },
        ].map(({ Icon, url }, idx) => (
          <a
            key={idx}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center rounded-full border border-[#0d3557] text-[#0d3557] hover:bg-[#256bff] hover:text-white hover:border-[#256bff] transition duration-300"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div className="relative z-10 regular text-center mt-6 sm:mt-8 text-sm text-[#0d3557]">
        © {new Date().getFullYear()} OffShore365. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
