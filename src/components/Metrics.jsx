import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Metrics() {
    const tasks = useSelector(state => state.task);
    const [metrics, setMetrics] = useState({
        remaining: 0,
        completed: 0,
        inProgress: 0,
        pending: 0,
        delayed: 0,
        high: 0
    });

    useEffect(() => {
        const newMetrics = {
            remaining: 0,
            completed: 0,
            inProgress: 0,
            pending: 0,
            delayed: 0,
            high: 0
        };

        tasks.forEach(task => {
            if (['pending', 'in-progress', 'delayed'].includes(task.status)) {
                newMetrics.remaining += 1;
            }

            if (task.status === 'completed') {
                newMetrics.completed += 1;
            }

            if (task.status === 'in-progress') {
                newMetrics.inProgress += 1;
            }

            if (task.status === 'pending') {
                newMetrics.pending += 1;
            }

            if (task.status === 'delayed') {
                newMetrics.delayed += 1;
            }

            if (task.priority === 'high') {
                newMetrics.high += 1;
            }
        });

        setMetrics(newMetrics);
    }, [tasks]);

    const metricItems = [
        { label: "Remaining", value: metrics.remaining, color: "bg-blue-100 text-blue-800" },
        { label: "In Progress", value: metrics.inProgress, color: "bg-yellow-100 text-yellow-800" },
        { label: "Completed", value: metrics.completed, color: "bg-green-100 text-green-800" },
        { label: "Pending", value: metrics.pending, color: "bg-gray-100 text-gray-800" },
        { label: "Delayed", value: metrics.delayed, color: "bg-red-100 text-red-800" },
        { label: "High Priority", value: metrics.high, color: "bg-pink-100 text-pink-800" }
    ];

    return (
        <section className="mt-10 px-4">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Task Metrics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {metricItems.map((item, index) => (
                    <div
                        key={index}
                        className={`rounded-xl shadow-md p-5 ${item.color} flex items-center justify-between`}
                    >
                        <span className="text-lg font-medium">{item.label}</span>
                        <span className="text-2xl font-bold">{item.value}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Metrics;
