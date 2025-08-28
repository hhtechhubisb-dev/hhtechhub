import React, { useState, useEffect, useCallback } from "react";

const MobileDevelopmentTechSlider = ({ 
  techIcons, 
  slidesToShow = 6 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  
  // Create extended array for seamless looping (original + first slidesToShow items)
  const extendedIcons = [...techIcons, ...techIcons.slice(0, slidesToShow)];
  const totalItems = extendedIcons.length;

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
    <div className="mt-16 px-4 md:px-10 max-w-7xl mx-auto">
      <div className="flex items-center mb-8">
        <span className="w-4 h-4 bg-orange-500 mr-2"></span>
        <h2 className="text-3xl font-bold text-gray-900">
          Our Mobile Technology Ecosystem
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div 
          className="flex"
          style={{
            transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)`,
            transition: isTransitioning ? 'transform 500ms ease-in-out' : 'none'
          }}
        >
          {extendedIcons.map((tech, idx) => (
            <div
              key={`${tech.alt}-${idx}`}
              className="flex-shrink-0 px-2 sm:px-4 flex items-center justify-center"
              style={{ 
                width: `${100 / slidesToShow}%`, 
                minWidth: `${100 / slidesToShow}%` 
              }}
            >
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100  transition-all duration-300 hover:shadow-lg flex items-center justify-center h-20 sm:h-24 w-full group">
                <img
                  src={tech.src}
                  alt={tech.alt}
                  className="h-10 sm:h-12 opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
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

export default MobileDevelopmentTechSlider;