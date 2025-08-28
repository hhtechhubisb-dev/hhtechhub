import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { IoMdCheckmark } from "react-icons/io";

const ServicesCard = ({ icon, heading, description, listItems }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full md:w-[48%] bg-white rounded-lg shadow-md border border-orange-100 hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div
        className="flex items-center justify-between bg-orange-500 text-white px-4 py-3 rounded-t-lg cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">{icon}</span>
          <h3 className="text-xl font-semibold">{heading}</h3>  </div>
        <FaChevronDown
          className={`transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>

      {/* Body */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-[500px] p-4' : 'max-h-0 p-0'}`}
      >
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <ul className="list-none space-y-2 text-sm text-gray-700">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-white bg-orange-500 rounded-full w-5 h-5 flex justify-center items-center text-xs">
                <IoMdCheckmark />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicesCard;
