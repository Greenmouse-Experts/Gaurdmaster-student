import React from "react";
import prof from "../assets/user.png";
import { Link } from "react-router-dom";

const MyProfile = () => {
  return (
    <div className="main_profile">
      <div className="profile_heading">
        <div>
          <img src={prof} alt="" />
          <h3>STUDENT</h3>
        </div>

        <Link to="/student/profile">EDIT PROFILE</Link>
      </div>
      <div className="body_profile">
        <h3>My Profile</h3>
        <div>
          <p>
            <span>Registration Date:</span> Wed 09 Dec 2020, 03:52:33 AM
          </p>
          <p>
            <span>Full Name:</span>
            STUDENT
          </p>
          <p>
            <span>Email:</span>
            student@mail.com
          </p>
          <p>
            <span>Phone Number:</span>09035672900
          </p>
          <p>
            <span>Address:</span>
          </p>
          <p>
            <span>Facebook:</span>
          </p>
          <p>
            <span>Twitter:</span>
          </p>
          <p>
            <span>Linked in:</span>
          </p>
          <p>
            <span>About:</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
