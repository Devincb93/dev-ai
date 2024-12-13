
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './routes/homepage/Homepage'
import ChatPage from './routes/chatPage/ChatPage'
import RootLayout from './routes/RootLayout/RootLayout'
import DashboardLayout from './routes/DashboardLayout/DashboardLayout'
import DashBoardPage from './routes/dashboardPage/DashboardPage'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>

        <Route  element={<RootLayout/>}>
          <Route path='/' element={<Homepage/>}/>
          <Route element={<DashboardLayout/>}>
            <Route path='/Dashboard' element={<DashBoardPage/>}/>
            <Route path='/Dashboard/chats/:id' element={<ChatPage/>}/>
            
          </Route>
        </Route>
       
      </Routes>
    </BrowserRouter>
  )
}

export default App
