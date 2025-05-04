import React, { useEffect, useState } from 'react'
import Todos from '../components/Todos'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks } from '../store/taskSlice'
import TaskForm from '../components/TaskForm'
import { useSearchParams } from 'react-router-dom'

function Tasks() {
    const [showTaskForm, setShowTaskForm] = useState(false)
    const [searchParams] = useSearchParams();

    const addTask = searchParams.get('addTask')

    function handleAddTask(){
        setShowTaskForm(!showTaskForm)
    }

    const tasks = useSelector(state => state.task)

    return (
        <div className='container relative'>
            {(showTaskForm || addTask) && (
            <div className="fixed inset-0 backdrop-blur flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-xl">
                <TaskForm setShowTaskForm={setShowTaskForm} />
                </div>
            </div>
            )}


            <div className='grid grid-cols-2 gap-3 pt-15'>
                {
                    // displaying task card
                    tasks.map(task => {
                        const { title, description, status, priority, dueDate } = task

                        return (
                            <div className="bg-white shadow-md rounded-xl p-4 border border-gray-100 w-full max-w-md">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                                    <span
                                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                                            status === 'completed'
                                                ? 'bg-green-100 text-green-700'
                                                : status === 'in-progress'
                                                ? 'bg-yellow-100 text-yellow-700'
                                                : 'bg-gray-100 text-gray-700'
                                        }`}
                                    >
                                        {status}
                                    </span>
                                </div>
                    
                                <p className="text-sm text-gray-600 mb-3">{description || 'No description provided.'}</p>
                    
                                <div className="flex justify-between text-sm text-gray-700">
                                    <div>
                                        <span className="font-medium">Priority:</span>{' '}
                                        <span
                                            className={`capitalize ${
                                                priority === 'high'
                                                    ? 'text-red-600'
                                                    : priority === 'medium'
                                                    ? 'text-yellow-600'
                                                    : 'text-green-600'
                                            }`}
                                        >
                                            {priority}
                                        </span>
                                    </div>
                    
                                    <div>
                                        <span className="font-medium">Due:</span>{' '}
                                        {dueDate ? new Date(dueDate).toLocaleDateString() : 'N/A'}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className='absolute top-0 right-0'>
                <button 
                    className=' bg-black text-white px-4 py-2 cursor-pointer rounded-sm'
                    onClick={handleAddTask}
                >Add Task +</button>
            </div>
        </div>
    )
}

export default Tasks