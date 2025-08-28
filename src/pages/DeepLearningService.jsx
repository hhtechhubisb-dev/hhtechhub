import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaQuestionCircle } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";

const DeepLearningService = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="text-[#1f1f1f] font-sans bg-gray-50">
      {/* Deep Learning - Hero Section */}
      <section className="relative bg-gradient-to-r from-black to-[#2a1a0f] text-white py-20 sm:py-24 md:py-28 px-4 sm:px-6 md:px-10 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1526925539332-aa3b66e35444?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0')",
            }}
          />
          <div className="absolute inset-0 bg-orange-700 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Deep Learning Service in
            <span className="text-orange-500"> Pakistan</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
            Unlock the Power of Deep Learning Neural Networks. HH Tech Hub
            provides advanced deep learning service in Pakistan and worldwide.
            Offering intelligent, scalable solutions for complex business
            challenges.
          </p>
          <Link to="/get-quote">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 rounded-lg shadow-lg font-medium transition-all duration-300 transform hover:scale-105">
              Start a DL Project
            </button>
          </Link>
        </div>
      </section>

      {/* Deep Learning - Intro + Image */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="flex items-center mb-4">
              <span className="w-4 h-4 bg-orange-500 mr-2"></span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Deep Learning and Our Specialist
              </h2>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
              HH Tech Hub delivers{" "}
              <span className="font-bold">deep learning solutions</span> that
              transform data into intelligent actions. Whether you're a startup
              in<span className="font-bold"> karachi</span>, a fintech company
              in Lahore, or an enterprise in{" "}
              <span className="font-bold">Islamabad</span>, our experts will
              easily handle and automate processes, extract insights, and
              enhance performance.
              <br />
              <br />
              Our developers are specialized in deep learning with Python,
              TensorFlow, and PyTorch to build scalable AI systems. From vision
              to voice, we help you turn raw data into business intelligence.{" "}
              <span className="font-bold"> What do we offer?</span>
            </p>

            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1 text-sm sm:text-base">
              <li>
                Build custom <span className="font-bold"> deep learning models</span>
              </li>
              <li>Automate smart systems that learn and adapt.</li>
              <li>
                Extract patterns from unstructured data (text, image, audio).
              </li>
              <li>
                Enhance products with predictive, personalized, or interactive
                capabilities.
              </li>
            </ul>

            <Link to="/get-quote">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 rounded-lg shadow-md font-medium transition-all duration-300">
                Talk to an Expert
              </button>
            </Link>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="absolute -inset-4 bg-orange-500 rounded-xl opacity-20 hidden sm:block"></div>
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
              alt="Deep Learning Visualization"
              className="relative rounded-xl w-full z-10 shadow-xl border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* Deep Learning - Services and Use Cases */}
      <section className="px-4 sm:px-6 md:px-10 py-16 sm:py-20 max-w-7xl mx-auto">
        <div className="flex items-center mb-4">
          <span className="w-4 h-4 bg-orange-500 mr-2"></span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            What We Offer in Deep Learning Services
          </h2>
        </div>

        <p className="text-gray-600 mb-10 max-w-3xl text-sm sm:text-base">
          Our deep learning services are trusted by companies in healthcare,
          retail, logistics, and digital platforms. From model design to
          deployment, we build AI models that scale your business.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "Computer Vision",
              desc: "Detect objects, recognize faces, analyze medical images, and more using visual AI. Our models deliver real-time decision-making from image and video data.",
            },
            {
              title: "Natural Language Processing (NLP)",
              desc: "Understand, classify, and generate human language. We create NLP solutions for chatbots, sentiment analysis, and intelligent document processing.",
            },
            {
              title: "Speech Recognition & Audio AI",
              desc: "Build voice-powered applications with speech-to-text, keyword spotting, and audio event detection. Ideal for mobile apps, smart devices, and call centers.",
            },
            {
              title: "Anomaly Detection & Predictive Models",
              desc: "Identify fraud, detect system failures, or forecast trends. Our models monitor data in real-time and flag abnormal patterns with high accuracy.",
            },
            {
              title: "Recommendation Systems",
              desc: "Offer personalized product, content, or service recommendations using user behavior and neural network-based filtering.",
            },
            {
              title: "Model Training & Optimization",
              desc: "Train, fine-tune, and optimize deep learning architectures (CNNs, RNNs, Transformers) using cloud GPUs or local resources.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl shadow-sm bg-white border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:shadow-md"
            >
              <div className="w-8 h-1 bg-orange-500 mb-3"></div>
              <h3 className="font-semibold text-lg sm:text-xl mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deep Learning - Technologies & Why Choose Us */}
      <section className="px-4 sm:px-6 md:px-10 py-16 sm:py-20 max-w-7xl mx-auto">
        <div className="flex items-center mb-10">
          <span className="w-4 h-4 bg-orange-500 mr-2"></span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Deep Learning Technologies We Use
          </h2>
        </div>

        <div className="flex flex-wrap gap-6 sm:gap-8 mb-20 justify-center md:justify-start">
          {[
            { src: "/assets/tensorflow.svg", alt: "TensorFlow" },
            { src: "/assets/pytorch.svg", alt: "PyTorch" },
            { src: "/assets/keras.svg", alt: "Keras" },
            { src: "/assets/onnx.png", alt: "ONNX" },
            { src: "/assets/huggingface.svg", alt: "HuggingFace" },
          ].map((tech, idx) => (
            <div
              key={idx}
              className="bg-white p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <img
                src={tech.src}
                alt={tech.alt}
                className="h-10 sm:h-12 opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <span className="w-4 h-4 bg-orange-500 mr-2"></span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Why Choose HH Tech Hub?
            </h2>
          </div>

          <p className="text-gray-600 max-w-3xl text-sm sm:text-base">
            As a trusted name in AI development, HH Tech Hub is among the top
            deep learning companies in Pakistan, with clients across Karachi,
            Lahore, Islamabad, and beyond.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-20">
          {[
            {
              icon: <HiOutlineLightBulb className="text-orange-500 text-3xl mr-4 mt-1" />,
              title: "5+ Years of Experience",
              desc: "Our expert developer built and deployed many real-world Deep learning systems for finance, e-commerce, health, and manufacturing.",
            },
            {
              icon: <BsFillPeopleFill className="text-orange-500 text-3xl mr-4 mt-1" />,
              title: "50+ Skilled Professionals",
              desc: "Our company has a full-stack AI expert team, including deep learning engineers, data scientists, MLOps specialists, and Python developers.",
            },
            {
              icon: <MdLocationOn className="text-orange-500 text-3xl mr-4 mt-1" />,
              title: "World Wide Expertise",
              desc: "We serve many clients in Pakistan, and we also provide services in the USA, Canada, Germany, and UK. Delivering world-class AI with local insight.",
            },
            {
              icon: <FaCheckCircle className="text-orange-500 text-3xl mr-4 mt-1" />,
              title: "Client-Centred Mindset",
              desc: "We are more than just a tech provider. We believe in building long-term partnerships that prioritise your business growth.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group border-l-4 border-orange-500 flex"
            >
              {item.icon}
              <div>
                <h3 className="font-semibold text-lg sm:text-xl mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="flex items-center mb-10">
          <span className="w-4 h-4 bg-orange-500 mr-2"></span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6 max-w-6xl mx-auto">
          {[
            {
              question: " What is Deep Learning in Simple Words?",
              answer:
                "Deep learning is a type of AI where machines learn from big data using neural networks that simulate the human brain. It helps computers recognize patterns in images, speech, or text without being explicitly programmed.",
            },
            {
              question: "Are Deep Learning and Machine Learning the Same?",
              answer:
                " No, deep learning is a subset of machine learning. While Machine learning uses algorithms to learn from data, Deep learning uses complex neural networks to handle more advanced tasks like image recognition and natural language processing.",
            },
            {
              question: "How Do Deep Learning Models Work?",
              answer:
              <>
              Deep learning models process big data through multiple layers of neural networks, learning patterns and improving accuracy over time. They<strong> train </strong>on data and adjust to make better predictions or classifications.
              </>
                
            },
            {
              question: "Does ChatGPT Use Deep Learning AI?",
              answer:
              <>
              Yes, ChatGPT is powered by Deep Learning. Specifically, a type of neural network called a
              <strong> Transformer. </strong>It uses massive data and billions of parameters to understand language and act like a human brain.
              </>
            },
            {
              question: "What Are the Types of Deep Learning?",
              answer:
              <>
              The types of Deep Learning include <strong >CNNs </strong>for images, <strong>RNNs</strong>and<strong> LSTMs</strong> for sequential data <strong>GANs </strong>for data generation, and <strong> Transformers </strong>for language tasks. Each is specialized for solving real life AI problems.
              </>
               
            },
          ].map((faq, idx) => (
            <div
              key={idx}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-orange-500 border border-gray-100 border-t-0 border-r-0 border-b-0"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-start justify-between text-left"
              >
                <div className="flex items-start">
                  <FaQuestionCircle className="text-orange-500 text-lg sm:text-xl mr-3 mt-1 flex-shrink-0" />
                  <h3 className="font-semibold text-base sm:text-lg text-gray-800">
                    {faq.question}
                  </h3>
                </div>
                <span className="text-orange-500 text-base sm:text-lg">
                  {activeIndex === idx ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              {activeIndex === idx && (
                <div className="mt-4 pl-9 pr-2 text-gray-600 text-sm sm:text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DeepLearningService;
