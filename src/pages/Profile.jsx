import React, { useState } from "react";
import profile from "../assets/user.png";
import "../stylesheet/dashboard.css";
import { BiLogoGmail } from "react-icons/bi";
import { BsTwitterX, BsTelephoneFill } from "react-icons/bs";
import { FiUser, FiFacebook } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";


const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="profile">
      <h3>Settings info</h3>
      <div className="profile_btn">
        <button
          onClick={() => handleTabChange("profile")}
          className={activeTab === "profile" ? "active" : ""}
        >
          Profile
        </button>
        <button
          onClick={() => handleTabChange("password")}
          className={activeTab === "password" ? "active" : ""}
        >
          Password
        </button>
      </div>

      {activeTab === "profile" && (
        <div className="profile_div">
          <h3>Profile Settings</h3>
          <div>
            <img src={profile} alt="User Profile" />
            <div>
              <button>Choose File</button>
              <p>No File Chosen</p>
            </div>
          </div>
          <form action="" className="profile_form">
          <div className="double">
              <div className="input">
                <label htmlFor="">Full Name</label>
                <div>
                  <FiUser />
                  <input type="text" placeholder="" />
                </div>
              </div>
              <div className="input">
                <label htmlFor="">Email Address</label>
                <div>
                  <BiLogoGmail />
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="double">
              <div className="input">
                <label htmlFor="">Phone Number </label>
                <div>
                  <BsTelephoneFill />
                  <input type="text" placeholder="" />
                </div>
              </div>
              <div className="input">
                <label htmlFor="">Facebook</label>
                <div>
                <FiFacebook />
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="double">
              <div className="input">
                <label htmlFor="">Twitter </label>
                <div>
                <BsTwitterX />
                  <input type="text" placeholder="" />
                </div>
              </div>
              <div className="input">
                <label htmlFor="">Linkedin</label>
                <div>
                <FaLinkedinIn />
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="input">
              <label htmlFor="">About</label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            
            <button>SAVE CHANGES</button>
          </form>
          
        </div>
      )}

      {activeTab === "password" && (
        <div className="password_div">
          <h4>Change Password</h4>
          <form action="" className="triple">
            <div>
            <div className="input">
                <label htmlFor="">E-Mail Address*</label>
                <div>
                <IoLockClosedOutline />
                  <input type="text" placeholder="Email Address" />
                </div>
              </div>
              <div className="input">
                <label htmlFor="">New Password* </label>
                <div>
                <IoLockClosedOutline />
                  <input type="text" placeholder="New Password" />
                </div>
              </div>
              <div className="input">
                <label htmlFor="">Confirm New Password* </label>
                <div>
                <IoLockClosedOutline />
                  <input type="text" placeholder="Confirm Password" />
                </div>
              </div>
            </div>
          
              <button>CHANGE PASSWORD</button>
          </form>

          <div className="forgot">
          <h4>Forgot Password then Recover Password</h4>
          <p>Enter the email of your account to reset password. Then you will receive a link to email <br />To reset the password.If you have any issue about reset password</p>

          <form action="">
            <div className="input">
                <label htmlFor="">E-Mail Address*</label>
                <div>
                <IoLockClosedOutline />
                  <input type="text" placeholder="Email Address" />
                </div>
              </div>

              <button>RECOVER PASSWORD</button>
          </form>
          
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
