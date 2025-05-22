import React from 'react'
import { MdDashboard } from "react-icons/md"
import { NavLink, useNavigate } from 'react-router-dom'
import profile_pic from '../assets/profile_pic.jpg'
import { BsFillBarChartLineFill, BsLayoutSidebar } from "react-icons/bs"
import { FaClipboardList, FaTasks } from "react-icons/fa"
import { IoMdAdd } from "react-icons/io"
import { useDispatch } from 'react-redux'
import { openTaskForm } from '../store/uiSlice'
import { logoutUser } from '../api/api'

function Sidebar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = async () =>{
        const res = await logoutUser()

        if(res.status === 200){
            navigate('/')
        }
    }

  const navLinkStyles = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 
     ${isActive ? 'bg-gray-800 text-white font-semibold' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`

  return (
    <aside className='w-[18%] bg-black text-white h-screen flex flex-col justify-between fixed py-6 px-5'>

      {/* Top profile and collapse */}
      <div className='flex flex-col gap-8'>
        <div className='flex justify-between items-center px-2'>
          <div className='flex items-center gap-3'>
            <img src={profile_pic} alt="User" className='w-10 h-10 rounded-full object-cover' />
            <span className='text-white font-medium'>Sandesh</span>
          </div>
          <div className='text-2xl text-gray-500 cursor-pointer'>
            <BsLayoutSidebar />
          </div>
        </div>

        {/* Nav Links */}
        <nav className='flex flex-col gap-3 mt-6'>

          <NavLink to='/tasks' className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 " onClick={() => dispatch(openTaskForm())}>
            <IoMdAdd />
            <span>Add Task</span>
          </NavLink>

          <NavLink to='/dashboard' className={navLinkStyles}>
            <MdDashboard />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to='/tasks' className={navLinkStyles}>
            <FaTasks />
            <span>Tasks</span>
          </NavLink>

          <NavLink to='/remaining' className={navLinkStyles}>
            <FaClipboardList />
            <span>Remaining</span>
          </NavLink>

          <NavLink to='/analytic' className={navLinkStyles}>
            <BsFillBarChartLineFill />
            <span>Analytic</span>
          </NavLink>

        </nav>
      </div>

      {/* Logout */}
      <div className='px-2'>
        <NavLink className='text-red-400 hover:text-red-500 transition duration-200'>
          <span 
            className='flex items-center gap-2 py-2'
            onClick={handleLogout}
        >Logout</span>
        </NavLink>
      </div>
    </aside>
  )
}

export default Sidebar
