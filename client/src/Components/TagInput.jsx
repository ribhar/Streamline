import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const TagInput = () => {
    const [tags,setTags] = useState([])

    const [users,setUsers] = useState([])

    const handlekeydown = async (e)=>{
        try{
            if(e.key==="Backspace"){
                setUsers([])
            }
            const value = e.target.value

            const data  = await axios.get(`https://chatwithtrinity.herokuapp.com/auth/getUserDetails?username=${value}`)
            setUsers(data.data.users)
            console.log(value )
            if(e.key!=="Enter") return
            // if(e.key!=="Backspace")
            if(!value.trim()) return
            setTags([...tags, value])
            e.target.value = ''
        }
        catch(e){
            console.log(e)
        }
       

    }
    
    const removeTag = (index) => {
        setTags(tags.filter((el,i)=> i !== index))
    }
  return (
    <div className='relative shadow-lg shadow-teal-900/20  px-2 py-1  rounded-xl w-[200px] bg-white flex items center flex-wrap gap-2'>
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
      <div className=''>
        <input onKeyUp={handlekeydown} type="text" placeholder='Add Team Member' className='py-1 px-2 w-full rounded-xl outline-none'/>
       { users.length>0 && <div className='absolute shadow-lg shadow-teal-900/20 left-0 top-8 rounded-br-xl rounded-bl-xl w-full bg-white'>{users.map((user)=>{
        return <div  className='flex justify-start items-center border border-b-0 p-3' key={user._id}>
            <img src="https://via.placeholder.com/30x30" alt="" className='rounded-full mr-2 '/>
            <div>{user.username}</div>
            </div>
       })}</div>}
      </div>
    </div>
  )
}

export default TagInput
