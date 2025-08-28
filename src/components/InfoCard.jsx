import { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const InfoCard = ({ data }) => {
  // Array of light background colors
  const cardColors = [
    "bg-blue-50",
    "bg-green-50",
    "bg-purple-50",
    "bg-amber-50",
    "bg-rose-50",
    "bg-emerald-50",
    "bg-indigo-50",
    "bg-pink-50",
  ];

  // Array of corresponding icon background colors
  const iconColors = [
    "bg-blue-100 text-blue-600",
    "bg-green-100 text-green-600",
    "bg-purple-100 text-purple-600",
    "bg-amber-100 text-amber-600",
    "bg-rose-100 text-rose-600",
    "bg-emerald-100 text-emerald-600",
    "bg-indigo-100 text-indigo-600",
    "bg-pink-100 text-pink-600",
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-3 sm:px-4 py-6 sm:py-8 mb-6 sm:mb-9">
      {data.map((item, index) => {
        const [ref, inView] = useInView({
          threshold: 0.4,
          triggerOnce: true, // Only trigger once
        });

        const colorIndex = index % cardColors.length;
        const cardColor = cardColors[colorIndex];
        const iconColor = iconColors[colorIndex];

        return (
          <div
            key={index}
            ref={ref}
            className={`w-full max-w-[260px] sm:max-w-[280px] h-[160px] sm:h-[200px] ${cardColor} shadow-lg rounded-xl flex flex-col items-center justify-center text-center px-4 sm:px-6 py-4 sm:py-6 
              hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-opacity-10 border-gray-300 mx-auto`}
          >
            {/* Icon */}
            <div className={`${iconColor} p-3 sm:p-4 rounded-full mb-3 sm:mb-4 text-2xl sm:text-3xl`}>
              {item.icon}
            </div>

            {/* CountUp */}
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-700">
              {inView ? (
                <>
                  <CountUp start={0} end={parseInt(item.value)} duration={5.5} />
                  {parseInt(item.value) > 10 && "+"}
                </>
              ) : (
                "0"
              )}
            </h3>

            {/* Label */}
            <p className="text-base sm:text-lg font-medium text-gray-600 mt-1 sm:mt-2">
              {item.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default InfoCard;
