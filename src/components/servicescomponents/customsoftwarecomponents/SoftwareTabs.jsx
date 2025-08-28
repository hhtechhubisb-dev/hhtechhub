import React from "react";
import { webAppsData, desktopAppsData } from"./softwareData.js";

const SoftwareTabs = ({ activeTab, setActiveTab }) => {
  const currentData = activeTab === "web-apps" ? webAppsData : desktopAppsData;

  return (
    <section className="px-4 md:px-10 py-20 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16">
        <div className="flex items-center mb-4">
          <span className="w-4 h-4 bg-orange-500 mr-2"></span>
          <h2 className="text-3xl font-bold text-gray-900">
            Our Custom Software Services
          </h2>
        </div>
        <p className="text-gray-600 max-w-3xl text-center mb-8">
          We create tailored solutions across all platforms to address your specific business requirements.
        </p>
        
        <div className="flex mb-12 border-b border-gray-200 w-full">
          <button
            onClick={() => setActiveTab("web-apps")}
            className={`px-6 py-3 font-medium text-lg transition-all duration-300 ${
              activeTab === "web-apps" 
                ? "text-orange-600 border-b-2 border-orange-600" 
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Web Applications
          </button>
          <button
            onClick={() => setActiveTab("desktop-apps")}
            className={`px-6 py-3 font-medium text-lg transition-all duration-300 ${
              activeTab === "desktop-apps" 
                ? "text-orange-600 border-b-2 border-orange-600" 
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Desktop Applications
          </button>
        </div>
        
        <div className="w-full">
          <div className="grid md:grid-cols-1 gap-8">
            {activeTab === "web-apps" ? (
              <SoftwareTabContent 
                data={webAppsData}
                imageUrl="/assets/customsoft1.jpg"
                imageAlt="Web Application Development"
                title="Custom Web Applications"
              />
            ) : (
              <SoftwareTabContent 
                data={desktopAppsData}
                imageUrl="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1200&q=80"
                imageAlt="Desktop Application Development"
                title="Desktop Applications"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const SoftwareTabContent = ({ data, imageUrl, imageAlt, title }) => {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-6 group items-center">
      <div className="relative overflow-hidden rounded-lg w-full md:w-1/2 h-64 md:h-auto">
        <img 
          src={imageUrl} 
          alt={imageAlt}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500 hover:shadow-md transition-all duration-300 w-full md:w-1/2">
        <div className="flex items-center mb-4">
          <div className="w-8 h-1 bg-orange-500 mr-3 transition-all duration-300 group-hover:w-12"></div>
          <h3 className="font-semibold text-xl text-gray-800">{title}</h3>
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
    </div>
  );
};

export default SoftwareTabs;