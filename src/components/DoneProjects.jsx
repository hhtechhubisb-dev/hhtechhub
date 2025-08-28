// import React, { useRef, useEffect } from 'react';
// import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
// import Title from './Title';
// import { FiExternalLink } from 'react-icons/fi';
// import { FaCode } from 'react-icons/fa';

// const DoneProjects = () => {
//   const projects = [
//     {
//       id: 1,
//       title: "E-commerce Platform",
//       description: "A full-featured online store with payment integration and inventory management.",
//       image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       tags: ["React", "Node.js", "MongoDB"],
     
//     },
//     {
//       id: 2,
//       title: "Portfolio Website",
//       description: "A responsive portfolio website with smooth animations and dark mode.",
//       image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
  
//     },
//     {
//       id: 3,
//       title: "Task Management App",
//       description: "A productivity app for organizing tasks with drag-and-drop functionality.",
//       image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       tags: ["React", "Firebase", "Redux"],
     
//     },
//     {
//       id: 4,
//       title: "Weather Dashboard",
//       description: "Real-time weather information with 5-day forecast and location detection.",
//       image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       tags: ["JavaScript", "API Integration", "CSS"],
      
//     },
//     {
//       id: 5,
//       title: "Social Media Dashboard",
//       description: "Analytics dashboard for tracking social media metrics and engagement.",
//       image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       tags: ["React", "Chart.js", "REST API"],
     
//     },
//     {
//       id: 6,
//       title: "Recipe Finder App",
//       description: "Discover recipes based on ingredients you have with nutritional information.",
//       image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//       tags: ["Vue.js", "Spoonacular API", "Vuetify"],
    
//     }
//   ];

//   // Particle system configuration
//   const particles = Array.from({ length: 30 }).map((_, i) => ({
//     id: i,
//     size: Math.random() * 5 + 2,
//     x: Math.random() * 100,
//     y: Math.random() * 100,
//     opacity: Math.random() * 0.5 + 0.1,
//     duration: Math.random() * 10 + 5,
//     delay: Math.random() * 5
//   }));

//   const container = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const item = {
//     hidden: { y: 30, opacity: 0, scale: 0.95 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 120,
//         damping: 12,
//         mass: 0.5
//       }
//     }
//   };

//   const hoverEffect = {
//     y: -10,
//     scale: 1.03,
//     boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
//     transition: { type: "spring", stiffness: 300, damping: 15 }
//   };

//   const imageHover = {
//     scale: 1.15,
//     filter: "brightness(0.7) blur(2px)",
//     transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
//   };

//   const overlayHover = {
//     opacity: 1,
//     backgroundColor: "rgba(0, 0, 0, 0.7)",
//     transition: { duration: 0.3 }
//   };

//   const linkContainer = {
//     hidden: { opacity: 0, scale: 0.8, y: 20 },
//     visible: { 
//       opacity: 1, 
//       scale: 1, 
//       y: 0,
//       transition: { type: "spring", stiffness: 300, damping: 15 }
//     },
//     hover: { scale: 1.05 }
//   };

//   const linkIcon = {
//     hidden: { rotate: -45, scale: 0.8 },
//     visible: { 
//       rotate: 0, 
//       scale: 1,
//       transition: { type: "spring", stiffness: 500, damping: 15 }
//     },
//     hover: { rotate: 0, scale: 1.2 }
//   };

//   const tagAnimation = {
//     hidden: { opacity: 0, y: 10 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.1,
//         type: "spring",
//         stiffness: 200
//       }
//     })
//   };

//   // New animations
//   const magneticHover = {
//     x: [0, 5, -3, 0],
//     y: [0, 3, -2, 0],
//     transition: {
//       duration: 1.5,
//       ease: "easeInOut",
//       repeat: Infinity
//     }
//   };

//   const liquidBorder = {
//     backgroundPosition: ["0% 0%", "100% 100%"],
//     transition: {
//       duration: 8,
//       ease: "linear",
//       repeat: Infinity
//     }
//   };

//   const holographicEffect = {
//     background: [
//       "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)",
//       "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)"
//     ],
//     backgroundPosition: ["0% 0%", "100% 100%"],
//     transition: {
//       duration: 2,
//       ease: "easeInOut",
//       repeat: Infinity,
//       repeatType: "reverse"
//     }
//   };

//   return (
//     <section className="py-20 mt-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
//       {/* Floating particles background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {particles.map((particle) => (
//           <motion.div
//             key={particle.id}
//             className="absolute rounded-full bg-gradient-to-r from-orange-400 to-pink-500"
//             style={{
//               width: `${particle.size}px`,
//               height: `${particle.size}px`,
//               left: `${particle.x}%`,
//               top: `${particle.y}%`,
//               opacity: particle.opacity
//             }}
//             animate={{
//               y: [0, -50, 0],
//               x: [0, Math.random() * 20 - 10, 0],
//               opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity]
//             }}
//             transition={{
//               duration: particle.duration,
//               delay: particle.delay,
//               repeat: Infinity,
//               repeatType: "reverse",
//               ease: "easeInOut"
//             }}
//           />
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <Title 
//           title="Achieved Milestones"
//           des="Explore my portfolio of successfully delivered projects. Each represents unique challenges and creative solutions."
//           titleClassName="text-3xl font-extrabold text-transparent md:text-5xl bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text"
//         />
        
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           variants={container}
//           initial="hidden"
//           animate="visible"
//         >
//           {projects.map((project) => (
//             <motion.div
//               key={project.id}
//               variants={item}
//               whileHover={hoverEffect}
//               className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 relative transition-all duration-300"
//               style={{
//                 background: 'linear-gradient(45deg, #ffffff, #f9fafb)',
//                 boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05)'
//               }}
//             >
//               {/* Liquid gradient border */}
//               <motion.div
//                 className="absolute inset-0 rounded-2xl p-[2px] pointer-events-none"
//                 style={{
//                   background: 'linear-gradient(45deg, #f59e0b, #ec4899, #6366f1, #f59e0b)',
//                   backgroundSize: '300% 300%',
//                   opacity: 0,
//                   zIndex: -1
//                 }}
//                 whileHover={{
//                   opacity: 0.7,
//                   ...liquidBorder
//                 }}
//               />
              
//               {/* Holographic reflection */}
//               <motion.div
//                 className="absolute inset-0 rounded-2xl pointer-events-none"
//                 style={{
//                   background: 'linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)',
//                   opacity: 0
//                 }}
//                 whileHover={holographicEffect}
//               />

//               <div className="relative h-56 overflow-hidden">
//                 <motion.img 
//                   src={project.image} 
//                   alt={project.title}
//                   className="w-full h-full object-cover"
//                   initial={{ filter: "brightness(1) blur(0px)" }}
//                   whileHover={imageHover}
//                 />
                
//                 <motion.div 
//                   className="absolute inset-0 flex items-center justify-center gap-8"
//                   initial={{ opacity: 0 }}
//                   whileHover={overlayHover}
//                 >
//                 </motion.div>
//               </div>
              
//               <div className="p-6">
//                 <motion.h3 
//                   className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors"
//                   whileHover={{ x: 5 }}
//                   animate={magneticHover}
//                 >
//                   {project.title}
//                 </motion.h3>
//                 <motion.p 
//                   className="text-gray-600 mb-4"
//                   whileHover={{ x: 2 }}
//                 >
//                   {project.description}
//                 </motion.p>
                
//                 <div className="flex flex-wrap gap-2">
//                   {project.tags.map((tag, i) => (
//                     <motion.span
//                       key={i}
//                       className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-800"
//                       custom={i}
//                       variants={tagAnimation}
//                       whileHover={{
//                         scale: 1.1,
//                         backgroundColor: "rgba(249, 115, 22, 0.1)",
//                         color: "#f97316"
//                       }}
//                     >
//                       {tag}
//                     </motion.span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
        
//         <motion.div 
//           className="mt-16 text-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8, type: "spring" }}
//         >
//           <motion.a
//             href="#"
//             className="inline-flex items-center gap-2 text-orange-500 font-medium text-lg px-6 py-3 rounded-full bg-orange-50 hover:bg-orange-100 transition-colors relative overflow-hidden"
//             whileHover={{ 
//               gap: 3,
//               scale: 1.05,
//               boxShadow: "0 10px 15px -3px rgba(249, 115, 22, 0.3)",
//               transition: { 
//                 duration: 0.3,
//                 type: "spring",
//                 stiffness: 300
//               }
//             }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <span className="relative z-10">Explore More Projects</span>
//             {/* Button shine effect */}
//             <motion.span
//               className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0"
//               initial={{ x: "-100%" }}
//               whileHover={{
//                 x: "100%",
//                 opacity: 1,
//                 transition: { duration: 0.6, ease: "easeInOut" }
//               }}
//             />
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default DoneProjects;