import React from 'react';
import { useSelector } from 'react-redux';
import {
    PieChart, Pie, Cell, Tooltip, Legend,
    BarChart, Bar, XAxis, YAxis, CartesianGrid,
    LineChart, Line
} from 'recharts';
import dayjs from 'dayjs'; // Optional, helps with date formatting


function Graphs() {
    function getTaskCountByDate(tasks) {
        const countByDate = {};
    
        tasks.forEach(task => {
            const date = dayjs(task.createdAt).format('YYYY-MM-DD');
            countByDate[date] = (countByDate[date] || 0) + 1;
        });
    
        // Convert to array format
        return Object.entries(countByDate).map(([date, count]) => ({ date, count }));
    }
    const COLORS = ['#34d399', '#fbbf24', '#f87171', '#60a5fa', '#d946ef'];
    const tasks = useSelector(state => state.task);
    const tasksOverTime = getTaskCountByDate(tasks);


    const statusData = [
        { name: 'Completed', value: tasks.filter(t => t.status === 'completed').length },
        { name: 'In Progress', value: tasks.filter(t => t.status === 'in-progress').length },
        { name: 'Pending', value: tasks.filter(t => t.status === 'pending').length },
        { name: 'Delayed', value: tasks.filter(t => t.status === 'delayed').length },
    ];

    const priorityData = [
        { name: 'High', count: tasks.filter(t => t.priority === 'high').length },
        { name: 'Medium', count: tasks.filter(t => t.priority === 'medium').length },
        { name: 'Low', count: tasks.filter(t => t.priority === 'low').length },
    ];

    return (
        <section className="mt-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pie Chart - Status */}
            <div className="bg-white rounded-xl shadow-md p-4">
                <h3 className="text-xl font-semibold mb-4">Task Status Distribution</h3>
                <PieChart width={300} height={300}>
                    <Pie
                        data={statusData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        label
                        dataKey="value"
                    >
                        {statusData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>

            {/* Bar Chart - Priority */}
            <div className="bg-white rounded-xl shadow-md p-4">
                <h3 className="text-xl font-semibold mb-4">Task Priority Levels</h3>
                <BarChart width={350} height={300} data={priorityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Bar dataKey="count" fill="#60a5fa" />
                </BarChart>
            </div>

            {/* Line Chart - Completed Over Time */}
            <div className="bg-white rounded-xl shadow-md p-4 col-span-1 md:col-span-2">
                <h3 className="text-xl font-semibold mb-4">Tasks Created Over Time</h3>
                <LineChart width={700} height={300} data={tasksOverTime}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Line type="monotone" dataKey="count" stroke="#3b82f6" strokeWidth={2} />
                </LineChart>
             </div>
        </section>
    );
}

export default Graphs;
