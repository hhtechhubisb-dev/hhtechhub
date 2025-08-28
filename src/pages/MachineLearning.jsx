import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaQuestionCircle } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";

const MachineLearning = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="text-[#1f1f1f] font-sans bg-gray-50">
      {/* Machine Learning 1 - Hero Section */}
      <section className="relative bg-gradient-to-r from-black to-[#2a1a0f] text-white py-16 md:py-28 px-4 md:px-10 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/assets/tensorflow.svg')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-orange-900 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Machine Learning Services in <span className="text-orange-500">Pakistan</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-6 md:mb-8 text-gray-300">
            Transforming Data into Real-Time Automation. HH Tech Hub's machine learning services help businesses across Pakistan.
          </p>
          <Link to="/get-quote">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg shadow-lg font-medium transition-all duration-300 transform hover:scale-105 text-sm md:text-base">
              Get a Quote
            </button>
          </Link>
        </div>
      </section>

    {/* Machine Learning 2 - Intro + Image */}
<section className="py-12 md:py-20 px-4 md:px-10 max-w-7xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
    {/* Text Section */}
    <div className="order-2 md:order-1 flex flex-col justify-center">
      <div className="flex items-center mb-2">
        <span className="w-4 h-4 bg-orange-500 mr-2 rounded-sm"></span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          HH Tech Hub Machine Learning As a Service
        </h2>
      </div>
      <p className="text-gray-600 mb-4 leading-relaxed text-base sm:text-lg">
        Every business operates differently, and at HH Tech Hub, we provide machine learning services that reflect reality. Whether you run a startup or a large enterprise in Pakistan, our expert Machine Learning Developers' strategies know your specific business objectives.
      </p>
      <div className="text-gray-600 mb-6 leading-relaxed text-base sm:text-lg">
        <p>
          With AI, predictive analytics, and real-time data processing, our team's expertise includes:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-1">
          <li>Create and apply custom machine learning models.</li>
          <li>Automate repetitive and manual workflows.</li>
          <li>Identify patterns and trends hidden in business.</li>
          <li>Develop evidence-based decisions that drive growth.</li>
        </ul>
      </div>
      <p className="mb-4 text-base sm:text-lg">
        With industry experience and experts, we help your business turn data into a strategic asset.
      </p>
      <Link to="/get-quote">
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg shadow-md font-medium transition-all duration-300 text-base sm:text-lg">
          Request Consultation
        </button>
      </Link>
    </div>

    {/* Image Section */}
    <div className="order-1 md:order-2 relative flex justify-center">
      <div className="absolute -inset-2 md:-inset-4 bg-orange-500 rounded-xl opacity-20"></div>
      <img
        src="/assets/machinemiddle.jpg"
        alt="Machine Learning Illustration"
        className="relative rounded-xl w-full max-w-md md:max-w-full z-10 shadow-xl border-4 border-white object-cover"
      />
    </div>
  </div>
</section>

      {/* Machine Learning 3 - Services and Use Cases */}
      <section className="px-4 md:px-10 py-12 md:py-20 max-w-7xl mx-auto">
        <div className="flex items-center mb-6 md:mb-10">
          <span className="w-4 h-4 bg-orange-500 mr-2"></span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Machine Learning Services & Use Cases
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {[ 
            {
              title: "Predictive Analytics",
              desc: "Predict future trends with confidence. HH Tech Hub use historical data to analyse customer behaviour, market shifts, and operational outcomes that help you make proactive, strategic decisions.",
            },
            {
              title: "Speech Recognition",
              desc: "Convert spoken words into structured & searchable data. Ideal for customer support systems, mobile apps, and AI-powered tools where voice interaction matters.",
            },
            {
              title: "Natural Language Processing",
              desc: "NLP helps systems to understand and respond to human language. Our NLP solutions improve communication and automate language-based tasks.",
            },
            {
              title: "Computer Vision",
              desc: "Transform visual data into meaningful insights. HH Tech Hub creates applications like facial recognition, object detection, quality control, and more.",
            },
            {
              title: "Generative AI",
              desc: "HH Tech creates innovation with generative AI models that create text, images, or synthetic data. Best for content creation, testing, or simulation-based workflows.",
            },
          ].map((service, idx) => (
            <div 
              key={idx} 
              className="p-4 md:p-6 rounded-xl shadow-sm bg-white border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:shadow-md"
            >
              <div className="w-8 h-1 bg-orange-500 mb-2 md:mb-3"></div>
              <h3 className="font-semibold text-lg md:text-xl mb-2 md:mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Machine Learning 4 - Technologies & Process */}
      <section className="px-4 md:px-10 py-12 md:py-20 max-w-7xl mx-auto">
        <div className="flex items-center mb-6 md:mb-10">
          <span className="w-4 h-4 bg-orange-500 mr-2"></span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Machine Learning Technologies We Use
          </h2>
        </div>
        
        <div className="flex flex-wrap gap-4 md:gap-8 mb-12 md:mb-20 justify-center md:justify-start">
          {[ 
            { src: "/assets/tensorflow.svg", alt: "TensorFlow" },
            { src: "/assets/pytorch.svg", alt: "PyTorch" },
            { src: "/assets/scikitlearn.svg", alt: "Scikit-learn" },
            { src: "/assets/keras.svg", alt: "Keras" },
            { src: "/assets/opencv.svg", alt: "OpenCV" },
          ].map((tech, idx) => (
            <div key={idx} className="bg-white p-2 md:p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <img src={tech.src} alt={tech.alt} className="h-8 md:h-12 opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        <div className="flex items-center mb-6 md:mb-10">
          <span className="w-4 h-4 bg-orange-500 mr-2"></span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Why Choose HH Tech Hub for Machine Learning in Pakistan?
          </h2>
        </div>
        <div className="mb-3 text-sm md:text-base">
          <p>HH Tech Hub recognised Top AI/ML development agencies in Pakistan, committed to delivering affordable, & scalable machine learning solutions that create real business impact.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-12 md:mb-20">
          <div className="bg-white p-4 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group border-l-4 border-orange-500">
            <div className="flex items-start">
              <HiOutlineLightBulb className="text-orange-500 text-2xl md:text-3xl mr-3 md:mr-4 mt-0.5 md:mt-1" />
              <div>
                <h3 className="font-semibold text-lg md:text-xl mb-1 md:mb-2 text-gray-800">5+ Years of Experience:</h3>
                <p className="text-gray-600 text-sm md:text-base">Approximately 5+ years in this field, our machine learning developers have delivered impactful solutions in all kinds of businesses.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group border-l-4 border-orange-500">
            <div className="flex items-start">
              <BsFillPeopleFill className="text-orange-500 text-2xl md:text-3xl mr-3 md:mr-4 mt-0.5 md:mt-1" />
              <div>
                <h3 className="font-semibold text-lg md:text-xl mb-1 md:mb-2 text-gray-800">250+ Skilled Professionals:</h3>
                <p className="text-gray-600 text-sm md:text-base">Our software house includes AI developers, ML experts, data engineers, and project managers. We're experts at turning ideas into intelligent systems.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group border-l-4 border-orange-500">
            <div className="flex items-start">
              <MdLocationOn className="text-orange-500 text-2xl md:text-3xl mr-3 md:mr-4 mt-0.5 md:mt-1" />
              <div>
                <h3 className="font-semibold text-lg md:text-xl mb-1 md:mb-2 text-gray-800">Global Reach, Local Expertise:</h3>
                <p className="text-gray-600 text-sm md:text-base">While based in Pakistan, we also deal with clients of the USA, UK, UAE, and beyond, with local insight and global expertise.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group border-l-4 border-orange-500">
            <div className="flex items-start">
              <FaCheckCircle className="text-orange-500 text-2xl md:text-3xl mr-3 md:mr-4 mt-0.5 md:mt-1" />
              <div>
                <h3 className="font-semibold text-lg md:text-xl mb-1 md:mb-2 text-gray-800">Client-Centred Mindset:</h3>
                <p className="text-gray-600 text-sm md:text-base">We are more than just a tech provider. We believe in building long-term partnerships that prioritise your business growth.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="flex items-center mb-6 md:mb-10">
          <span className="w-4 h-4 bg-orange-500 mr-2"></span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4 md:space-y-6 max-w-6xl mx-auto">
          {[ 
            {
              question: "What is machine learning and how does it work?",
              answer:
                "Machine learning is a branch of artificial intelligence that enables systems to learn from data and improve over time. It works by training algorithms on historical data to recognize patterns and make accurate predictions or decisions when presented with new data.",
            },
            {
              question: "What is the difference between machine learning and deep learning?",
              answer:
                "Machine learning uses various algorithms to analyze data and make predictions. Deep learning is a specialized area within machine learning that relies on neural networks with multiple layers, making it ideal for handling complex tasks like voice recognition, image analysis, and natural language understanding.",
            },
            {
              question: "What machine learning services does HH Tech Hub provide?",
              answer:
                "At HH Tech Hub, we offer complete ML development services, including data preprocessing, custom model building, system integration, and post-deployment support — all tailored to meet the needs of businesses in Pakistan and beyond.",
            },
            {
              question: "Why is machine learning important for businesses in Pakistan?",
              answer:
                "Machine learning helps local businesses automate routine tasks, personalize customer interactions, and make smarter decisions based on real-time data. It's a key driver of innovation and competitive advantage in today's fast-paced market.",
            },
            {
              question: "Which machine learning tools are recommended for beginners?",
              answer:
                "Popular tools for getting started include Scikit-learn, TensorFlow, Keras, and Pandas. These are the same tools our experts use to build reliable and scalable solutions at HH Tech Hub.",
            },
          ].map((faq, idx) => (
            <div key={idx} className="bg-white p-4 md:p-6 rounded-lg shadow-sm border-l-4 border-orange-500 border border-gray-100 border-t-0 border-r-0 border-b-0">
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-start justify-between text-left"
              >
                <div className="flex items-start">
                  <FaQuestionCircle className="text-orange-500 text-lg md:text-xl mr-2 md:mr-3 mt-0.5 md:mt-1 flex-shrink-0" />
                  <h3 className="font-semibold text-base md:text-lg text-gray-800">
                    {faq.question}
                  </h3>
                </div>
                <span className="text-orange-500 text-lg">
                  {activeIndex === idx ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              {activeIndex === idx && (
                <div className="mt-3 md:mt-4 pl-7 md:pl-9 pr-2 text-gray-600 text-sm md:text-base">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MachineLearning;