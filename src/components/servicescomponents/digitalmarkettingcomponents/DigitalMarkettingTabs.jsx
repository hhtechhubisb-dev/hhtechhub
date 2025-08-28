import React from "react";
import { 
  seoData, 
  socialMediaData, 
  contentMarketingData, 
  emailMarketingData, 
  webDesignData 
} from "./digitalMarkettingData.js";

const DigitalMarketingTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "seo", name: "SEO Services", data: seoData },
    { id: "social", name: "Social Media Marketing", data: socialMediaData },
    { id: "content", name: "Content Marketing", data: contentMarketingData },
    { id: "email", name: "Email Marketing", data: emailMarketingData },
    { id: "web", name: "Web Design & Development", data: webDesignData }
  ];

  const currentTabData = tabs.find(tab => tab.id === activeTab)?.data || seoData;

  const getImageUrl = () => {
    switch(activeTab) {
      case "seo":
        return "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
      case "social":
        return "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80";
      case "content":
        return "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80";
      case "email":
        return "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80";
      case "web":
        return "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80";
      default:
        return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80";
    }
  };

  return (
    <section className="px-4 md:px-10 py-20 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16">
        <div className="flex items-center mb-4">
          <span className="w-4 h-4 bg-orange-500 mr-2"></span>
          <h2 className="text-3xl font-bold text-gray-900">
            Our Core Digital Marketing Services
          </h2>
        </div>
        <p className="text-gray-600 max-w-3xl text-center mb-8">
          We offer comprehensive digital marketing solutions to help your business grow in the online space.
        </p>
        
        <div className="flex mb-12 border-b border-gray-200 w-full overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium text-lg transition-all duration-300 whitespace-nowrap ${
                activeTab === tab.id 
                  ? "text-orange-600 border-b-2 border-orange-600" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
        
        <div className="w-full">
          <div className="grid md:grid-cols-1 gap-8">
            <DigitalMarketingTabContent 
              data={currentTabData}
              imageUrl={getImageUrl()}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const DigitalMarketingTabContent = ({ data, imageUrl }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 group items-stretch">
      <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500 border border-gray-100 hover:shadow-md transition-all duration-300 w-full md:w-1/2">
        <div className="flex items-center mb-4">
          <div className="w-8 h-1 bg-orange-500 mr-3 transition-all duration-300 group-hover:w-12"></div>
          <h3 className="font-semibold text-xl text-gray-800">{data.name}</h3>
        </div>
        <p className="text-gray-600 mb-4">{data.description}</p>
        
        <div className="mb-4">
          <h4 className="font-medium text-gray-800 mb-2">Strengths:</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {data.strengths.map((strength, i) => (
              <li key={i}>{strength}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-800 mb-2">Ideal For:</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {data.useCases.map((useCase, i) => (
              <li key={i}>{useCase}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-xl w-full md:w-1/2 h-64 md:h-auto shadow-lg">
        <img 
          src={imageUrl} 
          alt={data.name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white font-medium text-lg">{data.name}</span>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingTabs;