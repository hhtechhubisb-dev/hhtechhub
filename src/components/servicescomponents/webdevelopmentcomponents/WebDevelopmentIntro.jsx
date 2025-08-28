import { Link } from "react-router-dom";

const WebDevelopmentIntro = () => (
  <section className="py-20 px-4 md:px-10 max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1">
        <div className="flex items-center mb-4">
          <span className="w-4 h-4 bg-orange-500 mr-2"></span>
          <h2 className="text-3xl font-bold text-gray-900">
            Trusted Web Development Service Provider - Tailored to Your Needs
          </h2>
        </div>
        <p className="text-gray-600 mb-4 leading-relaxed">
          HH Tech HUB offers <span className="font-bold">custom web development services </span> backed by years of technical expertise and a clear focus on business outcomes. Our skilled developers integrate advanced UI/UX design with secure, scalable backend (Nodejs, Python/Django, Java/Spring, .Netcore, Laravel/PHP) to create fast, reliable, and user-focused applications.<br />

          As a top-tier web development company in Islamabad, we serve startups, SMEs, and enterprise-level clients with equal commitment to quality. Our software house is located in the heart of Rawalpindi's commercial market, and managing clients worldwide, we combine localized support with global delivery standards.     
          <br /> If you're seeking a reliable <span className="font-bold">web development company in Islamabad</span> web development company in Islamabad or want results-driven <span className="font-bold">web development service in Islamabad</span>, HH Tech HUB delivers full-spectrum web solutions that meet industry standards and exceed client expectations.
        </p>
        <Link to="/get-quote">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg shadow-md font-medium transition-all duration-300 hover:shadow-lg">
            Request a Consultation
          </button>
        </Link>
      </div>
      <div className="order-1 md:order-2 relative">
        <div className="absolute -inset-4 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl opacity-20 blur-sm"></div>
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
          alt="Web Development"
          className="relative rounded-xl w-full z-10 shadow-xl border-4 border-white transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  </section>
);

export default WebDevelopmentIntro;