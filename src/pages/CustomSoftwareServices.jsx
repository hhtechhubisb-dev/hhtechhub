import React, { useState } from "react";
import SoftwareHero from "../components/servicescomponents/customsoftwarecomponents/SoftwareHero.jsx";
import SoftwareIntro from "../components/servicescomponents/customsoftwarecomponents/SoftwareIntro.jsx";
import SoftwareTabs from "../components/servicescomponents/customsoftwarecomponents/SoftwareTabs.jsx";
import SoftwareServices from "../components/servicescomponents/customsoftwarecomponents/SoftwareServices.jsx";
import SoftwareTechSlider from "../components/servicescomponents/customsoftwarecomponents/SoftwareTechSlider.jsx";
import SoftwareWhyChoose from "../components/servicescomponents/customsoftwarecomponents/SoftwareWhyChoose.jsx";
import SoftwareFAQ from "../components/servicescomponents/customsoftwarecomponents/SoftwareFaq.jsx";

const CustomSoftwareServices = () => {
  const [activeTab, setActiveTab] = useState("web-apps");
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="text-[#1f1f1f] font-sans bg-gray-50">
      <SoftwareHero />
      <SoftwareIntro />
      
      <SoftwareTabs 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      
      <SoftwareServices />
      <SoftwareTechSlider 
        currentSlide={currentSlide} 
        setCurrentSlide={setCurrentSlide} 
      />
      <SoftwareWhyChoose />
      <SoftwareFAQ 
        activeTab={activeTab} 
        activeIndex={activeIndex} 
        toggleFAQ={toggleFAQ} 
      />
    </div>
  );
};

export default CustomSoftwareServices;