import React from 'react'
import { useState } from 'react'

const TagInput = () => {
    const [tags,setTags] = useState([])

    const handlekeydown = (e)=>{
        if(e.key!=="Enter") return
        const value = e.target.value
        if(!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''

    }

    const removeTag = (index) => {
        setTags(tags.filter((el,i)=> i !== index))
    }
  return (
    <div className='border border-teal-900  px-2 py-1  rounded-xl w-[200px] bg-white flex items center flex-wrap gap-2'>
      {/*
      <div className='bg-gray-200 inline-block px-3 rounded-xl mr-2'>
        <span>hello</span>
        <span className='ml-2 inline-flex rounded-xl cursor-pointer'>
            <div className=' flex '>
                <div className=''>&times;</div>
            </div>
        </span>
      </div> */}
      {tags.map((tag,index)=>(
        <div className='bg-gray-200 inline-block px-3 rounded-xl mr-2' key={index}>
        <span>{tag}</span>
        <span onClick={()=>removeTag(index)} className='ml-2 inline-flex rounded-xl cursor-pointer'>
            <div className=' flex '>
                <div className=''>&times;</div>
            </div>
        </span>
      </div>
      ))}
      <input onKeyDown={handlekeydown} type="text" placeholder='Add Team Member' className='py-1 px-2 w-full rounded-xl outline-none'/>
    </div>
  )
}

export default TagInput
