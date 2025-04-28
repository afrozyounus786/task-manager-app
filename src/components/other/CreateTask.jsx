// CreateTask.jsx
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
    const { employees, setEmployees } = useContext(AuthContext);

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDiscription, setTaskDiscription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        const newTask = {
            taskTitle,
            taskDiscription,
            taskDate,
            category,
            active: false,
            new_task: true,
            failed_task: false,
            completed_task: false,
        };

        // Update employees array
        const updatedEmployees = employees.map(emp => {
            if (emp.firstName === assignTo) {
                return { ...emp, tasks: [...emp.tasks, newTask] };
            }
            return emp;
        });

        setEmployees(updatedEmployees);
        localStorage.setItem("employees", JSON.stringify({ employees: updatedEmployees }));

        // Clear form
        setTaskTitle('');
        setCategory('');
        setTaskDate('');
        setTaskDiscription('');
        setAssignTo('');
    };

    return (
        <form onSubmit={submitHandler} className='w-full bg-[#1c1c1c] flex flex-wrap items-start justify-between p-3 mt-3'>
            <div className='w-1/2'>
                <h3>Task Title</h3>
                <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} placeholder="Task Title" />

                <h3>Date</h3>
                <input value={taskDate} onChange={(e) => setTaskDate(e.target.value)} type="date" />

                <h3>Assign To</h3>
                <input value={assignTo} onChange={(e) => setAssignTo(e.target.value)} placeholder="Employee Name" />

                <h3>Category</h3>
                <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
            </div>

            <div className='w-1/2'>
                <h3>Task Description</h3>
                <textarea value={taskDiscription} onChange={(e) => setTaskDiscription(e.target.value)}></textarea>
                <button type="submit">Create Task</button>
            </div>
        </form>
    );
};

export default CreateTask;
