import { Link } from "react-router-dom";

const SoftwareHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-black to-[#2a1a0f] text-white py-28 px-10 text-center overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-orange-900 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Custom <span className="text-orange-500">Software</span> Solutions
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
          Tailor-made software applications designed to solve your unique business challenges and drive efficiency.
        </p>
        <Link to="/get-quote">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg shadow-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            Start Your Project
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SoftwareHero;