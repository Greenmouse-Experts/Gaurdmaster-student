import React, {useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import MyProfile from './MyProfile'
import "../Stylesheet/dashboard.css"
import Sidebar from '../Components/Sidebar'
import Profile from './Profile'
import Message from './Message'
import Notify from './Notify'
import { SlMenu } from "react-icons/sl";

const Dashboard = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
      };
    const close = () => {
        setIsOpen(false);
    }
  return (

        
        <div className="dash_main">
            <div className={`side_main ${isOpen ? 'sidebar-open' : ''}`}>
                <Sidebar close={close}/>
            </div>
            
            <div className="routes">
            <div className="menu_svg"  onClick={toggleSidebar}>
                <SlMenu /> Menu
            </div>
            
                <Routes>
                    <Route path='' element={<MyProfile/>}/>
                    <Route path='profile' element={<Profile/>}/>
                    <Route path='message' element={<Message/>}/>
                    <Route path='notify' element={<Notify/>}/>
                </Routes>
            </div>
        </div>
  )}

export default Dashboard;
