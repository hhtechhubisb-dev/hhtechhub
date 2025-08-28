import React from "react";
import { awsData, azureData, gcpData, digitalOceanData, herokuData } from "@/components/servicescomponents/cloudcomponents/cloudData.jsx";


const CloudTabs = ({ activeTab, setActiveTab }) => {
  const currentData = 
    activeTab === "aws" ? awsData :
    activeTab === "azure" ? azureData :
    activeTab === "gcp" ? gcpData :
    activeTab === "digitalocean" ? digitalOceanData :
    activeTab ===  "heroku"?herokuData:
    awsData;

  return (
    <section className="px-4 md:px-10 py-20 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16">
        <div className="flex items-center mb-4">
          <span className="w-4 h-4 bg-orange-500 mr-2"></span>
          <h2 className="text-3xl font-bold text-gray-900">
            Best Cloud Service Provider - What We Offer?
          </h2>
        </div>
        <p className="text-gray-600 max-w-3xl text-center mb-8">
          We specialize in the most powerful cloud platforms to build scalable, secure, and cost-effective solutions.
        </p>
        
        <div className="flex mb-12 border-b border-gray-200 w-full overflow-x-auto">
          {["aws", "azure", "gcp", "digitalocean", "heroku"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium text-lg transition-all duration-300 whitespace-nowrap ${
                activeTab === tab 
                  ? "text-orange-600 border-b-2 border-orange-600" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab === "aws" && "Amazon Web Services"}
              {tab === "azure" && "Microsoft Azure"}
              {tab === "gcp" && "Google Cloud"}
              {tab === "digitalocean" && "Digital Ocean"}
              {tab === "heroku" && "Heroku"}
            </button>
          ))}
        </div>
        
        <div className="w-full">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500  hover:shadow-md transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="w-8 h-1 bg-orange-500 mr-3 transition-all duration-300 group-hover:w-12"></div>
                {/* <img 
                  src={`/assets/${activeTab}.svg`} 
                  alt={currentData.name} 
                  className="h-8 mr-3"
                /> */}
                <h3 className="font-semibold text-xl text-gray-800">{currentData.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">{currentData.description}</p>
              
              <div className="mb-4">
                <h4 className="font-medium text-gray-800 mb-2">Strengths:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {currentData.strengths.map((strength, i) => (
                    <li key={i}>{strength}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Ideal For:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {currentData.useCases.map((useCase, i) => (
                    <li key={i}>{useCase}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden group">
              <img 
                src={currentData.imageUrl} 
                alt={currentData.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-2xl font-bold">
                  {currentData.name} 
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudTabs;