import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { deleteTask, updateTask } from '../api/api';
import { useDispatch } from 'react-redux';
import { editTask, removeTask } from '../store/taskSlice';
import EditTaskForm from './EditTaskForm';

function Task({task,dashboard=false}) {
    const [showEditTaskForm, setShowEditTaskForm] = useState(false)
    const dispatch = useDispatch()
    
    const {_id, title, description, status, priority, dueDate } = task
    const [isCompleted, setIsCompleted] = useState(status === 'completed')


    async function handleDeleteTask(_id){
        const res = await deleteTask(_id)
        if(res.status == 200){
            dispatch(removeTask(_id))
        }
    }


    const handleCompletedChecked = async () =>{
        let updatedData;
        setIsCompleted(!isCompleted)
        if(!isCompleted){
            const res = await updateTask({_id,...task, status:"completed"})
            updatedData = res.data.data
        } else{
            const res = await updateTask({_id,...task,status:"in-progress"})
            updatedData = res.data.data
        }

        dispatch(editTask(updatedData))
    }


    return (
        <div> 
            <div className="bg-white shadow-md rounded-xl p-4 border border-gray-100 w-full max-w-md">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                    <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                            status === 'completed'
                                ? 'bg-green-100 text-green-700'
                                : status === 'in-progress'
                                ? 'bg-yellow-100 text-yellow-700'
                                : status === 'delayed'
                                ?'bg-red-100 text-red-700'
                                :'bg-gray-100 text-gray-700'
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

               {
                    !dashboard &&
                     <div className='flex justify-between items-center'>
                     <div>
                         <input 
                             type="checkbox" 
                             className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                             checked={isCompleted}
                             onChange={handleCompletedChecked}
                         />
                     </div>
 
                     <div className='flex gap-3 mt-3'>
                         <button 
                             className='flex justify-center p-2 text-xl bg-red-500 text-white rounded-full cursor-pointer hover:bg-red-700'
                             onClick={()=>handleDeleteTask(task._id)}
                         ><MdDelete/></button>
                         <button 
                             className='flex justify-center  items-center p-2 text-xl bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-700'
                             onClick={()=>setShowEditTaskForm(prev => !prev)}
                         ><FaEdit /></button>
                     </div>
                 </div>
               }

            </div>


            <div>
                {
                    (showEditTaskForm) && (
                        <div className="fixed inset-0 backdrop-blur flex items-center justify-center z-50">
                            <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-xl">
                                <EditTaskForm setShowEditTaskForm={setShowEditTaskForm} task={task}/>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Task