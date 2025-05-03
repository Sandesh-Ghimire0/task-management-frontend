import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTasks } from '../store/taskSlice'


function MainLayout() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchTasks())
    },[dispatch])
  return (
    <>
        <div className='flex'>
            <Sidebar />
            <Outlet />
        </div>
    </>
  )
}

export default MainLayout