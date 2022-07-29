import React, { useState } from 'react'
import TagInput from '../Components/TagInput'


const JoinCreateTeam = () => {
    const [isclicked, setIsclicked ] = useState(false)
    const [isclicked1, setIsclicked1 ] = useState(false)
    
    const handleClick = (state,toggle)=>{
      state? toggle(false) : toggle(true)
    }
    
  return (
    <div>
      <div>
      <div className=' mt-10 mx-auto rounded flex  w-4/5 h-[500px] p-10 gap-5  shadow-[0_3px_10px_0px_#004D40]'>
        <div className='w-1/2  rounded-md h-full text-center bg-teal-50 pt-5 flex flex-col justify-center shadow-lg shadow-teal-900/20'>
          <div onClick={()=>handleClick(isclicked,setIsclicked)} className='flex justify-center items-center cursor-pointer'>
            <h2 className={'bg-teal-600 text-2xl  rounded-xl py-1 px-2 text-white '+ (isclicked? "hidden":"block")}>Create Team</h2>
          </div>
            
          <div className={'flex flex-col items-center gap-5 '+(isclicked? "block" : "hidden")}>

              <input className='rounded-xl border shadow-lg shadow-teal-900/20  px-2 py-1  outline-none' type="text" placeholder='Enter Team Name'/>
              <TagInput/>
              <button className='rounded-xl bg-teal-600 text-white px-2 py-1'>Create Team</button>
          
          </div>
            
        </div>
        <div className='border border-teal-900 rounded-xl'></div>
        <div className='w-1/2  rounded-md h-full text-center bg-teal-50 pt-5 flex flex-col justify-center shadow-lg shadow-teal-900/20'>
        <div onClick={()=>handleClick(isclicked1,setIsclicked1)} className='flex justify-center items-center cursor-pointer'>
            <h2 className={'bg-teal-600 text-2xl  rounded-xl py-1 px-2 text-white '+ (isclicked1? "hidden":"block")}>Join Team</h2>
          </div>
            {/* <h2 className='text-2xl mb-5'>Join Team </h2> */}
            
          <div className={'flex justify-center gap-5 '+(isclicked1? "block" : "hidden")}>
                <input className='rounded-xl border shadow-lg shadow-teal-900/20  px-2 py-1  outline-none'type="text" placeholder='Enter Team ID'/>
                <button className='rounded-xl bg-teal-600 text-white px-2 py-1'>Join Team</button>
            
            </div>
        </div>
      </div>

    </div>
    </div>
  )
}

export default JoinCreateTeam;
