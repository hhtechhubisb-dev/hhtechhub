import React from "react";

const TechnologyCard = ({ tech }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:shadow-md group">
    <div className="flex items-center mb-4">
      <div className="w-8 h-1 bg-orange-500 mr-3 transition-all duration-300 group-hover:w-12"></div>
      <h3 className="font-semibold text-xl text-gray-800">{tech.name}</h3>
    </div>
    <p className="text-gray-600 mb-4">{tech.description}</p>
    <div className="mb-4">
      <h4 className="font-medium text-gray-800 mb-2">Strengths:</h4>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        {tech.strengths.map((strength, i) => (
          <li key={i}>{strength}</li>
        ))}
      </ul>
    </div>
    <div>
      <h4 className="font-medium text-gray-800 mb-2">Ideal For:</h4>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        {tech.useCases.map((useCase, i) => (
          <li key={i}>{useCase}</li>
        ))}
      </ul>
    </div>
  </div>
);

const WebDevelopmentTabs = ({ activeTab, setActiveTab, backendTechnologies, frontendTechnologies }) => (
  <section className="px-4 md:px-10 py-20 max-w-7xl mx-auto">
    <div className="flex flex-col items-center mb-16">
      <div className="flex items-center mb-4">
        <span className="w-4 h-4 bg-orange-500 mr-2"></span>
        <h2 className="text-3xl font-bold text-gray-900">
          Full-Stack Technology Expertise
        </h2>
      </div>
      <p className="text-gray-600 max-w-3xl text-center mb-8">
        <span className="font-bold">As a full-service web development provider,</span> we leverage the latest backend and frontend technologies to deliver complete solutions.
      </p>

      <div className="flex mb-12 border-b border-gray-200 w-full">
        <button
          onClick={() => setActiveTab("backend")}
          className={`px-6 py-3 font-medium text-lg transition-all duration-300 ${activeTab === "backend" ? "text-orange-600 border-b-2 border-orange-600" : "text-gray-500 hover:text-gray-700"}`}
        >
          Backend Technologies
        </button>
        <button
          onClick={() => setActiveTab("frontend")}
          className={`px-6 py-3 font-medium text-lg transition-all duration-300 ${activeTab === "frontend" ? "text-orange-600 border-b-2 border-orange-600" : "text-gray-500 hover:text-gray-700"}`}
        >
          Frontend Technologies
        </button>
      </div>

      <div className="w-full">
        {activeTab === "backend" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {backendTechnologies.map((tech, index) => (
              <TechnologyCard key={index} tech={tech} />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frontendTechnologies.map((tech, index) => (
              <TechnologyCard key={index} tech={tech} />
            ))}
          </div>
        )}
      </div>
    </div>
  </section>
);

export default WebDevelopmentTabs;