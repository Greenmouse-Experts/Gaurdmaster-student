import React from "react";
import { Link } from "react-router-dom";  
import "../Stylesheet/about.css";

export const Header = ({ image, title, body }) => {
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
            <p><Link to="/">Home</Link> / {body}</p>
         
          </div>
        </div>
      </div>
    </div>
  );
};
