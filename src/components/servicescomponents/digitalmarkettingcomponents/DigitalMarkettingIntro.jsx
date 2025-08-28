import { Link } from "react-router-dom";

const DigitalMarketingIntro = () => {
  return (
    <section className="py-20 px-4 md:px-10 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="flex items-center mb-4">
            <span className="w-4 h-4 bg-orange-500 mr-2"></span>
            <h2 className="text-3xl font-bold text-gray-900">
              Results-Driven Digital Marketing
            </h2>
          </div>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We create comprehensive digital marketing strategies that drive measurable results, from increased website traffic to higher conversion rates and improved ROI.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Our full-service approach combines creativity with analytics to deliver campaigns that resonate with your audience and achieve your business objectives.
          </p>
          <Link to="/get-quote">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg shadow-md font-medium transition-all duration-300 hover:shadow-lg">
              Get Marketing Consultation
            </button>
          </Link>
        </div>
        <div className="order-1 md:order-2 relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl opacity-20 blur-sm"></div>
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80" 
            alt="Digital Marketing Services" 
            className="relative rounded-xl w-full z-10 shadow-xl border-4 border-white transition-transform duration-500 hover:scale-105" 
          />
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingIntro;