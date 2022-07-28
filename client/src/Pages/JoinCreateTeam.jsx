import React from 'react'

const JoinCreateTeam = () => {
  return (
    <div>
      <div>
      <div className='mx-auto rounded flex border border-black w-4/5 h-[500px] p-10 gap-2'>
        <div className='w-1/2 border border-red-500 rounded h-full text-center '>
            <h2 className='text-2xl mb-5'>Create Team</h2>
            <input className='rounded-full border border-teal-900 text-white px-2 py-1 'type="text" placeholder='Enter Team ID'/>
            <button className='rounded-full bg-teal-600 text-white px-2 py-1'>Create Team</button>
        </div>
        <div className='border border-teal-900 rounded-full'></div>
        <div className='w-1/2 border border-red-500 rounded h-full text-center'>
            <h2 className='text-2xl mb-5'>Join Team </h2>
            
            <div className='flex justify-center gap-5'>
                <input className='rounded-full border border-teal-900 text-white px-2 py-1 'type="text" placeholder='Enter Team ID'/>
                <button className='rounded-full bg-teal-600 text-white px-2 py-1'>Join Team</button>
            
            </div>
        </div>
      </div>

    </div>
    </div>
  )
}

export default JoinCreateTeam;
