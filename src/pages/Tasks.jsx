import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TaskForm from '../components/TaskForm'
import Task from '../components/Task'
import { openTaskForm } from '../store/uiSlice'

function Tasks() {

    const tasks = useSelector(state => state.task)

    const showTaskForm = useSelector(state => state.ui.showTaskForm)
    const dispatch = useDispatch()

    return (
        <div className='container relative'>
            {(showTaskForm) && (
            <div className="fixed inset-0 backdrop-blur flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-xl">
                <TaskForm />
                </div>
            </div>
            )}


            {
                tasks.length === 0
                    ?<h1 className='text-gray-400 font-medium'>No Tasks..</h1>
                    :<div className='grid grid-cols-2 gap-3 pt-15'>
                        {
                            // displaying task card
                            tasks.map(task => {
                                return <Task key={task._id} task={task}/>
                            
                            })
                        }
                    </div>
                    
            }

            <div className='absolute top-0 right-0'>
                <button 
                    className=' bg-black text-white px-4 py-2 cursor-pointer rounded-sm'
                    onClick={()=>dispatch(openTaskForm())}
                >Add Task +</button>
            </div>
        </div>
    )
}

export default Tasks