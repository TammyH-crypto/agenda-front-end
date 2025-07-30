import React from 'react'
import { useEffect, useState } from "react";

const baseUrl = "https://tammy-backend.codex-p4-2025.click/api/";
const endPoint = "tasks";

export const TaskTracker = async (req, res) => {
    const [tasks, setTasks] = useState([]);
    
    const getTasks = async () => {
        const url = `${baseUrl}${endPoint}/tasks`;
        const result = await fetch(url);
        const data = await result.json();
        setTasks(data);
    };

    const handleAddTask = async (task) => {
        const url = `${baseUrl}${endPoint}/tasks`;
    }
    useEffect(() => {
        getTasks();
    }, []);
    
    return (
        <div>
        <h1>Task Tracker</h1>
        <ul>
            {tasks.map(task => (
            <li key={task.id}>{task.name} - {task.status}</li>
            ))}
        </ul>
        </div>
    );
}
