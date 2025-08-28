import { Link } from "react-router-dom";

const SoftwareServices = () => {
  const services = [
    {
      title: "Business Process Automation",
      desc: "Custom systems that automate repetitive tasks and streamline workflows to boost productivity.",
    },
    {
      title: "Data Management Solutions",
      desc: "Tailored databases and interfaces for collecting, processing, and analyzing your business data.",
    },
    {
      title: "Industry-Specific Software",
      desc: "Specialized applications designed for your particular industry requirements and regulations.",
    },
    {
      title: "Legacy System Modernization",
      desc: "Transforming outdated applications into modern, maintainable systems with improved functionality.",
    },
    {
      title: "Integration Services",
      desc: "Connecting disparate systems to create unified workflows and data visibility.",
    },
    {
      title: "Mobile Companion Apps",
      desc: "Extend your software's functionality to mobile devices with synchronized data access.",
    },
  ];

  return (
    <section className="px-4 md:px-10 py-20 max-w-7xl mx-auto">
      <div className="flex items-center mb-10">
        <span className="w-4 h-4 bg-orange-500 mr-2"></span>
        <h2 className="text-3xl font-bold text-gray-900">
          Our Custom Software Offerings
        </h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {services.map((service, idx) => (
          <div 
            key={idx} 
            className="p-6 rounded-lg border-l-4 border-orange-500 hover:shadow-md transition-all duration-300 group"
          >
            <div className="w-8 h-1 bg-orange-500 mb-3 transition-all duration-300 group-hover:w-12"></div>
            <h3 className="font-semibold text-xl mb-3 text-gray-800">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SoftwareServices;