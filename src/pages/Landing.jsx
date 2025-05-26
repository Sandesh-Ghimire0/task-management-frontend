import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className="min-h-screen bg-gray-50">
        {/* Navbar */}
        <nav className="flex justify-between items-center py-4 px-8 bg-white shadow">
            <Link to='/' className="text-2xl font-bold text-gray-800">TaskManager</Link>
            <div className="space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
            <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Signup</Link>
            </div>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20">
            {/* Left content */}
            <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Manage Your Tasks Effortlessly
            </h2>
            <p className="text-gray-600 mb-6">
                Boost your productivity by keeping all your tasks in one place and staying organized.
            </p>
            <Link to="/signup" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
                Get Started
            </Link>
            </div>

            {/* Right image */}
            <div className="mt-10 md:mt-0 md:ml-10">
            <img
                src="https://illustrations.popsy.co/gray/work-from-home.svg"
                alt="Task management illustration"
                className="w-full max-w-md"
            />
            </div>
        </section>
        </div>
    );
}

export default LandingPage;
