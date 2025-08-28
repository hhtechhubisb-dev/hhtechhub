import React, { useState } from "react";

import CloudHero from "../components/servicescomponents/cloudcomponents/CloudHero.jsx";
import CloudIntro from "../components/servicescomponents/cloudcomponents/CloudIntro.jsx";
import CloudTabs from "../components/servicescomponents/cloudcomponents/CloudTabs.jsx";
import CloudServicess from "../components/servicescomponents/cloudcomponents/CloudServicess.jsx";
import CloudTechSlider from "../components/servicescomponents/cloudcomponents/CloudTechSlider.jsx";
import CloudWhyChoose from "../components/servicescomponents/cloudcomponents/CloudWhyChoose.jsx";
import CloudFAQ from "../components/servicescomponents/cloudcomponents/CloudFaq.jsx";



const CloudService = () => {
  const [activeTab, setActiveTab] = useState("aws");
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="text-[#1f1f1f] font-sans bg-gray-50">
      <CloudHero />
      <CloudIntro />
      
      <CloudTabs 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      
      <CloudServicess />
      <CloudTechSlider 
        currentSlide={currentSlide} 
        setCurrentSlide={setCurrentSlide} 
      />
      <CloudWhyChoose />
      <CloudFAQ 
        activeTab={activeTab} 
        activeIndex={activeIndex} 
        toggleFAQ={toggleFAQ} 
      />
    </div>
  );
};

export default CloudService;