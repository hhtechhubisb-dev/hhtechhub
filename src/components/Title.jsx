import { motion } from "framer-motion";

const Title = ({ 
  title, 
  des, 
  align = "center", 
  underlineVariant = "gradient",
  animate = true,
  titleClassName = ""
}) => {

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className={`flex flex-col gap-3 mb-8 w-full items-${align}`}
      variants={animate ? containerVariants : {}}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className={`flex flex-col gap-3 items-${align}`}
        variants={itemVariants}
      >
        <motion.h3 
          className={titleClassName || "font-bold text-4xl bg-gradient-to-r from-amber-600 via-gray-700 to-amber-600 drop-shadow-md bg-clip-text text-transparent"}
          variants={itemVariants}
        >
          {title}
        </motion.h3>
    <motion.div 
  className={`mt-7 ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''} mb-5`}
  variants={itemVariants}
>
  <div className="w-24 h-1.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" />
</motion.div>



      </motion.div>
      {des && (
        <motion.p 
          className={`text-gray-600 max-w-2xl text-${align} leading-relaxed text-lg ${align === 'center' ? 'mx-auto' : ''}`}
          variants={itemVariants}
        >
          {des}
        </motion.p>
      )}
    </motion.div>
  );
};

export default Title;
