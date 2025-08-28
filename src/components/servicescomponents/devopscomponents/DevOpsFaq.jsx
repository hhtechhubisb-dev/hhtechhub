import React from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import { dockerData, kubernetesData } from "@/components/servicescomponents/devopscomponents/devopsData";

const DevOpsFAQ = ({ activeTab, activeIndex, toggleFAQ }) => {
  const currentData = activeTab === "docker" ? dockerData : kubernetesData;

  return (
    <div className="px-4 md:px-10 py-20 max-w-7xl mx-auto">
      <div className="flex items-center mb-10">
        <span className="w-4 h-4 bg-orange-500 mr-2"></span>
        <h2 className="text-3xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-6 max-w-6xl mx-auto">
        {currentData.faqs.map((faq, idx) => (
          <div key={idx} className="p-6 rounded-lg border-l-4 border-orange-500 hover:shadow-md transition-all duration-300 group">
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full flex items-start justify-between text-left"
            >
              <div className="flex items-start">
                <div className="bg-orange-100 p-2 rounded-lg mr-3 group-hover:bg-orange-200 transition-colors duration-300">
                  <FaQuestionCircle className="text-orange-600 text-lg" />
                </div>
                <h3 className="font-semibold text-lg text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                  {faq.question}
                </h3>
              </div>
              <span className="text-orange-500 text-lg">
                {activeIndex === idx ? <FaMinus /> : <FaPlus />}
              </span>
            </button>
        
            {activeIndex === idx && (
              <div className="mt-4 pl-14 pr-2 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevOpsFAQ;