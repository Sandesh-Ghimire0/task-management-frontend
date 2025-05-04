import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../store/taskSlice'
import { postTask } from '../api/api'
import { useNavigate } from 'react-router-dom';
import { closeTaskForm } from '../store/uiSlice';

function TaskForm() {
    const dispatch = useDispatch()
    // const tasks = useSelector(state => state.task)
    // const showTaskForm = useSelector(state => state.ui.showTaskForm)
    // const navigate = useNavigate()

    async function handleAddTask(formData){
        const data = Object.fromEntries(formData.entries())
        const res = await postTask(data)

        if(res.status == 200){
            dispatch(addTask(res.data.data)) // i need to push the data with _id property
        }

        dispatch(closeTaskForm())
        
    }


    return (
        <section className="p-6 bg-white">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Create a New Task</h2>
            <form action={handleAddTask} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                    <input type="text" name="title" id="title" className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
                    <textarea name="description" id="description" rows="3" className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>

                <div>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status:</label>
                    <select name="status" id="status" className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="pending">Pending</option>
                        <option value="in-progress">In-Progress</option>
                        <option value="completed">Completed</option>
                        <option value="delayed">Delayed</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Priority:</label>
                    <div className="flex gap-4">
                        <label className="flex items-center gap-2">
                            <input type="radio" name="priority" value="low" className="accent-blue-500" />
                            <span>Low</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="radio" name="priority" value="medium" className="accent-blue-500" />
                            <span>Medium</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="radio" name="priority" value="high" className="accent-blue-500" />
                            <span>High</span>
                        </label>
                    </div>
                </div>

                <div>
                    <label htmlFor="due-date" className="block text-sm font-medium text-gray-700">Due Date:</label>
                    <input type="date" name="dueDate" id="due-date" className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div className='flex gap-10'>
                    <button 
                        type="submit" 
                        className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                        onClick={handleAddTask}
                    >
                        Add Task
                    </button>

                    <div 
                        className="flex justify-center w-full mt-4 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                        onClick={()=>dispatch(closeTaskForm())}
                    >
                        cancel
                    </div>
                </div>

            </form>
        </section>
    )
}

export default TaskForm
