import React from "react";
import profile from "../../image/profile.png";
import "../stylesheet/styles.css";
import { BiLogoGmail } from "react-icons/bi";
import { BsFillCalendarDateFill, BsTelephoneFill } from "react-icons/bs";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile_left">
        <h2>My Profile <span><h3>1GFD3EQL3Z</h3></span></h2>
        <div className="profile_head">
          <img src={profile} alt="" />
          <div>
            <h3>GreenMouse Tech</h3>
            <p>Individual</p>
            <button>Upload Photo</button>
          </div>
        </div>
        <div className="profile_body">
          <div>
            <span>
              <BiLogoGmail />
            </span>{" "}
            <div className="prof_card">
              <label htmlFor="email">Email</label>
              <h3>greenmousedev@gmail.com</h3>
            </div>
          </div>
          <div>
            <span>
              <BsTelephoneFill />
            </span>
            <div className="prof_card">
              <label htmlFor="phone">Phone</label>
              <h3>09887665554</h3>
            </div>
          </div>
          <div>
            <span>
              <BsFillCalendarDateFill />
            </span>
            <div className="prof_card">
              <label htmlFor="register">Registered</label>
              <h3>7/29/2022, 2:03:39 PM</h3>
            </div>
          </div>
        </div>
      </div>

    <div className="profile_right">
        <form action="submit">
            <h2>Update Profile</h2>

            <div className="input_log">
          <label htmlFor="firstname">First Name</label>
          <div>
            
            <input type="text" name="login_details" placeholder="Enter First Name"/>
          </div>
        </div>
        <div className="input_log">
          <label htmlFor="lastname">Last Name</label>
          <div>
            
            <input type="text" name="login_details" placeholder="Enter Last name" />
          </div>
        </div>
        <div className="input_log">
          <label htmlFor="phone">Phone Number</label>
          <div>
            
            <input type="text" name="login_details" placeholder="Enter Phone Number" />
          </div>
        </div>

        <button>Update Profile</button>


        </form>
        <form action="submit">
            <h2>Change Password</h2>

            <div className="input_log">
          <label htmlFor="newwpass">New Password</label>
          <div>
            
            <input type="text" name="login_details" placeholder="Enter New Password"/>
          </div>
        </div>
        <div className="input_log">
          <label htmlFor="confirmnew">Confirm New Password</label>
          <div>
            
            <input type="text" name="login_details" placeholder="Re-Enter Password" />
          </div>
        </div>
       

        <button>Update Password</button>


        </form>
    </div>
    </div>
  );
};

export default Profile;
