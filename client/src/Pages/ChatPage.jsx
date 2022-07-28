import React, { useState, useContext} from "react";
import ChatContext from '../Context/chat-context.js';
import { Box } from '@chakra-ui/react';
import SideDrawer from "../Components/SideDrawer";
import MyChats from "../Components/MyChats.jsx";
import Chatbox from "../Components/ChatBox.jsx";


const ChatPage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = useContext(ChatContext);
  return (
    <div style={{ width: "100%" }}>
          {user && <SideDrawer/>}
          <Box display="flex" justifyContent="space-between" width="100%" h="90.5vh" p="12px">
            {user && <MyChats fetchAgain={fetchAgain} />}
            {user && ( <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />)}
          </Box>
    </div>
  );
};

export default ChatPage;
