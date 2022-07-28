import React from 'react'

const JoinCreateTeam = () => {
  return (
    <div>
      <div>
      <div className=' mt-10 mx-auto rounded flex  w-4/5 h-[500px] p-10 gap-5 bg-teal-700'>
        <div className='w-1/2  h-full text-center bg-white rounded-md pt-5'>
            <h2 className='text-2xl mb-5'>Create Team</h2>
            <div className='flex justify-center gap-5 '>
                <input className='rounded-full border border-teal-900  px-2 py-1 'type="text" placeholder='Enter Team Name'/>
                <button className='rounded-full bg-teal-600 text-white px-2 py-1'>Create Team</button>
            
            </div>
            
        </div>
        <div className='border border-teal-50 rounded-full'></div>
        <div className='w-1/2  rounded-md h-full text-center bg-white pt-5'>
            <h2 className='text-2xl mb-5'>Join Team </h2>
            
            <div className='flex justify-center gap-5 '>
                <input className='rounded-full border border-teal-900  px-2 py-1 'type="text" placeholder='Enter Team ID'/>
                <button className='rounded-full bg-teal-600 text-white px-2 py-1'>Join Team</button>
            
            </div>
        </div>
      </div>

    </div>
    </div>
  )
}

export default JoinCreateTeam;
