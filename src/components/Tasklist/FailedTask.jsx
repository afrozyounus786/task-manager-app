import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className=' flex-shrink-0 p-5 h-full w-[300px] rounded-xl bg-yellow-500'>
    <div className='flex justify-between'>
        <h3 className="bg-red-600 text-sm px-3 py-1">{data.category}</h3>
        <h4 className='font-sm'>{data.date}</h4>
    </div>
    <h2 className='mt-2 text-2xl font-semibold'>{data.title}</h2>
    <p className='font-sm mt-2'>{data.description}</p>
    <div className='mt-0.5'>
      <button className='w-full bg-amber-300 rounded py-0.5'>Failed</button>
        </div>
</div>
  )
}

export default FailedTask