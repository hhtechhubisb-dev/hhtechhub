import React, { useState } from "react";
import { 
  reactNativeData, 
  flutterData, 
  techIcons, 
  services, 
  whyChooseItems 
} from "../components/servicescomponents/mobiledevelopmentcomponents/mobileDevelopmentData";
import MobileDevelopmentHero from "../components/servicescomponents/mobiledevelopmentcomponents/MobileDevelopmentHero";
import MobileDevelopmentIntro from "../components/servicescomponents/mobiledevelopmentcomponents/MobileDevelopmentIntro";
import MobileDevelopmentTabs from "../components/servicescomponents/mobiledevelopmentcomponents/MobileDevelopmentTabs";
import MobileServices from "../components/servicescomponents/mobiledevelopmentcomponents/MobileServices";
import MobileDevelopmentTechSlider from "../components/servicescomponents/mobiledevelopmentcomponents/MobileDevelopmentTechSlider";
import MobileDevelopmentWhyChoose from "../components/servicescomponents/mobiledevelopmentcomponents/MobileDevelopmentWhyChoose";
import MobileDevelopmentFAQ from "../components/servicescomponents/mobiledevelopmentcomponents/MobileDevelopmentFAQ";

const MobileDevelopmentServices = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("react-native");
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="text-[#1f1f1f] font-sans bg-gray-50">
      <MobileDevelopmentHero />
      <MobileDevelopmentIntro />
      
      <MobileDevelopmentTabs 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        reactNativeData={reactNativeData}
        flutterData={flutterData}
      />
      
      <MobileServices services={services} />
      
      <MobileDevelopmentTechSlider 
        techIcons={techIcons}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
      
      <MobileDevelopmentWhyChoose whyChooseItems={whyChooseItems} />
      
      <div className="px-4 md:px-10 py-20 max-w-7xl mx-auto">
        <div className="flex items-center mb-10">
          <span className="w-4 h-4 bg-orange-500 mr-2"></span>
          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>
        <MobileDevelopmentFAQ 
          activeTab={activeTab}
          activeIndex={activeIndex}
          toggleFAQ={toggleFAQ}
          reactNativeData={reactNativeData}
          flutterData={flutterData}
        />
      </div>
    </div>
  );
};

export default MobileDevelopmentServices;