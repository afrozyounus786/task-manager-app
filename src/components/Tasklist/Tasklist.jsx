import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const Tasklist = ({data}) => {
  return (
    <div id="scrollbar" className=' flex items-center justify-start overflow-x-auto gap-5 h-[48%] w-full mt-10'>
       {data.tasks.map((e , idx)=>{
        
        if(e.active){
            return <AcceptTask key={idx} data={e}/>
        }
        if(e.new_task){
            return <NewTask  key={idx} data={e}/>
        }
        if(e.completed_task){
            return <CompleteTask  key={idx} data={e}/>
        }
        if(e.failed_task){
            return <FailedTask  key={idx} data={e}/>
        }
       })}
    </div>
  )
}

export default Tasklist