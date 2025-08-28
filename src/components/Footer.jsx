import {
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTikTok } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-white px-4 sm:px-6 md:px-16 lg:px-20 py-8 sm:py-10 md:py-12 text-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-8 md:mb-12 max-w-7xl mx-auto">
        {/* Brand Info */}
        <div>
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-orange-500 mb-4">HH Tech HUB</h2>
          <p className="text-gray-300 mb-4 text-xs sm:text-sm">
            As a premier software development company in Vietnam, we are committed to your success
            with our core philosophy: <strong className="text-white">"Your success is our mission."</strong>
          </p>
          <div className="mt-4 sm:mt-6">
            <h4 className="text-lg sm:text-xl text-orange-500 font-semibold mb-4 border-b border-orange-500 inline-block pb-1 w-full">
              Connect With Us
            </h4>
            <div className="flex gap-3 sm:gap-4 mt-4">
              <a
                href="https://www.facebook.com/hhtechhub5?mibextid=JRoKGi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl bg-white rounded-full p-2 hover:scale-110 transition-transform"
              >
                <BiLogoFacebook className="text-black" size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/hh-tech-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl bg-white rounded-full p-2 hover:scale-110 transition-transform"
              >
                <LiaLinkedinIn className="text-black" size={20} />
              </a>
              <a
                href="https://www.instagram.com/hhtech_hub?igsh=bTAzd3YxdG5lbWZ3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl bg-white rounded-full p-2 hover:scale-110 transition-transform"
              >
                <FaInstagram className="text-black" size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@hh.tech.hub?_t=ZS-8xibOmCUm88&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl bg-white rounded-full p-2 hover:scale-110 transition-transform"
              >
                <AiOutlineTikTok className="text-black" size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg sm:text-xl text-orange-500 font-semibold mb-4 border-b border-orange-500 inline-block pb-1 w-full">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-gray-300 text-xs sm:text-sm">
            <li>
              <Link to="/" className="hover:text-orange-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-orange-500 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange-500 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="text-lg sm:text-xl text-orange-500 font-semibold mb-4 border-b border-orange-500 inline-block pb-1 w-full">
            Our Services
          </h4>
          <ul className="mt-4 space-y-2 text-gray-300 text-xs sm:text-sm">
            <li>
              <Link to="/customsoft" className="hover:text-orange-500 transition-colors">
                Custom Software Development
              </Link>
            </li>
            <li>
              <Link to="/webdevelopment" className="hover:text-orange-500 transition-colors">
                Web Application Development
              </Link>
            </li>
            <li>
              <Link to="/mobiledevelopment" className="hover:text-orange-500 transition-colors">
                Mobile App Development
              </Link>
            </li>
            <li>
              <Link to="/graphicsdesign" className="hover:text-orange-500 transition-colors">
                Multimedia Designing
              </Link>
            </li>
            <li>
              <Link to="/machinelearningservice" className="hover:text-orange-500 transition-colors">
                ML/AI Learning
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-lg sm:text-xl text-orange-500 font-semibold mb-4 border-b border-orange-500 inline-block pb-1 w-full">
            Contact Us
          </h4>
          <ul className="mt-4 space-y-3 text-gray-300 text-xs sm:text-sm">
            <li className="flex items-center gap-2">
              <a
                href="https://wa.me/923350757780"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-orange-500 transition-colors"
              >
                <FaPhoneAlt className="text-orange-500 w-4 h-4" /> +92-3350757780
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="tel:+92516123024"
                className="flex items-center gap-2 hover:text-orange-500 transition-colors"
              >
                <FaPhoneAlt className="text-orange-500 w-4 h-4" />
                +92-51-6123024
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-orange-500 w-4 h-4" />
              <a
                href="mailto:huzaifaejaz@hhtechhub.com"
                className="hover:text-orange-500 transition-colors"
              >
                huzaifaejaz@hhtechhub.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaClock className="text-orange-500 w-4 h-4" /> Mon - Fri: 9:00 AM – 6:00 PM
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-orange-500 w-4 h-4 mt-1" />
              <a
                href="https://www.google.com/maps/search/?q=Satellite Town, B Block, Opp Park, 2nd Floor, Office no 4, Rawalpindi, Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
              >
                Satellite Town, B Block, Opp Park, 2nd Floor, Office no 4, Rawalpindi, Pakistan
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}