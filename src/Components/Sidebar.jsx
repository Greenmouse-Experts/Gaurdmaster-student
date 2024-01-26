import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineShoppingCart, MdAccessTime , MdOutlineClose} from "react-icons/md";
import { GoBell } from "react-icons/go";
import {FiUser } from "react-icons/fi";
import { GrPower } from "react-icons/gr";



const Sidebar = ({close}) => {
    return (
    <div className="sidebar">
            <div className="close" onClick={close}>
            <MdOutlineClose />
            </div>
        <div className="sidebar_link">
            <NavLink onClick={close} to="/student" className="nav" exact ><FiUser /> My Profile</NavLink>
            <NavLink  onClick={close} to="message" className="nav"><GoBell /> Message</NavLink>
            <NavLink onClick={close} to="notify" className="nav"><MdAccessTime /> Notification</NavLink>
            <NavLink onClick={close} to="/history" className="nav"><MdOutlineShoppingCart /> Purchase History</NavLink>
            <p><GrPower />  Logout</p>
        </div>
    </div>
  )
}

export default Sidebar