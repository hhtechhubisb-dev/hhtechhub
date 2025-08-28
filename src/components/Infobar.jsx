// components/InfoCard.js
import React from "react";

const InfoCard = ({ data }) => {
  return (
    <div className="py-12 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 opacity-0 animate-card-enter"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="text-4xl text-blue-600 dark:text-blue-400 mb-2">
              {item.icon}
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{item.value}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;
