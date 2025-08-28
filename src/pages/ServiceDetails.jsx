// import React from "react";
// import { useParams } from "react-router-dom";
// import { FaLaptopCode, FaMobileAlt, FaRobot, FaRocket, FaPen, FaPalette, FaTools } from "react-icons/fa";
// import Footer from "../components/Footer"; // Import Footer component
// const ServiceDetails = () => {
//   const { serviceId } = useParams(); // Get the serviceId from URL params
  
//   const items = [
//     {
//       title: "Web Development",
//       link: "web",
//       description: "We build responsive, scalable, and modern websites with the latest web technologies, optimized for all devices.",
//       icon: <FaLaptopCode size={30} color="#ff6a00" />,
//     },
//     {
//       title: "Mobile Development",
//       link: "mobile",
//       description: "Our mobile apps provide seamless experiences across Android and iOS, with a focus on user engagement and performance.",
//       icon: <FaMobileAlt size={30} color="#ff6a00" />,
//     },
//     {
//       title: "AI/ML Application",
//       link: "ai",
//       description: "We leverage AI and ML to create intelligent systems that predict, analyze, and automate tasks for your business.",
//       icon: <FaRobot size={30} color="#ff6a00" />,
//     },
//     {
//       title: "MVP Development",
//       link: "mvp",
//       description: "We help you build a Minimum Viable Product quickly and efficiently to test your ideas and gain valuable user feedback.",
//       icon: <FaRocket size={30} color="#ff6a00" />,
//     },
//     {
//       title: "Content Writing",
//       link: "content",
//       description: "Our content writers create compelling, SEO-optimized content that engages and converts your audience.",
//       icon: <FaPen size={30} color="#ff6a00" />,
//     },
//     {
//       title: "Graphics Designing",
//       link: "graphics",
//       description: "We offer top-notch graphic design services, including logo creation, branding, and custom visual content.",
//       icon: <FaPalette size={30} color="#ff6a00" />,
//     },
//     {
//       title: "UI/UX Design",
//       link: "uiux",
//       description: "We design user interfaces and experiences that are intuitive, engaging, and create memorable interactions.",
//       icon: <FaTools size={30} color="#ff6a00" />,
//       subItems: [
//         { title: "App Design", link: "appdesign" },
//         { title: "Web Design", link: "webdesign" },
//       ]
//     }
//   ];

//   // Find the selected service based on the serviceId from the URL
//   const selectedService = items.find(item => item.link === serviceId);

//   if (!selectedService) {
//     return <div>Service not found</div>;
//   }

//   return (
//     <>
//     <div className="p-8 bg-white mt-20">
//       <div className="text-center mb-12 max-w-8xl mx-auto">
//         <h1 className="text-4xl font-semibold text-orange-600">{selectedService.title}</h1>
//       </div>
      
//       <div className="bg-white shadow-2xl rounded-xl p-6 text-center border border-orange-200">
//         <div className="flex items-center mb-4">
//           <div className="mr-4">
//             {selectedService.icon}
//           </div>
//           <h2 className="text-2xl font-semibold text-gray-800">
//             {selectedService.title}
//           </h2>
//         </div>

//         <p className="text-gray-600 mb-4">
//           {selectedService.description}
//         </p>

//         {selectedService.subItems && (
//           <div className="mt-4 text-left">
//             <h4 className="font-semibold text-gray-700 mb-2">Sub-services:</h4>
//             <ul className="list-none pl-0">
//               {selectedService.subItems.map((subItem, subIndex) => (
//                 <li key={subIndex} className="mb-2">
//                   <Link to={`/services/${serviceId}/${subItem.link}`} className="text-blue-500 hover:text-orange-600 transition duration-300">
//                     {subItem.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//     <Footer /> {/* Add Footer component here */}
//     </>
//   );
// };

// export default ServiceDetails;
