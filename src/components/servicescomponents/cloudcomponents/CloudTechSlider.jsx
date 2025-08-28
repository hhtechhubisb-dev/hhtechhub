import React, { useState, useEffect } from "react";

const techIcons = [
  { src: "/assets/aws.svg", alt: "AWS" },
  { src: "/assets/azure.svg", alt: "Azure" },
  { src: "/assets/gcp.svg", alt: "GCP" },
  { src: "/assets/DigitalOcean.svg", alt: "Digital Ocean" },
  { src: "/assets/heroku.svg", alt: "Heroku" },
  { src: "/assets/kubernets.svg", alt: "Kubernetes" },
  { src: "/assets/docker.svg", alt: "Docker" },
  { src: "/assets/terraform.svg", alt: "Terraform" },
  { src: "/assets/ansible.svg", alt: "Ansible" },
  { src: "/assets/prometheus.svg", alt: "Prometheus" },
  { src: "/assets/grafana.svg", alt: "Grafana" },
  // { src: "/assets/elk.svg", alt: "ELK Stack" }
];

const CloudTechSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 6;
  // Create extended array for seamless looping
  const extendedIcons = [...techIcons, ...techIcons.slice(0, slidesToShow)];
  const totalSlides = extendedIcons.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // When reaching the end of original items, reset to 0 without animation
        if (prevIndex >= techIcons.length) {
          return 1; // Jump to duplicate first item
        }
        return prevIndex + 1;
      });
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, []);

  // Handle the instant reset when we reach the end
  useEffect(() => {
    if (currentIndex > techIcons.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(0);
      }, 500); // Match this with your transition duration

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <div className="mt-16 w-full max-w-7xl mx-auto px-4">
      <div className="flex items-center mb-8">
        <span className="w-4 h-4 bg-orange-500 mr-2"></span>
        <h2 className="text-3xl font-bold text-gray-900">
          Cloud Technologies We Work With
        </h2>
      </div>
      
      <div className="overflow-hidden py-4">
        <div 
          className="flex transition-transform duration-500 ease-in-out w-full"
          style={{
            transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)`
          }}
        >
          {extendedIcons.map((tech, idx) => (
            <div 
              key={`${tech.alt}-${idx}`} 
              className="flex-shrink-0 px-2 md:px-4 flex items-center justify-center"
              style={{ width: `${100 / slidesToShow}%` }}
            >
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-orange-300 transition-all duration-300 hover:shadow-lg flex items-center justify-center h-24 w-full group">
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

export default CloudTechSlider;