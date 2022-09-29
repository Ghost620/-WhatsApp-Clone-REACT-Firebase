import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './sidebar';
import Chat from './Chat';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./Login"

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
      <div className="app_body">
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/rooms/:roomId" element={<Chat />} />

            <Route path="/" element={<Chat />} />
          </Routes>
        </Router>
      </div> )
      }
      
    </div>
  );
}

export default App;
