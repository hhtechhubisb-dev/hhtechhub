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

const GraphicsDesignWhyChoose = ({ whyChooseItems = [] }) => (
  <section className="px-4 md:pnnnnnnnnx-10 py-20 max-w-7xl mx-auto">
    <div className="flex items-center mb-10">
      <span className="w-4 h-4 bg-orange-500 mr-2"></span>
      <h2 className="text-3xl font-bold text-gray-900">
        Why Choose HH TECH for Design Services
      </h2>
    </div>

    <div className="grid md:grid-cols-2 gap-8 mb-20">
      {whyChooseItems.map((item, idx) => {
        const IconComponent = iconComponents[item.icon];
        return (
          <div
            key={idx}
            className="p-8 rounded-lg border-l-4 border-orange-500 hover:shadow-md transition-all duration-300 group"
          >
            <div className="flex items-start">
              <div className="bg-orange-100 p-3 rounded-lg mr-4 group-hover:bg-orange-200 transition-colors duration-300">
                <IconComponent className="text-orange-600 text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default GraphicsDesignWhyChoose;
