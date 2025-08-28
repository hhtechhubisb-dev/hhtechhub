const GraphicsDesignServicesList = ({ services }) => (
  <section className="px-4 md:px-10 py-20 max-w-7xl mx-auto">
    <div className="flex items-center mb-10">
      <span className="w-4 h-4 bg-orange-500 mr-2"></span>
      <h2 className="text-3xl font-bold text-gray-900">
        Our Design Service Offerings
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

export default GraphicsDesignServicesList;