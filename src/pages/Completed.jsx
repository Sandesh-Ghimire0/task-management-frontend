import React from 'react'
import { useSelector } from 'react-redux'
import Task from '../components/Task'

function Completed() {
    const tasks = useSelector(state => state.task)
    

  return (
    <div className='container'>
        <h1 className='text-2xl font-semibold'>Completed Task</h1>

        <div className='mt-10 grid grid-cols-2 gap-5'>
            {
                tasks.map(task => {
                    if(task.status === 'completed'){
                        return <Task task={task} completed={true}/>
                    }
                })
            }
        </div>
    </div>
  )
}

export default Completed