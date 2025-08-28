const DigitalMarketingServices = () => {
  const services = [
    {
      title: "Search Engine Optimization",
      desc: "Comprehensive SEO services including technical optimization, content strategy, and link building to improve search rankings.",
    },
    {
      title: "Social Media Management",
      desc: "Full-service social media strategy, content creation, community management, and advertising across all platforms.",
    },
    {
      title: "Content Marketing",
      desc: "Strategic content creation including blogs, videos, infographics, and more to attract and engage your audience.",
    },
    {
      title: "Pay-Per-Click Advertising",
      desc: "Google Ads, social media ads, and display advertising campaigns optimized for maximum ROI.",
    },
    {
      title: "Email Marketing",
      desc: "Email campaign strategy, design, automation, and performance tracking to nurture leads and customers.",
    },
    {
      title: "Web Design & Development",
      desc: "Conversion-optimized website design and development with seamless UX/UI and technical SEO foundations.",
    },
  ];

  return (
    <section className="px-4 md:px-10 py-20 max-w-7xl mx-auto">
      <div className="flex items-center mb-10">
        <span className="w-4 h-4 bg-orange-500 mr-2"></span>
        <h2 className="text-3xl font-bold text-gray-900">
          Our Digital Marketing Service Offerings
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

export default DigitalMarketingServices;