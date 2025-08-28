// import { useState } from "react";
// import { FaPaperPlane } from "react-icons/fa";
// import Title from "../components/Title";
// import QuoteCard from "../components/QuoteCard";

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     company: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <section
//       id="contact"
//       className="w-full py-20 px-6 md:px-20 scroll-mt-20"
//     >
//       {/* Heading Section */}
//       <div className="text-center max-w-2xl mx-auto mb-10">
//         <Title
//           title="Contact Us"
//           des="Let’s work together to turn your vision into reality."
//           align="center"
//           barAlignment="self-center"
//         />
//         <QuoteCard
//           title="HH Tech Hub"
//           text="Your success is our mission."
//         />
//       </div>

//       {/* Contact Form Container */}
//       <div className="rounded-2xl p-8 shadow-xl max-w-4xl mx-auto border border-gray-200 bg-white">
//         <form className="space-y-8">
//           {/* Grid Inputs */}
//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="relative">
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="peer w-full px-4 pt-5 pb-2 bg-transparent border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-orange-500"
//               />
//               <label className="absolute left-4 top-2 text-sm text-gray-500 peer-focus:text-orange-500 peer-focus:text-xs peer-focus:top-1 transition-all">
//                 Full Name *
//               </label>
//             </div>
//             <div className="relative">
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="peer w-full px-4 pt-5 pb-2 bg-transparent border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-orange-500"
//               />
//               <label className="absolute left-4 top-2 text-sm text-gray-500 peer-focus:text-orange-500 peer-focus:text-xs peer-focus:top-1 transition-all">
//                 Email Address *
//               </label>
//             </div>
//             <div className="relative">
//               <input
//                 type="text"
//                 name="company"
//                 value={formData.company}
//                 onChange={handleChange}
//                 className="peer w-full px-4 pt-5 pb-2 bg-transparent border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-orange-500"
//               />
//               <label className="absolute left-4 top-2 text-sm text-gray-500 peer-focus:text-orange-500 peer-focus:text-xs peer-focus:top-1 transition-all">
//                 Company Name
//               </label>
//             </div>
//             <div className="relative">
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="peer w-full px-4 pt-5 pb-2 bg-transparent border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-orange-500"
//               />
//               <label className="absolute left-4 top-2 text-sm text-gray-500 peer-focus:text-orange-500 peer-focus:text-xs peer-focus:top-1 transition-all">
//                 Phone Number
//               </label>
//             </div>
//           </div>

//           {/* Message */}
//           <div className="relative">
//             <textarea
//               name="message"
//               rows="4"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               className="peer w-full px-4 pt-5 pb-2 bg-transparent border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-orange-500 resize-none"
//             />
//             <label className="absolute left-4 top-2 text-sm text-gray-500 peer-focus:text-orange-500 peer-focus:text-xs peer-focus:top-1 transition-all">
//               Your Message *
//             </label>
//           </div>

//           {/* File Upload */}
//           <div>
//             <label className="block text-sm text-gray-600 mb-2">
//               Attach File (optional)
//             </label>
//             <input
//               type="file"
//               className="w-full p-2 border border-gray-300 rounded-lg text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-500 file:text-white hover:file:bg-orange-600 transition"
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="text-center">
//             <button
//               type="submit"
//               className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition duration-300 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
//             >
//               <FaPaperPlane />
//               Send Message
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// }
