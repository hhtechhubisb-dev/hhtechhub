import React from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";

const MobileDevelopmentFAQ = ({ 
  activeTab, 
  activeIndex, 
  toggleFAQ,
  reactNativeData,
  flutterData 
}) => {
  const currentData = activeTab === "react-native" ? reactNativeData : flutterData;

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {currentData.faqs.map((faq, idx) => (
        <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-300 border border-gray-100 hover:shadow-md transition-all duration-300 group">
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
  );
};

export default MobileDevelopmentFAQ;