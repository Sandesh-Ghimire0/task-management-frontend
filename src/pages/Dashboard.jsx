import React from 'react'
import { useSelector } from 'react-redux'
import Task from '../components/Task'
import Metrics from '../components/Metrics'
import Graphs from '../components/Graphs'

function Dashboard() {
    const tasks = useSelector(state => state.task)
    return (
        <>
            <div className='container '>

                <div>
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">High Priority Tasks</h2>
                    <div className='grid grid-cols-2 gap-2'>
                            {
                                tasks.map(task => {
                                    if (task.priority === 'high'){
                                        return <Task task={task} dashboard={true} key={task._id} />

                                    }
                                })
                            }
                    </div>
                    
                </div>

               <div>
                    <Metrics />
               </div>

               <div>
                    <Graphs />
               </div>
            </div>

        </>
    )
}

export default Dashboard