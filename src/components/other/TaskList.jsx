import React from 'react'

const TaskList = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='rounded-2xl w-[45%] px-10 py-10 bg-red-500'>
            <h2 className='text-2xl font-semibold'>{data.taskNumbers.new_task}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>    
        </div>  
        <div className='rounded-2xl w-[45%] px-10 py-10 bg-blue-500'>
            <h2 className='text-2xl font-semibold'>{data.taskNumbers.completed_task}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>    
        </div>  
        <div className='rounded-2xl w-[45%] px-10 py-10 bg-green-500'>
            <h2 className='text-2xl font-semibold'>{data.taskNumbers.active}</h2>
            <h3 className='text-xl font-medium'>Accepted Task</h3>    
        </div>  
        <div className='rounded-2xl w-[45%] px-10 py-10 bg-yellow-500'>
            <h2 className='text-2xl font-semibold'>{data.taskNumbers.failed_task}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>    
        </div>        
    </div>
  )
}

export default TaskList