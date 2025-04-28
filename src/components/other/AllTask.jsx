// AllTask.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
    const { employees } = useContext(AuthContext);

    return (
        <div className='bg-[#1c1c1c] mt-5 rounded p-5'>
            <div className='flex justify-between mb-3 bg-red-400 py-1 px-4 rounded'>
                <h2 className='text-lg font-medium w-1/5'>Employee</h2>
                <h3 className='text-lg font-medium w-1/5'>New Task</h3>
                <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
                <h5 className='text-lg font-medium w-1/5'>Completed</h5>
                <h5 className='text-lg font-medium w-1/5'>Failed</h5>
            </div>
            <div>
                {employees.map((emp, idx) => (
                    <div key={idx} className='flex justify-between mb-3 border-1 py-1 px-4 mr-2 rounded'>
                        <h2 className='text-lg font-medium w-1/5'>{emp.firstName}</h2>
                        <h3 className='text-lg font-medium w-1/5 text-blue-600'>{emp.tasks.filter(task => task.new_task).length}</h3>
                        <h5 className='text-lg font-medium w-1/5 text-yellow-600'>{emp.tasks.filter(task => task.active).length}</h5>
                        <h5 className='text-lg font-medium w-1/5 text-green-600'>{emp.tasks.filter(task => task.completed_task).length}</h5>
                        <h5 className='text-lg font-medium w-1/5 text-red-600'>{emp.tasks.filter(task => task.failed_task).length}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllTask;
