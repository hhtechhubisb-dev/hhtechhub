
import { supabase } from '../config/supabaseClient'; // Import supabase client

export const LoginService = async (email, password) => {
  try {
    // Sign in the user with Supabase Auth
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    // If there is an error during the login process
    if (error) {
      throw new Error(error.message);
    }

    // If login is successful, store the access token
    const { access_token, user } = data.session;
    localStorage.setItem('access_token', access_token); // Store the token in localStorage

    // Fetch role from custom 'users' table
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('role')
      .eq('email', email)
      .single();

    if (userError) {
      throw new Error("Failed to fetch user role");
    }

    return { success: true, user: data.user, role: userData.role }; // Include role in response
  } catch (error) {
    return { success: false, message: error.message }; // Return error message
  }
};
