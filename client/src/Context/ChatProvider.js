import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import ChatContext from './chat-context';

const ChatProvider = (props)=>{
    const [user,setUser] = useState();
    const [selectedChat,setSelectedChat] = useState();
    const [chats,setChats] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        const userInformation = JSON.parse(localStorage.getItem("userInformation"));
        setUser(userInformation);
        if(!userInformation) navigate("/");
    },[navigate])

    return (
        <div>
            <ChatContext.Provider
            value={{
                user,setUser,
                selectedChat,setSelectedChat,
                chats,setChats
            }}
            >
            {props.children}
            </ChatContext.Provider>
        </div>
    )
}

export default ChatProvider;
