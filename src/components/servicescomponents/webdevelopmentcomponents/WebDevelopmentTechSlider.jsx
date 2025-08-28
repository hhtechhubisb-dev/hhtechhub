import React, { useState, useEffect, useCallback } from "react";

const WebDevelopmentTechSlider = ({ 
  techIcons, 
  slidesToShow = 6 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  
  // Create extended array for seamless looping
  const extendedIcons = [...techIcons, ...techIcons.slice(0, slidesToShow)];

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => {
      if (prev >= techIcons.length) {
        setIsTransitioning(false);
        return 1; // Reset to first duplicate item
      }
      return prev + 1;
    });
  }, [techIcons.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [nextSlide]);

  // Handle the instant reset when we reach the end
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <div className="mt-16 w-full max-w-7xl mx-auto px-4">
      <div className="flex items-center mb-8">
        <span className="w-4 h-4 bg-orange-500 mr-2"></span>
        <h2 className="text-3xl font-bold text-gray-900">
          Our Technology Partners
        </h2>
      </div>

      <div className="overflow-hidden py-4">
        <div 
          className="flex w-full"
          style={{
            transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)`,
            transition: isTransitioning ? 'transform 600ms cubic-bezier(0.25, 0.1, 0.25, 1)' : 'none'
          }}
        >
          {extendedIcons.map((tech, idx) => (
            <div
              key={`${tech.alt}-${idx}`}
              className="flex-shrink-0 px-2 md:px-4 flex items-center justify-center"
              style={{ width: `${100 / slidesToShow}%` }}
            >
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:shadow-md flex items-center justify-center h-24 w-full">
                <img
                  src={tech.src}
                  alt={tech.alt}
                  className="h-12 opacity-80 hover:opacity-100 transition-opacity duration-300"
                  title={tech.alt}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentTechSlider;