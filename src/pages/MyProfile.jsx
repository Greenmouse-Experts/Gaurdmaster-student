import React from "react";
import prof from "../assets/user.png";
import { Link } from "react-router-dom";
import useAuthStore from "../store/userStore";
import dayjs from "dayjs";

const MyProfile = () => {
  const user = useAuthStore((state) => state.user);
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
            <span>Registration Date:</span> {dayjs(user.joined).format('dddd DD, MMMM YYYY')}
          </p>
          <p>
            <span>Full Name:</span>
            {`${user.firstName} ${user.lastName}`}
          </p>
          <p>
            <span>Email:</span>
            {user.email}
          </p>
          <p>
            <span>Phone Number:</span>{user.phone}
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
