import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react'; // You need lucide-react or replace with text/icon
import axios from 'axios';
import { loginUser } from '../api/api';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState(false)
    const [userError, setUserError]  = useState(false)
    const navigate = useNavigate();

    const handleLogin = async (formData) =>{
        setPasswordError(false)
        setUserError(false)

        const user = Object.fromEntries(formData.entries())
        const res = await loginUser(user)
        if(res.status === 200){
            navigate('/dashboard')
        }else if(res.response.data.message === "Incorrect password") {
            setPasswordError(true)
        }else if(res.response.data.message === "User does not exist"){
            setUserError(true)
        }

    }
    return (
        <section className="min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="bg-gray-100 shadow-md px-8 py-4 flex items-center justify-between fixed top-0 w-full z-10">
            <Link to='/' className="text-2xl font-bold text-gray-800">TaskManager</Link>
            <Link to="/signup">
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                Signup
            </button>
            </Link>
        </nav>

        {/* Main Content */}
        <div className="flex flex-1 justify-center items-center mt-24 px-6">
            <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden">
            {/* Left - Illustration */}
            <div className="w-1/2 bg-gray-100 hidden md:flex items-center justify-center p-8">
                <img
                src="https://illustrations.popsy.co/gray/work-from-home.svg"
                alt="Illustration"
                className="w-3/4"
                />
            </div>

            {/* Right - Form */}
            <div className="w-full md:w-1/2 p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Login to your account</h3>
                <form  action={handleLogin} className="space-y-5">
                {/* Email */}
                <div>
                    <label className="block text-gray-600 mb-1" htmlFor="email">
                    Email
                    </label>
                    <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder='san@example.com'
                    required
                    className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {userError && <p className='text-red-500'>User does not exist</p>}

                </div>

                {/* Password */}
                <div>
                    <label className="block text-gray-600 mb-1" htmlFor="password">
                    Password
                    </label>
                    <div className="relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        id="password"
                        placeholder='1234567'
                        required
                        className="w-full border border-gray-300 px-4 py-2 pr-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {passwordError && <p className='text-red-500'>Incorrect password</p>}
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 top-2.5 text-gray-500 hover:text-gray-800"
                        tabIndex={-1}
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                    </div>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Login
                </button>
                </form>

                <p className="mt-4 text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/signup" className="text-blue-500 hover:underline">
                    Create new account
                </Link>
                </p>
            </div>
            </div>
        </div>
        </section>
    );
}

export default Login;
