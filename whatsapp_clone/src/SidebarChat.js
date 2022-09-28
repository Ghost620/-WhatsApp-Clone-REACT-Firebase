import React, {useEffect, useState} from 'react'
import "./SidebarChat.css"
import { Avatar } from '@mui/material';

const SidebarChat = ( { addNewChat } ) => {

  const [seed, setSeed] = useState('')
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  })

  const createChat = () => {
    const roomName = prompt("Please enter name for chat");

    if (roomName) {
      // DB
    }
  }

  return !addNewChat ? (
    <div className='sidebarChat'>
        <Avatar src={`https://avatars.dicebear.com/api/bottts/:${seed}.svg`}/>
        <div className='sidebarChat_info'>
            <h2>Room Name</h2>
            <p>Last message on the room</p>
        </div>
    </div>
  ): (
    <div onClick={createChat} className='sidebarChat'>
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat