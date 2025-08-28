import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/servicescomponents/graphicdesigncomponents/GraphicsDesignHero.jsx";
import IntroSection from "../components/servicescomponents/graphicdesigncomponents/GraphicsDesignIntro.jsx";
import DesignTabsSection from "../components/servicescomponents/graphicdesigncomponents/GraphicsDesignTabs.jsx";
import ServicesSection from "../components/servicescomponents/graphicdesigncomponents/GraphicsServices.jsx";
import TechnologySlider from "../components/servicescomponents/graphicdesigncomponents/GraphicsDesignTechSlider.jsx";
import WhyChooseUs from "../components/servicescomponents/graphicdesigncomponents/GraphicsDesignWhyChoose.jsx";
import FAQSection from "../components/servicescomponents/graphicdesigncomponents/GraphicsDesignFaq.jsx";
import {
  brandingData,
  digitalDesignData,
  videoProductionData,
  techIcons,
  designServices,
  whyChooseItems // Make sure this is imported from your data file
} from "../components/servicescomponents/graphicdesigncomponents/graphicsDesignData.jsx";

const GraphicsDesignServices = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("branding");
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === Math.ceil(techIcons.length / 6) - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? Math.ceil(techIcons.length / 6) - 1 : prev - 1));
  };

  const currentData = activeTab === "branding" ? brandingData : 
                     activeTab === "digital" ? digitalDesignData : 
                     videoProductionData;

  return (
    <div className="text-[#1f1f1f] font-sans bg-gray-50">
      <HeroSection />
      <IntroSection />
      
      <DesignTabsSection 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        brandingData={brandingData}
        digitalDesignData={digitalDesignData}
        videoProductionData={videoProductionData}
      />
      
      <ServicesSection services={designServices} />
      
      <TechnologySlider 
        techIcons={techIcons}
        currentSlide={currentSlide}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
      
      <WhyChooseUs whyChooseItems={whyChooseItems} /> {/* Pass the prop here */}
      
      <FAQSection 
        faqs={currentData.faqs}
        activeIndex={activeIndex}
        toggleFAQ={toggleFAQ}
      />
    </div>
  );
};

export default GraphicsDesignServices;