// // src/components/Signup.jsx
// import { useState } from "react";
// import { signupUser } from "../../apiservices/signupService";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     fullName: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { email, fullName, password, confirmPassword } = formData;

//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     const result = await signupUser(email, fullName, password);
//     if (result.success) {
//       alert(result.message);
//       window.location.href = "/login"; // Redirect to login page
//     } else {
//       alert(result.message);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-background">
//       <div className="flex min-h-screen">
        
//         {/* Left Side - Image and Text */}
//         <div className="flex-1 flex flex-col justify-center items-center p-12 bg-gray-100">
//           <div className="max-w-md w-full space-y-8">
//             {/* Hero Image */}
//             <div className="rounded-2xl overflow-hidden shadow-elegant">
//               <img
//                 src="/logo.svg"
//                 alt="HH TECH LOGO"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Large Text */}
//             <div className="text-center space-y-4">
//               <h1 className="text-4xl font-bold text-orange-500 leading-tight">
//                 Empowering Digital Innovation
//               </h1>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 We craft tailored software solutions, mobile apps, and cloud systems that drive growth and scalability for your business — globally.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Signup Form */}
//         <div className="flex-1 flex items-center justify-center p-12">
//           <div className="w-full max-w-lg shadow-lg border-0 bg-white rounded-lg p-8">
//             {/* Image Above the Card */}
//             <div className="mb-6 text-center">
//               <img
//                 src="\src\assets\logo.svg"
//                 alt="Signup Illustration"
//                 className="w-20 h-10 mx-auto mb-4"
//               />
//             </div>

//             {/* Card Header */}
//             <div className="text-center space-y-2 mb-6">
//               <h2 className="text-3xl font-bold">Create Account</h2>
//               <p className="text-base">Enter your information to get started</p>
//             </div>

//             {/* Signup Form */}
//             <form className="space-y-6" onSubmit={handleSubmit}>
//               <div className="space-y-2">
//                 <label htmlFor="name" className="text-sm font-medium">
//                   Full Name
//                 </label>
//                 <input
//                   id="name"
//                   name="fullName"
//                   type="text"
//                   placeholder="Enter your full name"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   required
//                   className="h-11 w-full border border-gray-300 rounded-md p-2"
//                   aria-label="Full Name"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="email" className="text-sm font-medium">
//                   Email Address
//                 </label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder="Enter your email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="h-11 w-full border border-gray-300 rounded-md p-2"
//                   aria-label="Email Address"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="password" className="text-sm font-medium">
//                   Password
//                 </label>
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   placeholder="Create a password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                   className="h-11 w-full border border-gray-300 rounded-md p-2"
//                   aria-label="Password"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="confirmPassword" className="text-sm font-medium">
//                   Confirm Password
//                 </label>
//                 <input
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   type="password"
//                   placeholder="Confirm your password"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   required
//                   className="h-11 w-full border border-gray-300 rounded-md p-2"
//                   aria-label="Confirm Password"
//                 />
//               </div>

//               <div className="flex justify-center mt-8">
//                 <button
//                   type="submit"
//                   className="w-full bg-orange-500 hover:bg-orange-400 text-white py-3 rounded-lg font-medium transition-colors mt-4"
//                   aria-label="Create Account"
//                 >
//                   Create Account
//                 </button>
//               </div>

//               <div className="text-center mt-4">
//                 <p className="text-sm text-muted-foreground">
//                   Already have an account?{" "}
//                   <a
//                     href="/login"
//                     className="text-orange-500 hover:text-orange-400 font-medium text-lg"
//                   >
//                     Sign in
//                   </a>
//                 </p>
//               </div>
//             </form>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Signup;
