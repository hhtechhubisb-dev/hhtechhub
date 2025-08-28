import React from "react";
import { motion } from "framer-motion";
import QuoteCard from "../components/QuoteCard";

const AboutUs = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section
      id="about"
      className="w-full py-12 px-4 sm:px-6 md:px-20 scroll-mt-20 bg-white"
    >
      {/* 🌟 Gradient Heading */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-12 sm:mb-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text mb-4 leading-snug sm:leading-[1.2] "
        >
          Trusted By Clients Worldwide
        </motion.h2>
      </motion.div>

      <div className="grid items-center gap-10 sm:gap-12 md:gap-16 mx-auto md:grid-cols-2 max-w-7xl">
        {/* Left Content */}
        <motion.div
          className="space-y-5 sm:space-y-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
          >
           Best Software House in Pakistan Offering Expert IT Solutions Globally
          </motion.h1>

          <motion.div
            className="space-y-4 sm:space-y-5 text-sm sm:text-base text-gray-700 leading-relaxed"
            variants={containerVariants}
          >
            <motion.p variants={itemVariants}>
              <span className="font-medium text-gray-900">HH Tech Hub</span>, is the Leading IT company in Pakistan was founded {" "}
              <span className="font-semibold text-gray-900">2024 </span> {" "}
              located in Rawalpindi near the commercial market. The Best Software House in Pakistan providing professional services in{" "}
              <span className="font-semibold text-gray-900">web development</span>,{" "}
              <span className="font-semibold text-gray-900">mobile app development</span>,{" "}
              <span className="font-semibold text-gray-900">UI/UX design</span>,{" "}
              <span className="font-semibold text-gray-900">artificial intelligence</span>,{" "}
              <span className="font-semibold text-gray-900">machine learning</span>, and{" "}
              <span className="font-semibold text-gray-900">multimedia design</span>.
              Our team builds CMS, custom portals 
              <span className="font-semibold text-gray-900"> mobile apps</span>, and{" "}
              <span className="font-semibold text-gray-900">AI-powered solutions</span> for{" "}
              <span className="font-semibold text-gray-900">startups</span>,{" "}
              <span className="font-semibold text-gray-900">SMEs</span>, and{" "}
              <span className="font-semibold text-gray-900">enterprise clients</span>.
            </motion.p>

           

            <motion.p variants={itemVariants}>
              We are proud to be recognized as a Top IT Company in Pakistan and proudly serving clients across Pakistan, the UK, the USA, Canada & internationally.{" "}   We have highly experienced web developers who have successfully launched various massive projects on  
               <span className="font-semibold text-gray-900"> Flutter</span>,{" "}
              <span className="font-semibold text-gray-900">Kotlin</span>,{" "}
              <span className="font-semibold text-gray-900">React</span>,{" "}
              <span className="font-semibold text-gray-900">AI frameworks</span>, and{" "}
              <span className="font-semibold text-gray-900">mobile apps</span>, including{" "}
              <span className="font-semibold text-gray-900">e-commerce platforms</span>,{" "}
              <span className="font-semibold text-gray-900">ERP dashboards</span>,{" "}
              <span className="font-semibold text-gray-900">chatbots</span>, and{" "}
              <span className="font-semibold text-gray-900">animated videos</span>.
                Why choose us? We offer{" "}
              <span className="font-semibold text-gray-900">after-sales service</span> with{" "}
              unlimited revisions
              because client satisfaction is our top priority.       
            </motion.p>
{/* 
            <motion.p variants={itemVariants}>
              Our highly experienced web developers have launched successful projects on{" "}
              <span className="font-semibold text-gray-900">Flutter</span>,{" "}
              <span className="font-semibold text-gray-900">Kotlin</span>,{" "}
              <span className="font-semibold text-gray-900">React</span>,{" "}
              <span className="font-semibold text-gray-900">AI frameworks</span>, and{" "}
              <span className="font-semibold text-gray-900">mobile apps</span>, including{" "}
              <span className="font-semibold text-gray-900">e-commerce platforms</span>,{" "}
              <span className="font-semibold text-gray-900">ERP dashboards</span>,{" "}
              <span className="font-semibold text-gray-900">chatbots</span>, and{" "}
              <span className="font-semibold text-gray-900">animated videos</span>.
            </motion.p>

            <motion.p variants={itemVariants}>
              Why choose us? We offer{" "}
              <span className="font-semibold text-gray-900">after-sales service</span> with{" "}
              unlimited revisions
              because client satisfaction is our top priority.
            </motion.p> */}
          </motion.div>

          <motion.div
            className="mt-6 sm:mt-8"
            variants={itemVariants}
          >
            <QuoteCard
              title="HH Tech Hub"
              text="Your success is our mission"
              className="border-l-4 border-orange-500 bg-gradient-to-r from-gray-50 to-white"
            />
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="relative group"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          whileHover="hover"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl opacity-20 blur-md group-hover:opacity-30 transition duration-500"></div>
          <img
            src="/assets/hhtechhubland.jpg"
            alt="HH Tech Hub Team"
            className="relative rounded-xl w-full h-auto object-cover shadow-lg z-10"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent rounded-b-xl z-20"></div>
          <motion.p
            className="absolute bottom-6 left-6 text-white font-medium text-base sm:text-lg z-30"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
