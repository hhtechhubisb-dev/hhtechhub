import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
const iconComponents = {
  HiOutlineLightBulb,
  BsFillPeopleFill,
  MdLocationOn,
  FaCheckCircle
};

const WebDevelopmentWhyChoose = ({ whyChooseItems }) => (
  <section className="px-4 md:px-10 py-20 max-w-7xl mx-auto">
    <div className="flex items-center mb-10">
      <span className="w-4 h-4 bg-orange-500 mr-2"></span>
      <h2 className="text-3xl font-bold text-gray-900">
        Why Choose HH Tech HUB?
      </h2>
    </div>

    <div className="grid md:grid-cols-2 gap-8 mb-20">
      {whyChooseItems.map((item, idx) => {
        const IconComponent = iconComponents[item.icon];
        return (
          <div key={idx} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group border-l-4 border-orange-500 hover:border-l-8">
            <div className="flex items-start">
              <IconComponent className="text-orange-500 text-3xl mr-4 mt-1 transition-transform duration-300 group-hover:scale-110" />
              <div>
                <h3 className="font-semibold text-xl mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default WebDevelopmentWhyChoose;