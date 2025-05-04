import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { deleteTask } from '../api/api';
import { useDispatch } from 'react-redux';
import { removeTask } from '../store/taskSlice';

function Task({task}) {
    const { title, description, status, priority, dueDate } = task
    const dispatch = useDispatch()
    async function handleDeleteTask(_id){
        console.log(_id)
        const res = await deleteTask(_id)
        if(res.status == 200){
            dispatch(removeTask(_id))
        }
        console.log(res)
    }


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

            <div className='flex justify-between mt-3'>
                <button 
                    className='flex justify-center p-2 text-xl bg-red-500 text-white rounded-full cursor-pointer hover:bg-red-700'
                    onClick={()=>handleDeleteTask(task._id)}
                ><MdDelete/></button>
                <button className='flex justify-center  items-center p-2 text-xl bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-700'><FaEdit /></button>
            </div>
        </div>
    )
}
export default Task