import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Title from "../components/Title";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "What makes HH Tech Hub the Top IT companies in Rawalpindi/Islamabad?",
      answer:
        "Yes, HH Tech Hub is a growing software house, not only in Rawalpindi/Islamabad but across Pakistan, known for our expertise in AI, Machine Learning, mobile app development, cloud services, and custom software development.",
    },
    {
      question: "What AI consulting services does HH Tech offer?",
      answer:
        "HH Tech is one of the top AI consulting firms in 2025, offering Deep Learning, Natural Language Processing (NLP), and Predictive Analytics to help businesses automate, optimize, and make data-driven decisions.",
    },
    {
      question: "Can HH Tech Hub help with chatbot development for my business?",
      answer:
        "Yes, we specialize in developing AI chatbots. Our chatbots use Natural Language Processing to enhance customer engagement and automate support.",
    },
    {
      question: "How HH Tech Hub deep learning and AI benefit my business?",
      answer:
        "Contact our expert for deep learning consulting and AI solutions. These experts make us a leading Artificial Intelligence company in Pakistan.",
    },
    {
      question: "How can HH Tech Hub prediction models help my business?",
      answer:
        "Our Prediction models as a service utilize machine learning to forecast trends, optimize processes, and enhance decision-making, enabling businesses to stay ahead of the competition.",
    },
    {
      question: "Why is the UI/UX design services important or purpose?",
      answer:
        "UI/UX design services are crucial for creating websites and app easy to use, visually appealing, and attractive. HH Tech Hub, offers responsive UI/UX design, website UX optimization, and full UI/UX design services in Pakistan.",
    },
    {
      question: "What backend technologies does HH Tech use for custom software development?",
      answer:
        "We are experts in Node.js, Python/Django, Java/Spring, and .NET Core for scalable, secure, and high-performance backend development tailored to your business needs.",
    },
    {
      question: "What mobile app development software does HH Tech use?",
      answer:
        "We develop mobile apps using Flutter and React Native, delivering cross-platform solutions that focus on performance and user experience.",
    },
    {
      question: "What cloud platforms does HH Tech work with?",
      answer:
        "We offer cloud services on AWS, Firebase, and Heroku, providing scalable, secure, and reliable cloud solutions tailored to your business needs.",
    },
    {
      question: "How does HH Tech ensure successful DevOps implementation?",
      answer:
        "We use Docker, Kubernetes, Jenkins, and Terraform to streamline development, automate workflows, and enhance release quality, thereby ensuring faster and more efficient deployments.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faqs"
      className="w-full py-16 px-4 sm:px-6 md:px-20 bg-gradient-to-b bg-white scroll-mt-20 text-[#1c1c1c]"
    >
      <Title
        title="Frequently Asked Questions"
        des="Answers to your most common queries about HH Tech Hub"
        align="center"
        barAlignment="self-center"
        titleClassName="text-2xl sm:text-3xl font-extrabold text-transparent md:text-5xl bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text"
      />

      <div className="max-w-5xl mx-auto space-y-4 mt-10 sm:mt-12">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white border border-orange-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            whileHover={{ y: -2 }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center text-left group transition-all duration-300 ${
                openIndex === index
                  ? "bg-gradient-to-r from-orange-50 to-orange-50/70 text-orange-600"
                  : "text-gray-800 hover:bg-orange-50/30"
              }`}
            >
              <h3 className="font-medium text-sm sm:text-base md:text-lg leading-snug sm:leading-normal pr-4">
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <IoIosArrowDown
                  className={`text-lg sm:text-xl transition-colors duration-300 ${
                    openIndex === index
                      ? "text-orange-500"
                      : "text-gray-500 group-hover:text-orange-400"
                  }`}
                />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-1">
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
