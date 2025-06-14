import React, { use, useEffect, useState } from 'react'
import { getTasks } from '../api/api'

function Todos() {
    const [tasks, setTasks] = useState([])

    const fetchTasks = async () =>{
        try {
            const res = await getTasks()
            setTasks(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchTasks()
    },[])

    return (
        <>
            <div className='flex'>
                {
                    tasks.map(task => {
                        return <div key={task._id} className='p-3 max-w-60'>
                            <p>Title : {task.title}</p>
                            <p>Description : {task.description}</p>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Todos