// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';

// const ForgotPasswordPage = () => {
//   const [email, setEmail] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Add your form submission logic here (e.g., API call)
// //     console.log('Reset link sent to:', email);
// //   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-white-50">
//       {/* Left Side - Image and Text */}
//         <div className="flex-1 flex flex-col justify-center items-center p-12 bg-gray-100">
//           <div className="max-w-md w-full space-y-8">
//             {/* Hero Image */}
//             <div className="rounded-2xl overflow-hidden shadow-elegant">
//              <img
//   src="/logo.svg"
//   alt="HH TECH LOGO"
//   className="w-full h-full object-cover "
// />

//             </div>

//             {/* Large Text */}
//             <div className="text-center space-y-4">
//               <h1 className="text-4xl font-bold text-orange-500 leading-tight">
//                 Empowering Digital Innovation
//               </h1>
//               {/* Small Text */}
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 We craft tailored software solutions, mobile apps, and cloud systems that drive growth and scalability for your business — globally.
//               </p>
//             </div>
//           </div>
//         </div>

//  {/* Right Column - Form */}
// <div className="w-full md:w-1/2 p-6 sm:p-8 flex items-center justify-center">
//   <div className="w-full max-w-md">
   
   

//     {/* Forgot Password Form */}
//     <div className="w-full h p-6 sm:p-8 bg-white rounded-lg shadow-lg">
//           {/* Image Above the Card */}
//                             <div className="mb-6 text-center">
//                                 <img
//                                     src="\src\assets\logo.svg"
//                                     alt="Signup Illustration"
//                                     className="w-20 h-10 mx-auto mb-4"
//                                 />
//                             </div>
//       <div className="text-center md:text-left mb-6">
//         <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Forgot Password</h2>
//         <p className="text-gray-600">Enter your email to receive reset instructions</p>
//       </div>

// <form className="space-y-8"> {/* Increased space-y value to 6 for more space */}
//   {/* Email Field */}
//   <div>
//     <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
//     <input
//       type="email"
//       placeholder="Enter your email"
//       value={email}
//       onChange={handleEmailChange}
//       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//       required
//     />
//   </div>

//   <button
//     type="submit"
//     className="w-full bg-orange-500 hover:bg-orange-400 text-white py-3 rounded-lg font-medium transition-colors mt-4"
//   >
//     FORGOT
//   </button>
// </form>

// {/* Back to Login Link */}
// <div className="text-center mt-6">
//   <p className="text-sm text-gray-600">
//     Remembered your password?{' '}
//     <Link to="/login" className="text-red-600 hover:underline font-medium">
//       Sign in
//     </Link>
//   </p>
// </div>

//     </div>
//   </div>
// </div>

//     </div>
//   );
// }

// export default ForgotPasswordPage;
