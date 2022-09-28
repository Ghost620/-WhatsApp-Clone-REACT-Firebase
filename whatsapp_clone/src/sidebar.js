import React from 'react'
import "./Sidebar.css"
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SearchOutlined } from '@mui/icons-material'
import SidebarChat from './SidebarChat';

const sidebar = () => {
  return (
    <div className='sidebar'>

        <div className='sidebar_header'>

          <Avatar src='https://cdn.pixabay.com/photo/2016/01/31/19/41/apple-1172060_960_720.jpg'/>

          <div className='sidebar_headerRight'>
              
            <IconButton>
              <DonutLargeIcon />
            </IconButton>

            <IconButton>
              <ChatIcon />
            </IconButton>

            <IconButton>
              <MoreVertIcon />
            </IconButton>            
              
          </div>

        </div>

        <div className='sidebar_search'>
            <div className='sidebar_searchContainer'>
              <SearchOutlined />
              <input placeholder='Search or Start new chat' type='text' />
            </div>
        </div>
        
        <div className='sidebar_chats'>
          <SidebarChat />
          <SidebarChat />
        </div>

    </div>
  )
}

export default sidebar