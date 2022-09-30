import React, { useState, useEffect } from 'react'
import "./Chat.css"
import { Avatar, IconButton } from '@mui/material';
import { SearchOutlined, MoreVert, AttachFile } from '@mui/icons-material'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MicIcon from '@mui/icons-material/Mic';
import { useParams } from "react-router-dom";
import db from './firebase';
import firebase from "firebase/compat/app";
import { useStateValue } from './StateProvider';

const Chat = () => {

  const [seed, setSeed] = useState('')
  const [input, setInput] = useState('')
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([])
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    if (roomId) {

      db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
        setRoomName(snapshot.data().name)
      })

      db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
        setMessages(snapshot.docs.map( (doc) => doc.data()))
      })

    }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [roomId])

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(input)

    db.collection('rooms').doc(roomId).collection('messages').add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    
    setInput('')
  }

  return (
    <div className='chat'>

        <div className='chat_header'>
          <Avatar src={`https://avatars.dicebear.com/api/bottts/:${seed}.svg`}/>

          <div className='chat_headerInfo'>
            <h3>{roomName}</h3>
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

          {messages.map(msg => (

            <p className={`chat_message ${msg.name === user.displayName && 'chat_receiver'}`}>
              <span className='chat_name'> {msg.name} </span>
              {msg.message}
              <span className='chat_timestamp'> {new Date(msg.timestamp?.toDate()).toUTCString()} </span>
            </p>

          ))}

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