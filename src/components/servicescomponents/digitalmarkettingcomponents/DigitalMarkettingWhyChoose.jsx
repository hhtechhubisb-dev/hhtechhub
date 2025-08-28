import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const DigitalMarketingWhyChoose = () => {
  const features = [
    {
      icon: <HiOutlineLightBulb className="text-orange-600 text-2xl" />,
      title: "Data-Driven Strategies",
      description: "We base all decisions on analytics and performance data, not guesswork."
    },
    {
      icon: <BsFillPeopleFill className="text-orange-600 text-2xl" />,
      title: "Full-Service Team",
      description: "Our team includes strategists, designers, writers, and analysts—no outsourcing."
    },
    {
      icon: <MdLocationOn className="text-orange-600 text-2xl" />,
      title: "Transparent Reporting",
      description: "Regular, easy-to-understand reports showing exactly how your campaigns perform."
    },
    {
      icon: <FaCheckCircle className="text-orange-600 text-2xl" />,
      title: "Proven Results",
      description: "We've helped businesses across industries achieve their marketing goals."
    }
  ];

  return (
    <section className="px-4 md:px-10 py-20 max-w-7xl mx-auto">
      <div className="flex items-center mb-10">
        <span className="w-4 h-4 bg-orange-500 mr-2"></span>
        <h2 className="text-3xl font-bold text-gray-900">
          Why Choose HH TECH for Digital Marketing
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {features.map((feature, index) => (
          <div key={index} className="p-8 rounded-lg border-l-4 border-orange-500 hover:shadow-md transition-all duration-300 group">
            <div className="flex items-start">
              <div className="bg-orange-100 p-3 rounded-lg mr-4 group-hover:bg-orange-200 transition-colors duration-300">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitalMarketingWhyChoose;