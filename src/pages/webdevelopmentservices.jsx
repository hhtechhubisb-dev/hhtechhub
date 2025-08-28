import React, { useState } from "react";
import { 
  backendTechnologies, 
  frontendTechnologies, 
  techIcons, 
  services, 
  whyChooseItems,
  faqs
} from "../components/servicescomponents/webdevelopmentcomponents/webDevelopmentData";
import WebDevelopmentHero from "../components/servicescomponents/webdevelopmentcomponents/WebDevelopmentHero";
import WebDevelopmentIntro from "../components/servicescomponents/webdevelopmentcomponents/WebDevelopmentIntro";
import WebDevelopmentTabs from "../components/servicescomponents/webdevelopmentcomponents/WebDevelopmentTabs";
import WebDevelopmentTechSlider from "../components/servicescomponents/webdevelopmentcomponents/WebDevelopmentTechSlider";
import WebServices from "../components/servicescomponents/webdevelopmentcomponents/WebServices";
import WebDevelopmentWhyChoose from "../components/servicescomponents/webdevelopmentcomponents/WebDevelopmentWhyChoose";
import WebDevelopmentFAQ from "../components/servicescomponents/webdevelopmentcomponents/WebDevelopmentFAQ";

const WebDevelopmentServices = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("backend");
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="text-[#1f1f1f] font-sans bg-gray-50">
      <WebDevelopmentHero />
      <WebDevelopmentIntro />
      
      <WebDevelopmentTabs 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        backendTechnologies={backendTechnologies}
        frontendTechnologies={frontendTechnologies}
      />
      
      <WebDevelopmentTechSlider 
        techIcons={techIcons}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
      
      <WebServices services={services} />
      
      <WebDevelopmentWhyChoose whyChooseItems={whyChooseItems} />
      
      <section className="px-4 md:px-10 py-20 max-w-7xl mx-auto">
        <div className="flex items-center mb-10">
          <span className="w-4 h-4 bg-orange-500 mr-2"></span>
          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>
        <WebDevelopmentFAQ 
          activeIndex={activeIndex}
          toggleFAQ={toggleFAQ}
          faqs={faqs}
        />
      </section>
    </div>
  );
};

export default WebDevelopmentServices;