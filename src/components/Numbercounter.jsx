import React from 'react'
import CountUp from 'react-countup'

const Numbercounter = () => {
  return (
<>
<div className='bg-blue-600 text-white px-14 py-12 mt-10'>
   <div className='container grid grid-cols-2 md:grid-cols-4 gap-8'>
    <div className='flex flex-col items-center justify-center'>
      <p className= 'text-3xl font-semibold'>
        <CountUp
        start={0}
        end={898}
        duration={3}
        enableScrollSpy= {true}
        scrollSpyDelay={true}
        
        />
      </p>
      <p>Expert Tutor</p>
    </div> 
    <div className='flex flex-col items-center justify-center'>
      <p className= 'text-3xl font-semibold'>        
        <CountUp
        end={20000}
        suffix='+'
        separator=','
        duration={3}
         enableScrollSpy= {true}
        scrollSpyDelay={true}
        
        /></p>
      <p>Hours Content</p>
    </div> 
    <div className='flex flex-col items-center justify-center'>
      <p className= 'text-3xl font-semibold'>
      <CountUp
        end={298}
        duration={3}
        enableScrollSpy= {true}
        scrollSpyDelay={true}
        
        />
      </p>
      <p>Subject & Course</p>
    </div> 
    <div className='flex flex-col items-center justify-center'>
      <p className= 'text-3xl font-semibold'>
        <CountUp
            end={72878}
            suffix='+'
            separator=','
            duration={3}
             enableScrollSpy= {true}
            scrollSpyDelay={true}
        />
      </p>
      <p>Active Student</p>
    </div> 
    </div>    
  </div>
</>
  )
}

export default Numbercounter
