import React, { useEffect } from 'react'
import Todos from '../components/Todos'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks } from '../store/taskSlice'

function Tasks() {
    const tasks = useSelector(state => state.task)


    console.log(tasks)
    return (
        <div className='container'>
            {
                 tasks.map(task => {
                    return <div key={task._id} className='p-3 max-w-60'>
                        <p>Title : {task.title}</p>
                        <p>Description : {task.description}</p>
                    </div>
                })
            }
        </div>
    )
}

export default Tasks