import { Link } from "react-router-dom";

const MobileDevelopmentIntro = () => (
  <section className="py-20 px-4 md:px-10 max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1">
        <div className="flex items-center mb-4">
          <span className="w-4 h-4 bg-orange-500 mr-2"></span>
          <h2 className="text-3xl font-bold text-gray-900">
            Mobile App Development Service Pakistan
          </h2>
        </div>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Transform your business into high-performance, user-friendly mobile applications. HH Tech Hub, provides best mobile app development services in Pakistan. Trusted by startups and enterprises.
        </p>
        <h3 className="font-bold text-gray-900">
          Tailored IOS and Android App Development Services - For Your Business Growth
        </h3>
        <p className="text-gray-600 mb-8 leading-relaxed">
          HH Tech Hub provides affordable app development services. Whether you're a small or a running business, our experienced team covers you all. We developed high-performance apps for iOS and Android. We have a professional developer who provides custom mobile application services that are scalable, user-friendly, and aligned with your business goals.
        </p>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Our expert developers, UI/UX designers, and QA engineers who design apps that offer intuitive navigation, seamless functionality, and long-term maintainability. We focus on solving problems, driving engagement, improving efficiency, and supporting growth.
        </p>
        <p className="text-gray-600 mb-8 leading-relaxed">
          We utilize mobile app technologies, such as Flutter, React Native, Kotlin, and Swift. We build apps that are fast, run smoothly, and are compatible with industry security standards
        </p>
        <Link to="/get-quote">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg shadow-md font-medium transition-all duration-300 hover:shadow-lg">
            Request Mobile Consultation
          </button>
        </Link>
      </div>
      <div className="order-1 md:order-2 relative">
        <div className="absolute -inset-4 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl opacity-20 blur-sm"></div>
        <img
          src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80"
          alt="Mobile Development"
          className="relative rounded-xl w-full z-10 shadow-xl border-4 border-white transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  </section>
);

export default MobileDevelopmentIntro;