import React from "react";
import {  NavLink } from "react-router-dom";  
import "../Stylesheet/course.css";

const Header = ({ image, title }) => {
  return (
    <div className="main_header">
    
      <div className="header">
        <div className="header_cont">
          <div className="header_img">
            <img src={image} alt="" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1000"
            className="header_text"
          >
            <h2>{title}</h2>
            <div className="head_link">
              <NavLink to="/course">All Courses</NavLink> <NavLink to="/wishlist">Wishlist</NavLink>
            </div>
            
         
          </div>
        </div>
      </div>
    </div>
  );
};


export default Header
