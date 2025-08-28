import React from "react";
import { dockerData, kubernetesData, jenkinsData, terraformData, githubData } from "./devopsData";

const DevOpsTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "docker", name: "Docker", data: dockerData },
    { id: "kubernetes", name: "Kubernetes", data: kubernetesData },
    { id: "jenkins", name: "Jenkins", data: jenkinsData },
    { id: "terraform", name: "Terraform", data: terraformData },
    { id: "github", name: "GitHub Actions", data: githubData }
  ];

  const currentTabData = tabs.find(tab => tab.id === activeTab)?.data || dockerData;

  return (
    <section className="px-4 md:px-10 py-20 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16">
        <div className="flex items-center mb-4">
          <span className="w-4 h-4 bg-orange-500 mr-2"></span>
          <h2 className="text-3xl font-bold text-gray-900">
            Our Core DevOps Services
          </h2>
        </div>
        <p className="text-gray-600 max-w-3xl text-center mb-8">
          We specialize in the most powerful DevOps technologies to build efficient, scalable, and reliable software delivery pipelines.
        </p>
        
        <div className="flex mb-12 border-b border-gray-200 w-full overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 px-6 py-3 font-medium text-lg transition-all duration-300 ${
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
            <DevOpsTabContent 
              data={currentTabData}
              activeTab={activeTab}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const DevOpsTabContent = ({ data, activeTab }) => {
  const getImageUrl = () => {
    switch(activeTab) {
      case "docker":
        return "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
      case "kubernetes":
        return "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80";
      case "jenkins":
        return "https://images.unsplash.com/photo-1624953587687-daf255b6b80a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80";
      default:
        return "https://images.unsplash.com/photo-1624953587687-daf255b6b80a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80";
    }
  };

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
          src={getImageUrl()} 
          alt={data.name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white font-medium text-lg">{data.name} Solutions</span>
        </div>
      </div>
    </div>
  );
};

export default DevOpsTabs;