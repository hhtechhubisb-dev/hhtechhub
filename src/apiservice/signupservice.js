// // src/services/signupService.js
// import { supabase } from '../config/supabaseClient';

// export const signupUser = async (email, fullName, password) => {
//   try {
//     // Sign up the user with Supabase Auth
//     const { data: authData, error: authError } = await supabase.auth.signUp({
//       email,
//       password,
//     });

//     if (authError) {
//       throw authError;
//     }

//     // Save additional user info in 'users' table with default 'user' role
//     const { error: dbError } = await supabase
//       .from("users")
//       .insert([
//         {
//           email,
//           full_name: fullName,
//           password, // 🔒 Consider hashing if not using Supabase Auth for login
//           role: 'user', // 👈 Explicitly set role as 'user'
//         },
//       ]);

//     if (dbError) {
//       throw dbError;
//     }

//     return { success: true, message: "Account created successfully! Please check your email to verify." };
//   } catch (error) {
//     return { success: false, message: error.message || "Signup failed." };
//   }
// };
