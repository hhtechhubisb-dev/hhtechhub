import React, { useState } from "react";
import DigitalMarketingHero from "../components/servicescomponents/digitalmarkettingcomponents/DigitalMarkettingHero.jsx";
import DigitalMarketingIntro from "../components/servicescomponents/digitalmarkettingcomponents/DigitalMarkettingIntro.jsx";
import DigitalMarketingTabs from "../components/servicescomponents/digitalmarkettingcomponents/DigitalMarkettingTabs.jsx";
import DigitalMarketingServicesComponent from "../components/servicescomponents/digitalmarkettingcomponents/DigitalServices.jsx"; // Renamed this import
import DigitalMarketingTechSlider from "../components/servicescomponents/digitalmarkettingcomponents/DigitalMarkettingTechSlider.jsx";
import DigitalMarketingWhyChoose from "../components/servicescomponents/digitalmarkettingcomponents/DigitalMarkettingWhyChoose.jsx";
import DigitalMarketingFAQ from "../components/servicescomponents/digitalmarkettingcomponents/DigitalMarkettingFaq.jsx";

const DigitalMarketingServices = () => {
  const [activeTab, setActiveTab] = useState("seo");
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="text-[#1f1f1f] font-sans bg-gray-50">
      <DigitalMarketingHero />
      <DigitalMarketingIntro />
      
      <DigitalMarketingTabs 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      
      <DigitalMarketingServicesComponent /> {/* Updated to use renamed component */}
      <DigitalMarketingTechSlider 
        currentSlide={currentSlide} 
        setCurrentSlide={setCurrentSlide} 
      />
      <DigitalMarketingWhyChoose />
      <DigitalMarketingFAQ 
        activeTab={activeTab} 
        activeIndex={activeIndex} 
        toggleFAQ={toggleFAQ} 
      />
    </div>
  );
};

export default DigitalMarketingServices;