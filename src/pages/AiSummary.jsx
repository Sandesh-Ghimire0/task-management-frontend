import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAiSummary } from '../AI/summary'
import ReactMarkDown from 'react-markdown'
import {Commet} from 'react-loading-indicators'
import { useQuery } from '@tanstack/react-query'

function AiSummary() {
    // const [aiSummary, setAiSummary] = useState('')
    const tasks = useSelector(state => state.task)

    function formatTasksForSummary(tasks) {
        return tasks.map((task, index) => {
            const formattedDate =  task.dueDate &&  new Date(task.dueDate).toISOString().split("T")[0];
            return `Task ${index + 1}:\n` +
                `- Title: ${task.title}\n` +
                `- Priority: ${task.priority || 'N/A'}\n` +
                `- Due Date: ${formattedDate|| 'N/A'}\n` +
                `- Status: ${task.status || 'N/A'}\n`;
            }).join('\n');
        }


    const fetchSummary = async () => {
        const formattedTasks = formatTasksForSummary(tasks);
        const summary = await getAiSummary(formattedTasks);
        return summary
    };

    const {data, isPending, isError, error } = useQuery({
        queryKey:['summmary',tasks],
        queryFn:fetchSummary,
        staleTime:100000
    })

    console.log(data)


    // useEffect(()=>{
    //     fetchSummary()
    // },[tasks])


    if(!data){ 
        return <div className='container flex h-screen justify-center items-center'>
            <Commet color="#32cd32" size="medium" text="Generating Summary..." textColor="" />
        </div>
    }

    return (
        <div className='container'>
            <h1 className='text-2xl font-semibold'>AI Summary Report</h1>
            <ReactMarkDown>{data}</ReactMarkDown>
        </div>
    )
}

export default AiSummary