import React, { useEffect, useState } from "react";

const techIcons = [
  { src: "/assets/react.svg", alt: "React" },
  { src: "/assets/angular.svg", alt: "Angular" },
  { src: "/assets/nodejs.svg", alt: "Node.js" },
  { src: "/assets/dotnet.svg", alt: ".NET" },
  { src: "/assets/java.svg", alt: "Java" },
  { src: "/assets/python.svg", alt: "Python" },
  // { src: "/assets/electron.svg", alt: "Electron" },
  { src: "/assets/flutter.svg", alt: "Flutter" },
  { src: "/assets/postgres.svg", alt: "PostgreSQL" },
  { src: "/assets/mongodb.svg", alt: "MongoDB" },
  { src: "/assets/aws.svg", alt: "AWS" },
  { src: "/assets/docker.svg", alt: "Docker" },
];

const SoftwareTechSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 6;
  
  // Duplicate the items to create seamless infinite loop
  const sliderItems = [...techIcons, ...techIcons.slice(0, slidesToShow)];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        // When we reach the end of original items, reset to 0 without animation
        if (prev >= techIcons.length) {
          return 1; // Jump back to first item (with duplicate)
        }
        return prev + 1;
      });
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, []);

  // Handle the instant reset when we reach the end
  useEffect(() => {
    if (currentSlide > techIcons.length) {
      const timer = setTimeout(() => {
        setCurrentSlide(0);
      }, 500); // Match this with your transition duration

      return () => clearTimeout(timer);
    }
  }, [currentSlide]);

  return (
    <div className="mt-16 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center mb-8">
        <span className="w-4 h-4 bg-orange-500 mr-2"></span>
        <h2 className="text-3xl font-bold text-gray-900">
          Technologies We Work With
        </h2>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentSlide * 100) / slidesToShow}%)`,
          }}
        >
          {sliderItems.map((tech, idx) => (
            <div
              key={`${tech.alt}-${idx}`}
              className="flex-shrink-0 px-4"
              style={{ width: `${100 / slidesToShow}%` }}
            >
              <div className="p-6 rounded-lg  hover:shadow-md transition-all duration-300 flex items-center justify-center h-24 w-full group bg-white">
                <img
                  src={tech.src}
                  alt={tech.alt}
                  className="h-12 opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
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

export default SoftwareTechSlider;