import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";

const NlpService = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="text-[#1f1f1f] font-sans bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black to-[#2a1a0f] text-white py-16 md:py-28 px-4 md:px-10 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-orange-900 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl xl:text-6xl">
            Natural Language Processing Services in<span className="text-orange-500"> Pakistan</span>
          </h1>
          <p className="max-w-3xl mx-auto mb-6 text-base text-gray-300 md:text-lg lg:text-xl">
            Upgrade your business with our intelligent language solutions. HH Tech Hub offers Best Natural Language Processing Services in Pakistan. Transform Unstructured Text To Actionable Insights. Get in touch today for smarter AI solutions for business.
          </p>
          <Link to="/get-quote">
            <button className="px-6 py-2 md:px-8 md:py-3 font-medium text-white transition-all duration-300 transform bg-orange-600 rounded-lg shadow-lg hover:bg-orange-700 hover:scale-105">
              Build NLP Solutions
            </button>
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="px-4 py-12 md:py-20 mx-auto md:px-10 max-w-7xl">
        <div className="grid items-center gap-8 md:gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <div className="flex items-center mb-4">
              <span className="w-4 h-4 mr-2 bg-orange-500" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Transform Language into Insight with Advanced NLP Solutions</h2>
            </div>
            <div className="text-gray-600 leading-relaxed space-y-3 md:space-y-4 text-sm md:text-base">
              <p>
                We provide after-sales services, which is why HH Tech Hub is a Trusted and Leading Natural Language Processing Company in Pakistan. Our expert utilizes AI and deep learning techniques to analyze and interpret texts, speech, and sentiment, improving decision-making and enhancing customer experiences. We deliver tailored NLP solutions across key sectors:
              </p>
              <p>
                <span className="text-black font-bold">Healthcare:</span> Use NLP in healthcare in Pakistan to automate clinical documentation, support diagnosis, and summarize insights from patient records.
                Retail & E-commerce: Improve sentiment analysis, customer interaction, and product search using NLP-powered chatbots and text analytics.
              </p>
              <p>
                <span className="text-black font-bold">Finance:</span> We use Leverage NLP tools to streamline the process, extract insights from financial data, which enhances service delivery efficiency.
              </p>
              <p>
                <span className="text-black font-bold">Education</span> Use AI and Natural Language Processing to upgrade multilingual education, create dynamic content, and tailor learning to individual student needs.
              </p>
              <p>
                <span className="text-black font-bold">Public Sector:</span> Streamline citizen services through conversational AI and automated document handling
              </p>
              <p>Whether you need a Natural Language Processing chatbot development company or a strategic partner for NLP integration, HH Tech Hub delivers innovative, future-ready solutions using the latest Natural Language Processing models.</p>
            </div>

            <Link to="/get-quote">
              <button className="px-6 py-2 md:px-8 md:py-3 font-medium text-white transition-all duration-300 bg-orange-600 rounded-lg shadow-md hover:bg-orange-700 mt-3 md:mt-4 text-sm md:text-base">
                Schedule a Consultation
              </button>
            </Link>
          </div>
          <div className="relative order-1 md:order-2 group transition-all duration-500 ease-in-out">
            <div className="absolute bg-orange-500 -inset-2 md:-inset-4 rounded-xl opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 ease-in-out" />
            <img
              src="/assets/nlp1.jpg"
              alt="NLP AI"
              className="relative z-10 w-full border-4 border-white shadow-xl rounded-xl transform transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* NLP Use Cases Section */}
      <section className="px-4 pb-12 md:pb-20 mx-auto md:px-10 max-w-7xl">
        <div className="flex items-center mb-6 md:mb-10">
          <span className="w-4 h-4 mr-2 bg-orange-500" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Tailored NLP Services for Real-World Impact</h2>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Sentiment Analysis", desc: "Understand how customers feel about your brand, products, or services by analyzing emotional tone and intent in reviews, messages, and social media. Improve reputation management and user experience." },
            { title: "Text Summarization", desc: "Automatically reduce large documents or datasets into concise summaries. Perfect for news media, legal, or healthcare document management." },
            { title: "Language Translation", desc: "Break barriers with multilingual NLP solutions that ensure accurate, real-time language translation ideal for education, tourism, and cross-border communication." },
            { title: "Text Classification", desc: "Organize unstructured text (emails, reports, tickets) into meaningful categories using custom-trained NLP models. Empower automation and analytics." },
            { title: "Speech Recognition & Voice-to-Text", desc: "Convert voice into actionable data. Ideal for call centers, voice assistants, medical transcriptions, and accessibility-driven applications." },
            { title: "Named Entity Recognition (NER)", desc: "Extract people, places, organizations, and dates from text useful in compliance, research, CRM, and healthcare data intelligence." },
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 md:p-6 transition-all bg-white border border-gray-100 shadow-sm rounded-xl hover:border-orange-200 hover:shadow-md"
            >
              <div className="w-8 h-1 mb-2 md:mb-3 bg-orange-500" />
              <h3 className="mb-2 md:mb-3 text-lg md:text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm md:text-base text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies We Use Section */}
      <section className="px-4 md:px-10 py-12 md:py-20 max-w-7xl mx-auto">
        <div className="flex items-center mb-6 md:mb-10">
          <span className="w-4 h-4 bg-orange-500 mr-2" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Technologies We Use</h2>
        </div>

        <div className="flex flex-wrap gap-4 md:gap-8 mb-12 md:mb-20 justify-center md:justify-start">
          {[
            { src: "/assets/python.svg", alt: "Python" },
            { src: "/assets/tensorflow.svg", alt: "TensorFlow" },
            { src: "/assets/pytorch.svg", alt: "PyTorch" },
            { src: "/assets/spacy.svg", alt: "SpaCy" },
            { src: "/assets/transformers.png", alt: "Transformers" },
            { src: "/assets/keras.svg", alt: "Keras" },
          ].map((tech, idx) => (
            <div key={idx} className="bg-white p-2 md:p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <img src={tech.src} alt={tech.alt} className="h-8 md:h-12 opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-4 pb-12 md:pb-24 mx-auto md:px-10 max-w-7xl">
        <div className="flex items-center mb-6 md:mb-10">
          <span className="w-4 h-4 mr-2 bg-orange-500" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Why Choose HH Tech For NLP?</h2>
        </div>
        <div className="grid gap-4 md:gap-8 md:grid-cols-2">
          {[
            {
              icon: <HiOutlineLightBulb className="mt-1 mr-3 md:mr-4 text-2xl md:text-3xl text-orange-500" />,
              title: "Decade of Expertise in AI & ML",
              desc: "We bring 10+ years of hands-on experience in AI/ML development, NLP model fine-tuning, and real-time system deployment.",
            },
            {
              icon: <BsFillPeopleFill className="mt-1 mr-3 md:mr-4 text-2xl md:text-3xl text-orange-500" />,
              title: "Dedicated NLP Consulting Team",
              desc: "Our NLP consultants and engineers work closely with your team to align with your industry-specific needs, data requirements, and compliance standards.",
            },
            {
              icon: <MdLocationOn className="mt-1 mr-3 md:mr-4 text-2xl md:text-3xl text-orange-500" />,
              title: "End-to-End Customization",
              desc: "From model design to deployment and post-launch support, we provide comprehensive NLP consulting tailored to your specific goals.",
            },
            {
              icon: <FaCheckCircle className="mt-1 mr-3 md:mr-4 text-2xl md:text-3xl text-orange-500" />,
              title: "Pakistan-Based, Globally Aligned",
              desc: "We serve clients across Pakistan while adopting international best practices in NLP engineering and data ethics.",
            },
          ].map((c, i) => (
            <div
              key={i}
              className="flex items-start p-4 md:p-8 transition-all duration-300 bg-white border-l-4 border-orange-500 shadow-md rounded-xl hover:shadow-lg group"
            >
              {c.icon}
              <div>
                <h3 className="mb-1 md:mb-2 text-lg md:text-xl font-semibold text-gray-800">{c.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="flex items-center mt-12 md:mt-20 mb-6 md:mb-10">
          <span className="w-4 h-4 mr-2 bg-orange-500" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4 md:space-y-6 max-w-6xl mx-auto">
          {[
            {
              question: "What is Natural Language Processing in AI?",
              answer: (
                <>
                  <strong>NLP</strong> is a specialized branch of artificial intelligence that enables machines to understand, interpret, and generate human language. It fills the gap between human communication and computer understanding. We use NLP in AI to build <strong>chatbots, sentiment analysis, language translation, and more.</strong>
                </>
              ),
            },
            {
              question: "What Are the Best Tools Used for Natural Language Processing?",
              answer: (
                <>
                  <strong>SpaCy</strong> for large-scale applications.{" "}
                  <strong>NLTK</strong> is Ideal for academic and research purposes.{" "}
                  <strong>Hugging Face Transformers</strong> is best for language models like BERT and GPT.{" "}
                  <strong>OpenAI APIs</strong> for Advanced NLP capabilities.{" "}
                  <strong>Google Cloud Natural Language API</strong> for real-time data processing.
                </>
              ),
            },
            {
              question: "What Are Natural Language Processing Techniques?",
              answer: (
                <>
                  The First is <strong>Tokenization</strong> which breaks down sentences into words or phrases.
                  Then <strong> Named Entity Recognition (NER)</strong> identifies people, places, and brands.
                  <strong>Sentiment Analysis</strong> determines positive, neutral, or negative tones.
                  <strong>Part-of-Speech Tagging</strong> classifies words as nouns and verbs.
                  <strong>Dependency Parsing</strong> for understanding grammatical structure.
                  <strong>Text Summarization</strong> condenses large amounts of content.
                  <strong>Topic Modeling</strong> which identifies themes or subjects.
                </>
              ),
            },
            {
              question: "What are the types of Natural Language Processing?",
              answer: (
                <>
                  <strong>Rule-Based NLP</strong>uses predefined rules,<strong>Statistical NLP</strong>
                  relies on probabilistic models.<strong>Neural NLP</strong>uses deep learning for contextual language understanding.
                  <strong>Conversational NLP</strong>for chatbots and voice assistants.<strong>Cognitive NLP</strong>mimics human decision-making with knowledge graphs and reasoning.
                </>
              ),
            },
            {
              question: "Which Steps do I Follow in Natural Language Processing?",
              answer: (
                <>
                  <strong>Data Collection</strong>gathering structured or unstructured text data.<strong>Text Preprocessing</strong>
                  includes cleaning, tokenizing, and normalizing text.<strong>Feature Engineering</strong>is extracting meaningful linguistic features.
                  <strong>Model Training</strong>applies ML or DL algorithms. <strong>Evaluation & Optimization</strong>for accuracy and refine output.
                  <strong>Deployment</strong> integrates the system. Then last<strong>Monitoring & Improvement</strong>
                </>
              ),
            },
            {
              question: "Difference Between Natural Language Processing and Deep Learning?",
              answer: (
                <>
                  <strong>Natural Language Processing (NLP)</strong>focuses specifically on enabling machines to understand and generate human language.<strong> Deep Learning</strong> is a machine learning technique that uses neural networks to analyze data, and is often used 
                  <strong> within NLP</strong> to improve accuracy and context awareness.
                </>
              ),
            },
          ].map((faq, idx) => (
            <div
              key={idx}
              className="bg-white p-4 md:p-6 rounded-lg shadow-sm border-l-4 border-orange-500 border border-gray-100 border-t-0 border-r-0 border-b-0"
            >
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
                <div className="mt-3 pl-7 md:pl-9 pr-2 text-sm md:text-base text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NlpService;