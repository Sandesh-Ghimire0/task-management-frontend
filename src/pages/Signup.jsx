import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react'; // For password toggle
import { signUpUser } from '../api/api';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState(false)
    const [usernameError, setUsernameError] = useState(false)

    const [user , setUser] = useState({
        username:'',
        email:"",
        password:''
    })

    const navigate = useNavigate()

    const handleSignUp = async (formData) =>{
        setEmailError(false)
        setUsernameError(false)

        const userData = Object.fromEntries(formData.entries())
        const res = await signUpUser(userData)

        if(res.status == 200){
            navigate('/login')
        } else if(res.response.data.message === "email already exist"){
            setEmailError(true)
        } else if(res.response.data.message === "User already exist"){
            setUsernameError(true)
        }

    }

    return (
        <section className="min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="bg-gray-100 shadow-md px-8 py-4 flex items-center justify-between fixed top-0 w-full z-10">
            <Link to='/' className="text-2xl font-bold text-gray-800">TaskManager</Link>
            <Link to="/login">
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                Login
            </button>
            </Link>
        </nav>

        {/* Main Content */}
        <div className="flex flex-1 justify-center items-center mt-24 px-6">
            <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden">
            {/* Left - Illustration */}
            <div className="w-1/2 bg-gray-100 hidden md:flex items-center justify-center p-8">
                <img
                src="https://illustrations.popsy.co/gray/taking-notes.svg"
                alt="Illustration"
                className="w-3/4"
                />
            </div>

            {/* Right - Signup Form */}
            <div className="w-full md:w-1/2 p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Create your account</h3>
                <form action={handleSignUp} className="space-y-5">
                {/* Username */}
                <div>
                    <label className="block text-gray-600 mb-1" htmlFor="username">
                    Username
                    </label>
                    <input
                    type="text"
                    name="username"
                    id="username"
                    value={user.username}
                    onChange={(e)=>setUser({...user,username:e.target.value})}
                    required
                    className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {usernameError && <p className='text-red-500'>Username already exist</p> }
                </div>

                {/* Email */}
                <div>
                    <label className="block text-gray-600 mb-1" htmlFor="email">
                    Email
                    </label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={(e)=>setUser({...user,email:e.target.value})}
                    required
                    className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {emailError && <p className='text-red-500'>Email already exist</p>}
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
                        value={user.password}
                        onChange={(e)=>setUser({...user,password:e.target.value})}
                        required
                        className="w-full border border-gray-300 px-4 py-2 pr-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
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
                    Signup
                </button>
                </form>

                <p className="mt-4 text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-500 hover:underline">
                    Login here
                </Link>
                </p>
            </div>
            </div>
        </div>
        </section>
    );
}

export default Signup;
