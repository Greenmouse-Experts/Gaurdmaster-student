import React from 'react'
import Navbar from '../Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import MyProfile from './MyProfile'


const Dashboard = () => {
  return (

        
        <div className="dash_main">
            <div className="sidebar">
                <p>ilore</p>
            </div>
            <div className="routes">
                <Routes>
                    <Route path='/' index element={<MyProfile/>}/>
                </Routes>
            </div>
        </div>

  )
}

export default Dashboard