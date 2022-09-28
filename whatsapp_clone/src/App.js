import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './sidebar';
import Chat from './Chat';

function App() {
  return (
    <div className="app">
      
      <div className='app_body'>
        <Sidebar />
        <Chat />
      </div>
      
    </div>
  );
}

export default App;
