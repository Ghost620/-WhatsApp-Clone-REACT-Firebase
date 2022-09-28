import React, { useState, useEffect } from 'react'
import "./Chat.css"
import { Avatar, IconButton } from '@mui/material';
import { SearchOutlined, MoreVert, AttachFile } from '@mui/icons-material'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MicIcon from '@mui/icons-material/Mic';

const Chat = () => {

  const [seed, setSeed] = useState('')
  const [input, setInput] = useState('')

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  })

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(input)

    setInput('')
  }

  return (
    <div className='chat'>

        <div className='chat_header'>
          <Avatar src={`https://avatars.dicebear.com/api/bottts/:${seed}.svg`}/>

          <div className='chat_headerInfo'>
            <h3>Room Name</h3>
            <p>Last scene</p>
          </div>

          <div className='chat_headerRight'>

            <IconButton>
              <SearchOutlined />
            </IconButton>

            <IconButton>
              <AttachFile />
            </IconButton>

            <IconButton>
              <MoreVert />
            </IconButton>

          </div>

        </div>

        <div className='chat_body'>

          <p className={`chat_message ${true && 'chat_receiver'}`}>
            <span className='chat_name'>Hello</span>
            Message
            <span className='chat_timestamp'>3:53pm</span>
          </p>

        </div>

        <div className='chat_footer'>

          <EmojiEmotionsIcon />
          <form>

            <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Type a message'/>

            <button type='submit' onClick={sendMessage}>Send a messae</button>

          </form>
          <MicIcon />

        </div>

    </div>
  )
}

export default Chat