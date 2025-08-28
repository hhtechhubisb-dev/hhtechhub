import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const SoftwareWhyChoose = () => {
  const features = [
    {
      icon: <HiOutlineLightBulb className="text-orange-600 text-2xl" />,
      title: "Deep Business Analysis",
      description: "We thoroughly understand your processes before writing any code."
    },
    {
      icon: <BsFillPeopleFill className="text-orange-600 text-2xl" />,
      title: "User-Centric Design",
      description: "We design interfaces that match how your team actually works."
    },
    {
      icon: <MdLocationOn className="text-orange-600 text-2xl" />,
      title: "Future-Proof Architecture",
      description: "We build software that evolves with your changing needs."
    },
    {
      icon: <FaCheckCircle className="text-orange-600 text-2xl" />,
      title: "End-to-End Ownership",
      description: "We handle everything from requirements to deployment and maintenance."
    }
  ];

  return (
    <section className="px-4 md:px-10 py-20 max-w-7xl mx-auto">
      <div className="flex items-center mb-10">
        <span className="w-4 h-4 bg-orange-500 mr-2"></span>
        <h2 className="text-3xl font-bold text-gray-900">
          Why Choose HH TECH for Custom Software
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

export default SoftwareWhyChoose;