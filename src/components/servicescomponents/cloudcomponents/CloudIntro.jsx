import { Link } from "react-router-dom";

const CloudIntro = () => {
  return (
    <section className="py-20 px-4 md:px-10 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="flex items-center mb-4">
            <span className="w-4 h-4 bg-orange-500 mr-2"></span>
            <h2 className="text-3xl font-bold text-gray-900">
              Cloud Infrastructure As a Service - Tailored To Your Needs
            </h2>
          </div>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We design, deploy, and manage <span className="font-bold">cloud computing services</span> that align perfectly with your business goals, from <span className="font-bold">AWS cloud services</span> to <span className="font-bold">Microsoft Azure, Google Cloud Platform, Digital Ocean, and Heroku.</span>
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We choose, implement, and manage the right platform that fits your business. Whether you need secure <span className="font-bold">cloud storage for business, high-performance databases, or serverless architectures</span>, our Cloud Experts analyze the client's requirements first and then start work on the best cloud platforms.
          </p> 
          <p className="text-gray-600 mb-8 leading-relaxed">
            If you want to visit our software house is located in Rawalpindi near the commercial market. We also serve clients from Islamabad, Karachi, and Lahore, and across Pakistan and globally as well. We have experts who work in every niche like ecommerce, healthcare, fintech, educational, government and more.
          </p>
          <Link to="/get-quote">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg shadow-md font-medium transition-all duration-300 hover:shadow-lg">
              Talk to a Cloud Expert
            </button>
          </Link>
        </div>
        <div className="order-1 md:order-2 relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl opacity-20 blur-sm"></div>
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80" 
            alt="Cloud Services" 
            className="relative rounded-xl w-full z-10 shadow-xl border-4 border-white transition-transform duration-500 hover:scale-105" 
          />
        </div>
      </div>
    </section>
  );
};

export default CloudIntro;