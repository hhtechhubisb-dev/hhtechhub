// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const ResetPasswordPage = () => {
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleCurrentPasswordChange = (e) => {
//     setCurrentPassword(e.target.value);
//   };

//   const handleNewPasswordChange = (e) => {
//     setNewPassword(e.target.value);
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (newPassword !== confirmPassword) {
//       setErrorMessage('New passwords do not match.');
//     } else {
//       // Add reset password logic here (e.g., API call)
//       console.log('Password reset successful');
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-white-50">
//    {/* Left Side - Image and Text */}
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
//                 Reset Password
//               </h1>
//               {/* Small Text */}
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 Enter your current Password and new password to change your password.
//               </p>
//             </div>
//           </div>
//         </div>

//       {/* Right Column - Form */}
//       <div className="w-full md:w-1/2 p-6 sm:p-8 flex items-center justify-center">
//         <div className="w-full max-w-md">
//           {/* Reset Password Form */}
//           <div className="w-full h p-6 sm:p-8 bg-white rounded-lg shadow-lg">
//             {/* Image Above the Card */}
//             <div className="mb-6 text-center">
//               <img
//                 src="\src\assets\logo.svg"
//                 alt="Reset Password Illustration"
//                 className="w-20 h-10 mx-auto mb-4"
//               />
//             </div>
//             <div className="text-center md:text-left mb-6">
//               <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Reset Password</h2>
//               <p className="text-gray-600">Enter your current and new passwords to reset</p>
//             </div>

//             <form className="space-y-8" onSubmit={handleSubmit}>
//               {/* Current Password Field */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
//                 <input
//                   type="password"
//                   placeholder="Enter your current password"
//                   value={currentPassword}
//                   onChange={handleCurrentPasswordChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//                   required
//                 />
//               </div>

//               {/* New Password Field */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
//                 <input
//                   type="password"
//                   placeholder="Enter new password"
//                   value={newPassword}
//                   onChange={handleNewPasswordChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//                   required
//                 />
//               </div>

//               {/* Confirm New Password Field */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
//                 <input
//                   type="password"
//                   placeholder="Confirm new password"
//                   value={confirmPassword}
//                   onChange={handleConfirmPasswordChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//                   required
//                 />
//               </div>

//               {/* Error Message */}
//               {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}

//               <button
//                 type="submit"
//                 className="w-full bg-orange-500 hover:bg-orange-400 text-white py-3 rounded-lg font-medium transition-colors mt-4"
//               >
//                 RESET PASSWORD
//               </button>
//             </form>

//             {/* Back to Login Link */}
//             <div className="text-center mt-6">
//               <p className="text-sm text-gray-600">
//                 Remembered your password?{' '}
//                 <Link to="/login" className="text-red-600 hover:underline font-medium">
//                   Sign in
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResetPasswordPage;
