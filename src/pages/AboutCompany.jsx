// import React from 'react';
// import { motion } from 'framer-motion';

// const AboutCompany = () => {
//     const stats = [
//         { number: "2024", label: "Founded" },
//         { number: "2", label: "Key Cities" },
//         { number: "100%", label: "Client Success" },
//         { number: "24/7", label: "Support" }
//     ];

//     const leadership = [
//         {
//             name: "Huzaifa Ejaz",
//             title: "CEO",
//             quote: "At HH Tech Hub, we belive to build a future where startups and businesses in Pakistan thrive through scalable, affordable, and smart digital solutions.",
//             bio: "With over 10 years of hands-on experience in web and mobile app development, Huzaifa Ejaz is the strategic force behind HH Tech Hub. As CEO, he not only leads this company but also runs Friends and Companies. Huzaifa Ejaz has a deep technical background and business acumen, allowing him to bridge the gap between innovation and execution, earning HH Tech Hub a trusted spot in Pakistan’s competitive tech landscape.",
//             img: "/assets/ceo.jpg"
//         },
     
//         {
//             name: "Hassan Ejaz",
//             title: "COO",
//             quote: "Operational excellence is delivering value consistently, not just once, but every time. That’s what clients deserve, and that’s what we delivered.",
//             bio: "Hassan Ejaz brings 5 years of experience in marketing and business operations. As a co-partner of both HH Tech Hub and Friends and Company, he brings strategic oversight and a data-driven mindset to every project. Hassan’s sharp focus on delivery, process, and performance ensures that HH Tech Hub meets deadlines, exceeds expectations, and maintains a 100% client satisfaction rate.",
//             img: "/assets/coo.jpg"
//         },   {
//             name: "Abdul Rahman",
//             title: "CTO",
//             quote: "Technology should empower, not overwhelm. At HH Tech Hub, we focus on building tech that’s smart, simple, and scalable.",
//             bio: "With 4 years of experience in web development and client communication. Abdul-Rehman leads HH Tech Hub's technical direction with clarity and confidence. Beyond his skills in full-stack development, he serves as a representative and team leader within the organisation. Ensuring every solution is tailored, tested, and delivered with precision.",
//             img: "/assets/cto.jpg"
//         },
//     ];

//     const technologies = [
//         "Cloud Computing", "AI & Machine Learning", "Full-Stack Development",
//         "DevOps & Automation", "Mobile Development", "Data Analytics",
//         "Cybersecurity", "Digital Strategy"
//     ];

//     return (
//         <div className="overflow-x-hidden">
//             {/* Hero Section */}
//             <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-[#f97316] to-[#ea580c] overflow-hidden">
//                 <div className="absolute inset-0 bg-black/40 z-10"></div>
//                 <img
//                     src="/assets/customsoft3.jpg"
//                     alt="HH Tech Hub Office"
//                     className="absolute inset-0 w-full h-full object-cover"
//                 />
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     className="relative z-20 text-center text-white max-w-4xl mx-auto px-6"
//                 >
//                     <motion.h1
//                         className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.2, duration: 0.8 }}
//                     >
//                         About <span className="text-white/90">Us</span>
//                     </motion.h1>
//                     {/* <motion.p 
//             className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           >
//             HH Tech Hub - Transforming businesses through cutting-edge technology solutions in Rawalpindi and Islamabad
//           </motion.p> */}
//                     {/* <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//           > */}
//                     {/* <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-white text-[#f97316] font-semibold px-8 py-3 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               Discover Our Vision
//             </motion.button> */}
//                     {/* </motion.div> */}
//                 </motion.div>

//                 {/* Scroll indicator */}
//                 {/* <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1, duration: 0.8 }}
//           className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
//         >
//           <div className="animate-bounce flex flex-col items-center">
//             <p className="text-white mb-2 text-sm">Scroll to explore</p>
//             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//             </svg>
//           </div>
//         </motion.div> */}
//             </section>

//             {/* Leadership Section */}
//             <section className="py-16 px-6 max-w-7xl mx-auto">
//                 <motion.p
//                     className="text-center text-lg md:text-xl leading-relaxed md:leading-loose mb-8 opacity-90 max-w-4xl mx-auto px-4"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.4, duration: 0.8 }}
//                 >
//                     Our story began in 2024 with a clear mission: <strong>To empower small businesses or startups to promote their businesses at reasonable prices.</strong> We work for a wide range of industries, from e-commerce stores to small enterprises, Hospitals and healthcare providers and more. In today's rapidly evolving tech landscape, where digital transformation is no longer optional, <strong>HH Tech Hub</strong>  stands as a trusted partner for companies looking to modernise, grow, and stay ahead.


//                 </motion.p>
//                 <motion.p
//                     className="text-center text-lg md:text-xl leading-relaxed md:leading-loose mb-8 opacity-90 max-w-4xl mx-auto px-4"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.4, duration: 0.8 }}
//                 >
//                     As a leading software house in Pakistan, <strong>HH Tech Hub</strong> is located in
//                     <strong> Rawalpindi near the commercial market.</strong> We provide high-quality IT
//                     services tailored for startups, SMEs, and enterprise clients.
//                     <strong> HH Tech Hub</strong>, the Best IT company in Rawalpindi, offers a wide
//                     range of services, including <strong>Custom Software Development, Cloud Computing,
//                         AI/ML, DevOps</strong>, Website Development, Web Designing, Mobile App Development,
//                     Search Engine Optimisation (SEO), and Digital Marketing (including Social Media
//                     Marketing). And here’s the best part — our permanent clients enjoy our after-sales
//                     services completely free of cost.
//                 </motion.p>

//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     viewport={{ once: true }}
//                     className="text-center mb-16"
//                 >
//                     <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Leadership</h2>
//                     <div className="w-20 h-1 bg-[#f97316] mx-auto mb-6"></div>
//                     <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//                         HH Tech Hub leadership mission is all about vision, commitment, and delivering results.
//                     </p>
//                 </motion.div>

//                 <div className="space-y-24">
//                     {leadership.map((member, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: index * 0.1 }}
//                             viewport={{ once: true }}
//                             className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
//                         >
//                             <div className="w-full md:w-1/2">
//                                 <div className="relative group">
//                                     <img
//                                         src={member.img}
//                                         alt={`${member.name} - ${member.title}`}
//                                         className="w-full h-80 md:h-96 object-cover rounded-xl shadow-xl transform group-hover:scale-105 transition-transform duration-500"
//                                     />
//                                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
//                                     <div className="absolute bottom-6 left-6">
//                                         <h3 className="text-2xl font-bold text-white">{member.name}</h3>
//                                         <p className="text-[#f97316] font-medium">{member.title}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="w-full md:w-1/2">
//                                 <blockquote className="text-xl italic text-gray-700 border-l-4 border-[#f97316] pl-6 mb-6 leading-relaxed">
//                                     "{member.quote}"
//                                 </blockquote>
//                                 <p className="text-gray-600 leading-relaxed">
//                                     {member.bio}
//                                 </p>
//                                 <div className="mt-6 flex space-x-4">
//                                     {/* <button className="px-6 py-2 bg-[#f97316] text-white rounded-lg hover:bg-[#ea580c] transition-colors duration-300">
//                                         View Profile
//                                     </button>
//                                     <button className="px-6 py-2 border border-[#f97316] text-[#f97316] rounded-lg hover:bg-[#f97316]/10 transition-colors duration-300">
//                                         Contact
//                                     </button> */}
//                                 </div>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </section>

//             {/* Company Overview */}
//             <section className="py-20 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white">
//                 <div className="max-w-7xl mx-auto px-6">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         viewport={{ once: true }}
//                         className="text-center mb-16"
//                     >
//                         <h2 className="text-3xl md:text-4xl font-bold mb-4">About HH Tech Hub</h2>
//                         <div className="w-20 h-1 bg-white/80 mx-auto mb-6"></div>
//                         <p className="text-xl opacity-90 max-w-4xl mx-auto">
//                             Founded in 2024, we are a forward-thinking technology consulting firm revolutionizing digital transformation across Pakistan
//                         </p>
//                     </motion.div>

//                     <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
//                         <motion.div
//                             initial={{ opacity: 0, x: -20 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.6 }}
//                             viewport={{ once: true }}
//                             className="space-y-8"
//                         >
//                             <div>
//                                 <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
//                                 <p className="text-lg leading-relaxed">
//                                     The mission is to <strong>deliver reliable, high-standard software and mobile apps </strong> that meet the needs of every startup and enterprise. We promise ourselves to provide<strong>scalable, secure, and performance-driven services that turn our customers into clients.</strong>. Our services are tailored to empower business growth in Pakistan and beyond.


//                                 </p>
//                             </div>
//                             <div>
//                                 <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
//                                 <p className="text-lg leading-relaxed">
//                                     Our approach is different from the market. We are an after-sales IT company, which means the client can take revisions life-time. We take pride in custom <strong>web and app development, CRM, CMS, ERP</strong>, and fully customised platforms that align with your business goals, ensuring you get the <strong> right solution, not just any solution.</strong>.
//                                 </p>
//                             </div>
//                         </motion.div>

//                         <motion.div
//                             initial={{ opacity: 0, x: 20 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.6 }}
//                             viewport={{ once: true }}
//                             className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg"
//                         >
//                             <h3 className="text-2xl font-bold mb-6">Core Technologies</h3>
//                             <div className="grid grid-cols-2 gap-4">
//                                 {technologies.map((tech, index) => (
//                                     <motion.div
//                                         key={index}
//                                         whileHover={{ x: 5 }}
//                                         className="flex items-center"
//                                     >
//                                         <div className="w-2 h-2 bg-[#f97316] rounded-full mr-3"></div>
//                                         <span>{tech}</span>
//                                     </motion.div>
//                                 ))}
//                             </div>
//                         </motion.div>
//                     </div>

//                     {/* Stats */}
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.6, staggerChildren: 0.1 }}
//                         viewport={{ once: true }}
//                         className="grid md:grid-cols-4 gap-6"
//                     >
//                         {stats.map((stat, index) => (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                                 viewport={{ once: true }}
//                                 whileHover={{ scale: 1.03 }}
//                                 className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"
//                             >
//                                 <div className="text-4xl font-bold mb-2">{stat.number}</div>
//                                 <div className="text-lg">{stat.label}</div>
//                             </motion.div>
//                         ))}
//                     </motion.div>
//                 </div>
//             </section>

//             {/* Values Section */}
//             <section className="py-20 px-6 bg-gray-50">
//                 <div className="max-w-7xl mx-auto">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         viewport={{ once: true }}
//                         className="text-center mb-16"
//                     >
//                         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Core Values</h2>
//                         <div className="w-20 h-1 bg-[#f97316] mx-auto mb-6"></div>
//                         <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//                             The principles that guide every decision we make and every solution we deliver
//                         </p>
//                     </motion.div>

//                     <div className="grid md:grid-cols-3 gap-8">
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6 }}
//                             viewport={{ once: true }}
//                             className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
//                         >
//                             <div className="w-12 h-12 bg-[#f97316]/10 rounded-full flex items-center justify-center mb-6">
//                                 <svg className="w-6 h-6 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                                 </svg>
//                             </div>
//                             <h3 className="text-xl font-bold mb-3 text-gray-800">Innovation</h3>
//                             <p className="text-gray-600">
//                                 We push boundaries and challenge the status quo to deliver groundbreaking solutions that set our clients apart.
//                             </p>
//                         </motion.div>

//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: 0.1 }}
//                             viewport={{ once: true }}
//                             className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
//                         >
//                             <div className="w-12 h-12 bg-[#f97316]/10 rounded-full flex items-center justify-center mb-6">
//                                 <svg className="w-6 h-6 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
//                                 </svg>
//                             </div>
//                             <h3 className="text-xl font-bold mb-3 text-gray-800">Excellence</h3>
//                             <p className="text-gray-600">
//                                 We pursue perfection in everything we do, delivering work that exceeds expectations and stands the test of time.
//                             </p>
//                         </motion.div>

//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: 0.2 }}
//                             viewport={{ once: true }}
//                             className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
//                         >
//                             <div className="w-12 h-12 bg-[#f97316]/10 rounded-full flex items-center justify-center mb-6">
//                                 <svg className="w-6 h-6 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//                                 </svg>
//                             </div>
//                             <h3 className="text-xl font-bold mb-3 text-gray-800">Collaboration</h3>
//                             <p className="text-gray-600">
//                                 We believe the best solutions emerge from teamwork, both within our organization and with our clients.
//                             </p>
//                         </motion.div>
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: 0.2 }}
//                             viewport={{ once: true }}
//                             className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
//                         >
//                             <div className="w-12 h-12 bg-[#f97316]/10 rounded-full flex items-center justify-center mb-6">
//                                 <svg className="w-6 h-6 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//                                 </svg>
//                             </div>
//                             <h3 className="text-xl font-bold mb-3 text-gray-800">After Sales Services</h3>
//                             <p className="text-gray-600 leading-relaxed">
//                                 At <strong>HH Tech Hub</strong>, our commitment to clients doesn’t end after project delivery.
//                                 We proudly offer <strong>free after-sales services</strong> to ensure your systems run smoothly
//                                 and efficiently.
//                             </p>

//                         </motion.div>
//                     </div>
//                 </div>
//             </section>

//             {/* Contact CTA */}
//             <section className="py-20 px-6 bg-white">
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     viewport={{ once: true }}
//                     className="max-w-4xl mx-auto bg-gradient-to-r from-[#f97316] to-[#ea580c] rounded-2xl p-12 text-center text-white shadow-2xl"
//                 >
//                     <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
//                     <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
//                         Let's discuss how HH Tech Hub can help you achieve your digital transformation goals
//                     </p>
//                     <div className="flex flex-col sm:flex-row justify-center gap-4">
//                         <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             className="bg-white text-[#f97316] font-semibold px-8 py-3 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
//                         >
//                             Start Your Journey
//                         </motion.button>
//                         <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             className="border-2 border-white text-white font-semibold px-8 py-3 text-lg rounded-lg hover:bg-white/10 transition-all duration-300"
//                         >
//                             Contact Our Team
//                         </motion.button>
//                     </div>
//                 </motion.div>
//             </section>
//         </div>
//     );
// };

// export default AboutCompany;