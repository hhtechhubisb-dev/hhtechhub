import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { Mail, Phone, Smartphone } from "lucide-react";
import logo from "/assets/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [topBarVisible, setTopBarVisible] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownHover, setDropdownHover] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      const newState = !prev;
      document.body.style.overflow = newState ? "hidden" : "";
      return newState;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      setTopBarVisible(window.scrollY <= 50);
    };

    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const routeMap = {
    deeplearning: "/deeplearningservice",
    webdevelopment: "/webdevelopment",
    nlp: "/nlpservice",
    mobileappdevelopment: "/mobiledevelopment",
    cloudcomputing: "/cloudservice",
    devops: "/devops",
    customsoftwares: "/customsoft",
    machinelearning: "/machinelearningservice",
    digitalmarketing: "/digitalmarketing",
    graphicsdesigning: "/graphicsdesign",
    viewallservices: "/services",
  };

  const slug = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, "");
  const getServicePath = (categoryLabel, itemLabel) => {
    const key = slug(itemLabel);
    return routeMap[key] || "/services";
  };

  const navLinks = [
    {
      id: 2,
      title: "Services",
      to: "services",
      dropdown: true,
      options: [
        {
          category: "Services",
          items: [
            "Deep Learning",
            "Web Development",
            "NLP",
            "Mobile App Development",
            "Cloud Computing",
            "DevOps",
            "Custom Softwares",
            "Machine Learning",
            "Digital Marketing",
            "Graphics Designing",
          ],
        },
      ],
    },
    { id: 8, title: "Blogs", path: "/blogs" },
    { id: 7, title: "Contact", path: "/contact" },
    // { id: 10, title: "About Us", path: "/aboutus" },
    // {
    //   id: 11,
    //   title: "Admin",
    //   dropdown: true,
    //   options: [
    //     {
    //       category: "Admin",
    //       items: [
    //         "Blogs",
    //         "Contact Messages",
    //         "Quote Admin Panel",
    //       ],
    //     },
    //   ],
    // },
  ];

  const goToQuote = () => navigate("/get-quote");

  const handleDropdownToggle = (linkId) => {
    setActiveDropdown((prev) => (prev === linkId ? null : linkId));
  };

  return (
    <>
      {/* Top Bar */}
      <div
        className={`w-full bg-[#1a1a2e] text-white text-xs py-2 px-4 sm:px-6 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          topBarVisible ? "translate-y-0" : "-translate-y-full"
        } shadow-md z-50`}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mx-auto max-w-7xl gap-2 md:gap-0">
          {/* Contact Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="mailto:huzaifaejaz@hhtechhub.com"
              className="flex items-center gap-1.5 hover:text-orange-500 transition-colors"
            >
              <Mail size={14} className="text-orange-400" />
              <span>huzaifaejaz@hhtechhub.com</span>
            </a>
            <a
              href="https://wa.me/923350757780"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-orange-500 transition-colors"
            >
              <Smartphone size={14} className="text-orange-400" />
              <span>+92-3350757780</span>
            </a>
            <a
              href="tel:+92516123024"
              className="flex items-center gap-1.5 hover:text-orange-500 transition-colors"
            >
              <Phone size={14} className="text-orange-400" />
              <span>+92-51-6123024</span>
            </a>
          </div>

          {/* Mobile: Only WhatsApp link + Quote button */}
          <div className="flex md:hidden items-center justify-between w-full">
            <a
              href="https://wa.me/923350757780"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-orange-500 transition-colors"
            >
              <Smartphone size={14} className="text-orange-400" />
              <span className="text-xs">+92-3350757780</span>
            </a>
            <button
              onClick={goToQuote}
              className="px-3 py-1 text-xs font-medium rounded-md bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 shadow hover:shadow-md transform hover:scale-[1.02]"
            >
              Get Free Quote
            </button>
          </div>

          {/* Quote Button (desktop) */}
          <div className="hidden md:flex justify-end w-full md:w-auto">
            <button
              onClick={goToQuote}
              className="px-4 py-1.5 text-sm font-medium rounded-md bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 shadow hover:shadow-md transform hover:scale-[1.02]"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`fixed ${
          topBarVisible ? "top-[40px] md:top-[44px]" : "top-0"
        } left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          scrolled
            ? "bg-[linear-gradient(90deg,_rgba(255,255,255,0.9)_0%,_rgba(255,255,255,0.7)_20%,_rgba(26,26,46,0.7)_80%,_rgba(26,26,46,0.9)_100%)] shadow-lg"
            : "bg-[linear-gradient(90deg,_rgba(255,255,255,0.6)_0%,_rgba(255,255,255,0.4)_30%,_rgba(26,26,46,0.4)_70%,_rgba(26,26,46,0.6)_100%)] backdrop-blur-md border-b border-[#1a1a2e]/20"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl sm:px-6">
          {/* Logo */}
          <RouterLink
            to="/"
            className="transition-all duration-300 hover:opacity-90"
          >
            <img
              src={logo}
              alt="HH Tech Hub Logo"
              className="w-20 sm:w-24 transition-transform duration-300 hover:scale-[1.02]"
            />
          </RouterLink>

          {/* Desktop Nav */}
          <nav className="items-center hidden gap-8 text-white md:flex">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.id}
                  className="relative group"
                  onMouseEnter={() => {
                    setActiveDropdown(link.id);
                    setDropdownHover(true);
                  }}
                  onMouseLeave={() => {
                    if (!dropdownHover) {
                      setActiveDropdown(null);
                    }
                  }}
                >
                  <button
                    onClick={() => handleDropdownToggle(link.id)}
                    className="flex items-center gap-1 font-medium text-sm uppercase tracking-wider hover:text-orange-400 transition-colors duration-300"
                  >
                    {link.title}
                    <FaChevronDown
                      className={`text-xs transition-transform duration-300 ${
                        activeDropdown === link.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === link.id && (
                    <div
                      className="absolute top-full left-[60%] -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-lg py-6 z-50 w-[600px] shadow-xl transition-opacity duration-300"
                      onMouseEnter={() => setDropdownHover(true)}
                      onMouseLeave={() => {
                        setDropdownHover(false);
                        setActiveDropdown(null);
                      }}
                    >
                      <div className="grid grid-cols-2 gap-6 px-8">
                        {link.options[0].items.map((item, index) => (
                          <div key={index} className="relative">
                            <RouterLink
                              to={getServicePath("Services", item)}
                              className="text-sm text-gray-800 hover:text-orange-500 transition-colors duration-300 flex items-center py-2 group"
                            >
                              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 transition-transform duration-300 group-hover:scale-125"></span>
                              {item}
                            </RouterLink>
                            {index < link.options[0].items.length - 1 && (
                              <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-100 transition-opacity duration-300"></div>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="px-8 pt-4 mt-6 border-t border-gray-200 transition-colors duration-300"></div>
                    </div>
                  )}
                </div>
              ) : link.path ? (
                <RouterLink
                  key={link.id}
                  to={link.path}
                  className="font-medium text-sm uppercase tracking-wider hover:text-orange-400 transition-colors duration-300"
                >
                  {link.title}
                </RouterLink>
              ) : (
                <ScrollLink
                  key={link.id}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="font-medium text-sm uppercase tracking-wider hover:text-orange-400 transition-colors duration-300 cursor-pointer"
                >
                  {link.title}
                </ScrollLink>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="text-2xl text-white md:hidden p-1.5 rounded-full hover:bg-white/10 transition-all duration-300"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <MdClose /> : <GiHamburgerMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 right-0 bg-[#1a1a2e] text-white px-4 sm:px-6 py-4 space-y-4 shadow-lg transition-all duration-300 ease-in-out md:hidden ${
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.id} className="space-y-2">
                <button
                  onClick={() => handleDropdownToggle(link.id)}
                  className="w-full text-left font-semibold flex justify-between items-center py-2 hover:text-orange-400 transition-colors duration-300"
                >
                  {link.title}
                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      activeDropdown === link.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeDropdown === link.id && (
                  <div className="pl-4 border-l-2 border-orange-400/30 pr-2">
                    {link.options[0].items.map((item, j) => (
                      <RouterLink
                        key={j}
                        to={getServicePath("Services", item)}
                        className="block text-sm text-gray-300 hover:text-orange-400 pl-2 py-1.5 transition-colors duration-300"
                        onClick={() => {
                          setMenuOpen(false);
                          document.body.style.overflow = "";
                        }}
                      >
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 inline-block"></span>
                        {item}
                      </RouterLink>
                    ))}
                  </div>
                )}
              </div>
            ) : link.path ? (
              <RouterLink
                key={link.id}
                to={link.path}
                className="block font-medium text-sm uppercase hover:text-orange-400 py-2 transition-colors duration-300"
                onClick={() => {
                  setMenuOpen(false);
                  document.body.style.overflow = "";
                }}
              >
                {link.title}
              </RouterLink>
            ) : (
              <ScrollLink
                key={link.id}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="block font-medium text-sm uppercase hover:text-orange-400 py-2 transition-colors duration-300"
                onClick={() => {
                  setMenuOpen(false);
                  document.body.style.overflow = "";
                }}
              >
                {link.title}
              </ScrollLink>
            )
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
