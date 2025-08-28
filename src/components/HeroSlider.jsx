import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const videos = ["/assets/hero3.mp4", "/assets/hero4.mp4"];

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
  exit: { opacity: 0, y: -40, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } },
};

const videoVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(0);
    setCurrent((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev - 1 + videos.length) % videos.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <AnimatePresence custom={direction}>
        <motion.video
          key={current}
          src={videos[current]}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
          initial="enter"
          animate="center"
          exit="exit"
          variants={videoVariants}
          transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
          custom={direction}
        />
      </AnimatePresence>

      {/* Overlay Text */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-20 text-white text-center px-4 sm:px-12 bg-gradient-to-b from-black/60 via-black/40 to-black/60"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        key={`text-${current}`}
      >
        <motion.p
          variants={itemVariants}
          className="text-2xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-shadow-lg leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
            Welcome To HH Tech Hub
          </span>
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6 text-shadow-md max-w-3xl leading-relaxed"
        >
          The Leading IT Company in Pakistan
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-shadow-sm max-w-4xl leading-relaxed"
        >
          We offer premium software development services including web & mobile
          app development, AI solutions, UI/UX design, and multimedia services
          with a focus on innovation and quality.
        </motion.p>

        <Link to="/get-quote">
          <motion.div variants={buttonVariants}>
           <motion.button
  className="px-4 py-2 sm:px-6 sm:py-3 md:px-10 md:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-medium text-xs sm:text-sm md:text-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
  whileHover={{
    scale: 1.05,
    background: "linear-gradient(to right, #f97316, #ea580c)",
  }}
  whileTap={{ scale: 0.95 }}
>
  Get a Free Consultation
</motion.button>

          </motion.div>
        </Link>
      </motion.div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-orange-500 sm:w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Navigation Buttons - hidden on mobile */}
      <motion.button
        onClick={prevSlide}
        className="hidden sm:flex absolute top-1/2 left-4 md:left-6 transform -translate-y-1/2 z-30 bg-white/90 hover:bg-orange-500 text-orange-500 hover:text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaChevronLeft className="text-lg md:text-xl" />
      </motion.button>

      <motion.button
        onClick={nextSlide}
        className="hidden sm:flex absolute top-1/2 right-4 md:right-6 transform -translate-y-1/2 z-30 bg-white/90 hover:bg-orange-500 text-orange-500 hover:text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaChevronRight className="text-lg md:text-xl" />
      </motion.button>
    </div>
  );
}
