import React, { useState, useEffect, useCallback } from "react";

const techIcons = [
  { src: "/assets/docker.svg", alt: "Docker" },
  { src: "/assets/kubernets.svg", alt: "Kubernetes" },
  { src: "/assets/jenkins.svg", alt: "Jenkins" },
  { src: "/assets/terraform.svg", alt: "Terraform" },
  { src: "/assets/githubactions.svg", alt: "GitHub Actions" },
  { src: "/assets/ansible.svg", alt: "Ansible" },
  { src: "/assets/prometheus.svg", alt: "Prometheus" },
  { src: "/assets/grafana.svg", alt: "Grafana" },
  { src: "/assets/helm.svg", alt: "Helm" },
  { src: "/assets/argocd.svg", alt: "ArgoCD" },
  { src: "/assets/istio.svg", alt: "Istio" },
  { src: "/assets/aws.svg", alt: "AWS ECS" }
];

const DevOpsTechSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slidesToShow = 6;
  
  // Create extended array for seamless looping (original + first 6 items)
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
    <div className="mt-16 w-full max-w-7xl mx-auto px-4">
      <div className="flex items-center mb-8">
        <span className="w-4 h-4 bg-orange-500 mr-2"></span>
        <h2 className="text-3xl font-bold text-gray-900">
          DevOps Technologies We Work With
        </h2>
      </div>
      
      <div className="overflow-hidden py-4">
        <div 
          className="flex w-full"
          style={{
            transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)`,
            transition: isTransitioning ? 'transform 500ms ease-in-out' : 'none'
          }}
        >
          {extendedIcons.map((tech, idx) => (
            <div 
              key={`${tech.alt}-${idx}`} 
              className="flex-shrink-0 px-2 md:px-4 flex items-center justify-center"
              style={{ width: `${100 / slidesToShow}%` }}
            >
              <div className="p-6 rounded-lg border-l-4 hover:shadow-md transition-all duration-300 flex items-center justify-center h-24 w-full group bg-white">
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

export default DevOpsTechSlider;