import React from "react";

const DesignServiceCard = ({ serviceData, imageSrc, altText }) => (
  <div className="flex flex-col md:flex-row-reverse gap-6 group items-center">
    <div className="relative overflow-hidden rounded-lg w-full md:w-1/2 h-64 md:h-auto">
      <img 
        src={imageSrc} 
        alt={altText}
        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500 hover:shadow-md transition-all duration-300 w-full md:w-1/2">
      <div className="flex items-center mb-4">
        <div className="w-8 h-1 bg-orange-500 mr-3 transition-all duration-300 group-hover:w-12"></div>
        <h3 className="font-semibold text-xl text-gray-800">{serviceData.name}</h3>
      </div>
      <p className="text-gray-600 mb-4">{serviceData.description}</p>
      <div className="mb-4">
        <h4 className="font-medium text-gray-800 mb-2">Strengths:</h4>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {serviceData.strengths.map((strength, i) => (
            <li key={i}>{strength}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-medium text-gray-800 mb-2">Ideal For:</h4>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {serviceData.useCases.map((useCase, i) => (
            <li key={i}>{useCase}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const GraphicsDesignTabs = ({ activeTab, setActiveTab, brandingData, digitalDesignData, videoProductionData }) => (
  <section className="px-4 md:px-10 py-20 max-w-7xl mx-auto">
    <div className="flex flex-col items-center mb-16">
      <div className="flex items-center mb-4">
        <span className="w-4 h-4 bg-orange-500 mr-2"></span>
        <h2 className="text-3xl font-bold text-gray-900">
          Our Core Design Services
        </h2>
      </div>
      <p className="text-gray-600 max-w-3xl text-center mb-8">
        We offer specialized design solutions tailored to your brand's needs and objectives.
      </p>

      <div className="flex mb-12 border-b border-gray-200 w-full">
        <button
          onClick={() => setActiveTab("branding")}
          className={`px-6 py-3 font-medium text-lg transition-all duration-300 ${activeTab === "branding" ? "text-orange-600 border-b-2 border-orange-600" : "text-gray-500 hover:text-gray-700"}`}
        >
          Branding Design
        </button>
        <button
          onClick={() => setActiveTab("digital")}
          className={`px-6 py-3 font-medium text-lg transition-all duration-300 ${activeTab === "digital" ? "text-orange-600 border-b-2 border-orange-600" : "text-gray-500 hover:text-gray-700"}`}
        >
          Digital Design
        </button>
        <button
          onClick={() => setActiveTab("video")}
          className={`px-6 py-3 font-medium text-lg transition-all duration-300 ${activeTab === "video" ? "text-orange-600 border-b-2 border-orange-600" : "text-gray-500 hover:text-gray-700"}`}
        >
          Video Production
        </button>
      </div>

      <div className="w-full">
        <div className="grid md:grid-cols-1 gap-8">
          {activeTab === "branding" ? (
            <DesignServiceCard 
              serviceData={brandingData}
              imageSrc="/assets/brandingdesign.jpg"
              altText="Branding Design Service"
            />
          ) : activeTab === "digital" ? (
            <DesignServiceCard 
              serviceData={digitalDesignData}
              imageSrc="/assets/digitaldesign.jpg"
              altText="Digital Design Service"
            />
          ) : (
            <DesignServiceCard 
              serviceData={videoProductionData}
              imageSrc="/assets/multimediaservice.avif"
              altText="Video Production Service"
            />
          )}
        </div>
      </div>
    </div>
  </section>
);

export default GraphicsDesignTabs;