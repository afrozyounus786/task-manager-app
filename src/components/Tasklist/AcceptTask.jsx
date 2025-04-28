import React from 'react'

const AcceptTask = ({data}) => {

  console.log(data.title);

  return (
    <div className=' flex-shrink-0 p-5 h-full w-[300px] rounded-xl bg-yellow-500'>
            <div className='flex justify-between'>
                <h3 className="bg-red-600 text-sm px-3 py-1">{data.category}</h3>
                <h4 className='font-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-2 text-2xl font-semibold'>{data.title}</h2>
            <p className='font-sm mt-2'>{data.description}</p>
            <div className='flex justify-between mt-2'>
                <button className='bg-green-500 py-1 px-2 text-sm rounded'>Mark as Completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm rounded'>Mark as failed</button>
            </div>
    </div>
  )
}

export default AcceptTask