import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const DevOpsWhyChoose = () => {
  const features = [
    {
      icon: <HiOutlineLightBulb className="text-orange-600 text-2xl" />,
      title: "Full DevOps Lifecycle",
      description: "We cover the entire spectrum from code to production, not just individual tools."
    },
    {
      icon: <BsFillPeopleFill className="text-orange-600 text-2xl" />,
      title: "Cultural Transformation",
      description: "We help bridge the gap between development and operations teams."
    },
    {
      icon: <MdLocationOn className="text-orange-600 text-2xl" />,
      title: "Cloud-Native Expertise",
      description: "Deep experience with modern cloud-native architectures and patterns."
    },
    {
      icon: <FaCheckCircle className="text-orange-600 text-2xl" />,
      title: "Proven Methodologies",
      description: "Battle-tested approaches refined across dozens of successful implementations."
    }
  ];

  return (
    <section className="px-4 md:px-10 py-20 max-w-7xl mx-auto">
      <div className="flex items-center mb-10">
        <span className="w-4 h-4 bg-orange-500 mr-2"></span>
        <h2 className="text-3xl font-bold text-gray-900">
          Why Choose HH TECH for DevOps Solutions
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

export default DevOpsWhyChoose;