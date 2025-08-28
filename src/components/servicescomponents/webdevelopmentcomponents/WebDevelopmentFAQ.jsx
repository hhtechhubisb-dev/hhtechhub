import React from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";

const WebDevelopmentFAQ = ({ activeIndex, toggleFAQ, faqs }) => (
  <div className="space-y-6 max-w-6xl mx-auto">
    {faqs.map((faq, idx) => (
      <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-500 border border-gray-100 border-t-0 border-r-0 border-b-0 hover:shadow-md transition-all duration-300">
        <button
          onClick={() => toggleFAQ(idx)}
          className="w-full flex items-start justify-between text-left"
        >
          <div className="flex items-start">
            <FaQuestionCircle className="text-orange-500 text-xl mr-3 mt-1 flex-shrink-0" />
            <h3 className="font-semibold text-lg text-gray-800">
              {faq.question}
            </h3>
          </div>
          <span className="text-orange-500 text-lg">
            {activeIndex === idx ? <FaMinus /> : <FaPlus />}
          </span>
        </button>

        {activeIndex === idx && (
          <div className="mt-4 pl-9 pr-2 text-gray-600">{faq.answer}</div>
        )}
      </div>
    ))}
  </div>
);

export default WebDevelopmentFAQ;