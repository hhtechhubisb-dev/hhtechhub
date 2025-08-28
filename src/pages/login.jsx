import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router
import { LoginService } from '../apiservice/loginservices'; // Import login service
import toast from 'react-hot-toast'; // Import a toast library for displaying messages

function Login() {
    const navigate = useNavigate(); // React Router
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Call the login service
        const result = await LoginService(email, password);
        console.log("after calling the login service:", result);

        if (result.success) {
            // If login is successful, redirect based on role
            if (result.role === 'admin') {
                navigate("/admindashboard");
            } else {
                navigate("/");
            }
        } else {
            // If login fails, handle the error message
            setErrorMessage(result.message);
            toast.error(result.message); // Show toast message
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-white-50">
            {/* Left Side - Image and Text */}
            <div className="flex-1 flex flex-col justify-center items-center p-12 bg-gray-100">
                <div className="max-w-md w-full space-y-8">
                    {/* Hero Image */}
                    <div className="rounded-2xl overflow-hidden shadow-elegant">
                        <img
                            src="/logo.svg"
                            alt="HH TECH LOGO"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Large Text */}
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl font-bold text-orange-500 leading-tight">
                            Login
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Enter your credentials to login.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Column - Form */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 flex items-center justify-center">
                <div className="w-full max-w-md">
                    {/* Mobile Header */}
                    <div className="md:hidden mb-8 text-center">
                        <div className="flex justify-center mb-4">
                            <img src="/svgs/logo.svg" alt="Logo" width={100} height={30} />
                        </div>
                        <div className="flex justify-center mb-4">
                            <img src="/svgs/logo.svg" alt="Text" width={150} height={30} />
                        </div>
                        <div className="text-center">
                            <h2 className="text-xl mb-4 text-gray-800">Sign in to your account</h2>
                            <p className="text-xl font-bold text-amber-600">Secure & Protected</p>
                        </div>
                    </div>

                    {/* Sign In Form */}
                    <div className="w-full max-w-md mx-auto p-6 sm:p-8 bg-white rounded-lg shadow-lg">
                        <div className="text-center md:text-left mb-6">
                            <div className="mb-6 text-center">
                                <img
                                    src="/logo.svg"
                                    alt="Signup Illustration"
                                    className="w-20 h-10 mx-auto mb-4"
                                />
                            </div>
                            <h2 className="text-2xl text-center sm:text-3xl font-bold text-gray-800 mb-2">Sign In</h2>
                            <p className="text-gray-600 text-center">Access your account</p>
                        </div>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Enter password"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500 text-sm"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? 'Hide' : 'Show'}
                                    </button>
                                </div>
                            </div>

                            {/* Error Message */}
                            {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}

                            {/* Forgot Password Link */}
                            {/* <div className="text-right text-sm">
                                <Link to="/forgot-password" className="text-black-600 hover:underline">
                                    Forgot password?
                                </Link>
                            </div> */}

                            <button
                                type="submit"
                                className="w-full bg-orange-500 hover:bg-orange-400 text-white py-3 rounded-lg font-medium transition-colors mt-4"
                            >
                                Sign In
                            </button>
                        </form>

                        {/* Divider */}
                        {/* <div className="flex items-center my-6">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="mx-4 text-gray-500 text-sm">OR</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div> */}

                        {/* <p className="text-center text-sm">
                            Don't have an account?{' '}
                            <Link to="/signup" className="text-red-600 hover:underline font-medium">
                                Register
                            </Link>
                        </p> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
