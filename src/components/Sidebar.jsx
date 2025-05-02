import React from 'react'
import { MdDashboard } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import profile_pic from '../assets/profile_pic.jpg'
import { BsFillBarChartLineFill, BsLayoutSidebar } from "react-icons/bs";
import { FaClipboardList, FaTasks } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";




function Sidebar() {
    return (
        <section className='w-[18%] flex flex-col gap-7 bg-black text-white pl-5 h-screen pt-4 relative'>
            <div className='flex items-center gap-3'>
                <img src={profile_pic} alt="Profile picture of the user" className='w-10 h-10 rounded-full'/>
                <span>Sandesh</span>
            </div>
            <div className='absolute top-6 right-8 text-2xl'>
                <BsLayoutSidebar />
            </div>

            <NavLink to='/tasks?addTask=true'>
                <div className='flex items-center gap-3'>
                    <span>Add Task</span>
                    <IoMdAdd />
                </div>
            </NavLink>
            
            <NavLink to='/'>
                <div className='flex items-center gap-3'>
                    <MdDashboard />
                    <span>Dashboard</span>
                </div>
            </NavLink>

            <NavLink to='/tasks'>
                <div className='flex items-center gap-3'>
                    <FaTasks />
                    <span>Tasks</span>
                </div>
            </NavLink>

            <NavLink to='/remaining'>     
                <div className='flex items-center gap-3'>
                    <FaClipboardList />
                    <span>Remaining</span>
                </div>
            </NavLink>

            <NavLink to='/analytic'>
                
                <div className='flex items-center gap-3'>
                    <BsFillBarChartLineFill />
                    <span>Analytic</span>
                </div>
            </NavLink>    
            

        </section>
    )
}

export default Sidebar