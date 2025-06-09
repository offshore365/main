import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Users,
  Mail,
  Briefcase,
  FileText,
  Home,
  Zap,
  Award,
  Calendar,
  Settings,
  Palette,
  Building,
  Monitor,
  Code,
  TrendingUp,
  Shield,
  GanttChart,
  NotebookPen,
  ClipboardList,
  Newspaper,
  PenLine,
  MessageSquareText
} from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [moreToggle, setMoreToggle] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Define service pages where navbar should NOT be sticky
  const servicePages = [
    '/architecture',
    '/interior',
    '/bim',
    '/3dvisualization',
    '/it',
    '/marketing',
    '/admin'
  ];

  // Check if current page is a service page
  const isServicePage = servicePages.includes(location.pathname);

  // Define tabs for each navigation link
  const navLinksWithTabs = [
    {
      label: "Architecture",
      href: "/architecture",
      activeColor: "bg-[#2C3E47] text-white",
      hoverColor: "hover:bg-[#E3E8EA] hover:text-[#2C3E47]",
      tabs: [
        { id: "services", label: "Services", icon: Settings }, // or GanttChart
        { id: "tools", label: "Tools", icon: Zap },
        { id: "plans", label: "Plans", icon: NotebookPen },    // or ClipboardList
        { id: "why-us", label: "Why Us?", icon: Award },
        { id: "get-started", label: "Get Started", icon: Calendar },
        { id: "faq", label: "FAQ", icon: FileText },
      ]
    },
    {
      label: "Interior",
      href: "/interior",
      activeColor: "bg-[#A66A6C] text-white",
      hoverColor: "hover:bg-[#F0E6E6] hover:text-[#A66A6C]",
      tabs: [
        { id: "services", label: "Services", icon: Home },
        { id: "tools", label: "Tools", icon: Zap },
        { id: "plans", label: "Plans", icon: Briefcase },
        { id: "why-us", label: "Why Us?", icon: Award },
        { id: "get-started", label: "Get Started", icon: Calendar },
        { id: "faq", label: "FAQ", icon: FileText },
      ]
    },
    {
      label: "BIM",
      href: "/bim",
      activeColor: "bg-[#C28E23] text-white",
      hoverColor: "hover:bg-[#F5EBD5] hover:text-[#C28E23]",
      tabs: [
        { id: "services", label: "Services", icon: Home },
        { id: "tools", label: "Tools", icon: Zap },
        { id: "plans", label: "Plans", icon: Briefcase },
        { id: "why-us", label: "Why Us?", icon: Award },
        { id: "get-started", label: "Get Started", icon: Calendar },
        { id: "faq", label: "FAQ", icon: FileText },
      ]
    },
    {
      label: "3D Visualization",
      href: "/3dvisualization",
      activeColor: "bg-[#A6A65F] text-white",
      hoverColor: "hover:bg-[#F4F4E3] hover:text-[#A6A65F]",
      tabs: [
        { id: "services", label: "Services", icon: Home },
        { id: "tools", label: "Tools", icon: Zap },
        { id: "plans", label: "Plans", icon: Briefcase },
        { id: "why-us", label: "Why Us?", icon: Award },
        { id: "get-started", label: "Get Started", icon: Calendar },
        { id: "faq", label: "FAQ", icon: FileText },
      ]
    },
    {
      label: "IT",
      href: "/it",
      activeColor: "bg-[#8F6FFF] text-white",
      hoverColor: "hover:bg-[#ECE9FF] hover:text-[#8F6FFF]",
      tabs: [
        { id: "services", label: "Services", icon: Home },
        { id: "tools", label: "Tools", icon: Zap },
        { id: "why-us", label: "Why Us?", icon: Award },
        { id: "get-started", label: "Get Started", icon: Calendar },
        { id: "faq", label: "FAQ", icon: FileText },
      ]
    },
    {
      label: "Marketing",
      href: "/marketing",
      activeColor: "bg-[#3A8CA1] text-white",
      hoverColor: "hover:bg-[#E1EFF3] hover:text-[#3A8CA1]",
      tabs: [
        { id: "services", label: "Services", icon: Home },
        { id: "tools", label: "Tools", icon: Zap },
        { id: "why-us", label: "Why Us?", icon: Award },
        { id: "get-started", label: "Get Started", icon: Calendar },
        { id: "faq", label: "FAQ", icon: FileText },
      ]
    },
    {
      label: "Admin",
      href: "/admin",
      activeColor: "bg-[#8F8A75] text-white",
      hoverColor: "hover:bg-[#EFEDE6] hover:text-[#8F8A75]",
      tabs: [
        { id: "services", label: "Services", icon: Home },
        { id: "why-us", label: "Why Us?", icon: Award },
        { id: "get-started", label: "Get Started", icon: Calendar },
        { id: "faq", label: "FAQ", icon: FileText },
      ]
    },
  ];

  const moreLinks = [
    { label: "About Us", href: "/about", icon: Users },
    { label: "Careers", href: "/careers", icon: Briefcase },
    { label: "Blogs", href: "/blogs", icon: Newspaper }, // changed from FileText
    { label: "Contact", href: "/contact", icon: Mail },
  ];


  // Function to restore scroll position to top for new page loads
  const resetScrollPosition = () => {
    window.scrollTo(0, 0);
  };

  const handleDropdownToggle = (index) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(index);
  };

  const closeDropdowns = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
      setMoreToggle(false);
    }, 200);
    setDropdownTimeout(timeout);
  };

  const handleMoreToggle = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setMoreToggle(true);
  };

  const handleMoreLeave = () => {
    const timeout = setTimeout(() => {
      setMoreToggle(false);
    }, 200);
    setDropdownTimeout(timeout);
  };

  // Mobile dropdown toggle
  const handleMobileDropdownToggle = (index) => {
    setMobileActiveDropdown(mobileActiveDropdown === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown-container') && !e.target.closest('.more-toggle')) {
        if (dropdownTimeout) {
          clearTimeout(dropdownTimeout);
        }
        closeDropdowns();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  // Updated handleLinkClick to reset scroll position
  const handleLinkClick = (href) => {
    resetScrollPosition();
    navigate(href);
    closeDropdowns();
  };

  // Updated handleTabClick for immediate scroll reset
  const handleTabClick = (navHref, tabId) => {
    const currentPath = location.pathname;
    const targetPath = navHref;

    if (currentPath === targetPath) {
      // Same page - just scroll to section
      const element = document.getElementById(tabId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // Different page - reset scroll position and navigate
      resetScrollPosition();
      navigate(`${navHref}#${tabId}`);
      // After navigation, scroll to the specific section
      setTimeout(() => {
        const element = document.getElementById(tabId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
    closeDropdowns();
  };

  // Check if current path matches the nav link
  const isActiveLink = (href) => {
    return location.pathname === href;
  };

  // Custom SVG Menu Icon with white circle and blue border
  const CustomMenuIcon = ({ isOpen = false }) => (
    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white border-2 border-blue-600 shadow-sm hover:shadow-md transition-all duration-200 group">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-all duration-300 ${isOpen ? 'rotate-90' : ''}`}
      >
        <path
          d="M2 4.5h14M2 9h14M2 13.5h14"
          stroke="#2563eb"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:stroke-blue-700 transition-colors duration-200"
        />
        <circle cx="1.5" cy="4.5" r="0.75" fill="#2563eb" className="group-hover:fill-blue-700 transition-colors duration-200" />
        <circle cx="1.5" cy="9" r="0.75" fill="#2563eb" className="group-hover:fill-blue-700 transition-colors duration-200" />
        <circle cx="1.5" cy="13.5" r="0.75" fill="#2563eb" className="group-hover:fill-blue-700 transition-colors duration-200" />
      </svg>
    </div>
  );

  // Alternative elegant menu icon design
  const ElegantMenuIcon = ({ isOpen = false }) => (
    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white border-2 border-blue-600 shadow-sm hover:shadow-md transition-all duration-200 group hover:border-blue-700">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}
      >
        <path
          d="M3 5h14M3 10h10M3 15h14"
          stroke="#2563eb"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:stroke-blue-700 transition-colors duration-200"
        />
      </svg>
    </div>
  );

  return (
    <header className={`${isServicePage ? 'relative' : 'sticky top-0'} z-50 w-full bg-white border-b border-gray-100 shadow-sm`}>
      <nav className="max-w-7xl mx-auto sm:px-0 px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div
              className="flex items-center cursor-pointer transform transition-all duration-200 hover:scale-100"
              onClick={() => handleLinkClick('/')}
            >
              <img
                src={logo}
                alt="OffShore365 Logo"
                className="h-12 w-auto"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navLinksWithTabs.map((link, index) => {
                const isActive = isActiveLink(link.href);
                return (
                  <div
                    key={index}
                    className="relative dropdown-container"
                    onMouseEnter={() => handleDropdownToggle(index)}
                    onMouseLeave={closeDropdowns}
                  >
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className={`flex items-center px-3 py-2 text-sm regular transition-all duration-200 rounded-lg transform hover:scale-105 ${isActive
                        ? link.activeColor
                        : `text-gray-700 ${link.hoverColor} hover:bg-gray-50`
                        }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform duration-300 ${activeDropdown === index ? 'rotate-180' : ''
                          }`}
                      />
                    </button>
                    {activeDropdown === index && (
                      <div className="absolute left-0 mt-[14px] w-80 bg-white rounded-br-2xl rounded-bl-2xl shadow-2xl border border-gray-100 z-50 transform animate-in fade-in zoom-in duration-200">
                        <div className="p-3">
                          <div className={`grid gap-2 ${link.tabs.length <= 4 ? 'grid-cols-2' : 'grid-cols-2'}`}>
                            {link.tabs.map((tab) => {
                              const IconComponent = tab.icon;
                              return (
                                <button
                                  key={tab.id}
                                  onClick={() => handleTabClick(link.href, tab.id)}
                                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 transform hover:scale-[1.02] text-left"
                                >
                                  <IconComponent size={18} className="text-blue-600" />
                                  <span className="regular text-gray-900 text-sm">{tab.label}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4 regular">
            <button
              onClick={() => handleTabClick('/', 'scheduling')}
              className="bg-blue-600 hover:bg-blue-700 regular text-white px-4 py-2 rounded-lg text-sm regular transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
            >
              <span className="regular">Schedule a Meet</span>
            </button>
            <div
              className="relative more-toggle"
              onMouseEnter={handleMoreToggle}
              onMouseLeave={handleMoreLeave}
            >
              <button className="transition-all duration-300 transform hover:scale-110">
                <ElegantMenuIcon isOpen={moreToggle} />
              </button>
              {moreToggle && (
                <div className="absolute right-0 mt-[13px] w-64 bg-white rounded-br-2xl rounded-bl-2xl shadow-2xl border border-gray-100 z-50 transform animate-in fade-in zoom-in duration-200">
                  <div className="p-4">
                    <div className="space-y-2">
                      {moreLinks.map((link, idx) => {
                        const IconComponent = link.icon;
                        return (
                          <button
                            key={idx}
                            onClick={() => handleLinkClick(link.href)}
                            className="flex items-center space-x-3 w-full p-3 text-left rounded-xl hover:bg-gray-50 transition-all duration-200 transform hover:scale-[1.02]"
                          >
                            <IconComponent size={18} className="text-blue-600" />
                            <span className="text-gray-700 regular text-sm">{link.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="transition-all duration-200 transform hover:scale-110"
            >
              {mobileOpen ? (
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-50 border-2 border-red-200 hover:border-red-300 transition-all duration-200">
                  <X size={20} className="text-red-600" />
                </div>
              ) : (
                <CustomMenuIcon />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transform animate-in fade-in duration-300"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-72 bg-white z-50 lg:hidden transform animate-in slide-in-from-right duration-300 shadow-2xl overflow-y-auto">
            <div className="p-4">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <a href="/">
                    <img
                      src={logo}
                      alt="OffShore365 Logo"
                      className="h-12 w-auto cursor-pointer  "
                    />
                  </a>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors duration-200"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="space-y-2 mb-6">
                {navLinksWithTabs.map((link, index) => {
                  const isActive = isActiveLink(link.href);
                  const isDropdownOpen = mobileActiveDropdown === index;
                  return (
                    <div key={index} className="relative">
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => {
                            handleLinkClick(link.href);
                            setMobileOpen(false);
                          }}
                          className={`flex-1 text-left px-3 py-2 rounded-lg transition-all duration-200 regular transform hover:scale-[1.02] text-sm ${isActive
                            ? link.activeColor
                            : `text-gray-700 ${link.hoverColor}`
                            }`}
                        >
                          {link.label}
                        </button>
                        <button
                          onClick={() => handleMobileDropdownToggle(index)}
                          className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''
                              }`}
                          />
                        </button>
                      </div>
                      {isDropdownOpen && (
                        <div className="pl-4 space-y-1 mt-2 animate-in slide-in-from-top duration-200">
                          {link.tabs.map((tab) => {
                            const IconComponent = tab.icon;
                            return (
                              <button
                                key={tab.id}
                                onClick={() => {
                                  handleTabClick(link.href, tab.id);
                                  setMobileOpen(false);
                                }}
                                className="flex items-center space-x-2 w-full p-2 text-left rounded-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-[1.02]"
                              >
                                <IconComponent size={16} className="text-blue-600" />
                                <span className="text-gray-700 regular text-sm">{tab.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="border-t border-gray-200 pt-4 space-y-2">
                {moreLinks.map((link, idx) => {
                  const IconComponent = link.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        handleLinkClick(link.href);
                        setMobileOpen(false);
                      }}
                      className="flex items-center space-x-3 w-full p-2 text-left rounded-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-[1.02]"
                    >
                      <IconComponent size={16} className="text-blue-600" />
                      <span className="text-gray-700 regular text-sm">{link.label}</span>
                    </button>
                  );
                })}
              </div>
              <div className="border-t border-gray-200 pt-4 mt-6">
                <button
                  onClick={() => {
                    handleTabClick('/', 'scheduling');
                    setMobileOpen(false);
                  }}
                  className="w-full regular bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-lg text-center transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center space-x-2"
                >
                  <span>Schedule a Meet</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;