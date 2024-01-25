import React from "react";
import useAuthStore from "../store/userStore";
import dayjs from "dayjs";
import useModal from "../Hooks/useModal";
import UpdateProfile from "../Components/Auth/UpdateProfile";
import { GoPasskeyFill } from "react-icons/go";
import ChangePassword from "../Components/Auth/ChangePassword";
import ProfileAvatar from "../Components/UI/ProfileAvatar";
import { MdOutlineCameraAlt } from "react-icons/md";
import { uploadFile } from "../services/api/routine";
import { updateProfile } from "../services/api/authApi";
import { toast } from "react-toastify";

const MyProfile = () => {
  const user = useAuthStore((state) => state.user);
  const saveUser = useAuthStore((state) => state.saveUser);
  const { Modal, setShowModal } = useModal();
  const { Modal: Password, setShowModal: ShowPassword } = useModal();
  const handleChange = (e) => {
    const img = e.target.files[0];
    const fd = new FormData();
    fd.append("image", img);
    uploadFile(fd)
      .then((data) => {
        const pic = data.image;
        const payload = {
          picture: pic,
        };
        updateProfile(payload)
          .then((data) => {
            toast.success(data.message);
            saveUser({
              ...user,
              image: pic,
            });
          })
          .then((error) => {
            toast.error(error.response.data.message);
            setIsBusy(false);
          });
      })
      .then((error) => {
        toast.error(error.response.data.message);
      });
  };
  return (
    <>
      <div className="main_profile">
        <div className="flex justify-between items-center">
          <div className="flex gap-x-5 items-center">
            <div className="relative">
              {user.image ? (
                <img src={user.image} alt="profile"  className="w-[135px]"/>
              ) : (
                <ProfileAvatar
                  name={`${user.firstName} ${user.lastName}`}
                  font={48}
                  size={135}
                />
              )}
              <div className="absolute -bottom-3 right-1 bg-white w-12 h-12 circle overflow-hidden shadow cursor-pointer place-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleChange}
                  className="absolute top-0 left-0 opacity-0"
                />
                <MdOutlineCameraAlt className="text-2xl" />
              </div>
            </div>
            <h3 className="font-bold text-3xl">STUDENT</h3>
          </div>
          <div className="flex gap-x-3 items-center">
            <button
              className="bg-primary px-6 py-3 text-white font-semibold rounded-[30px]"
              onClick={() => setShowModal(true)}
            >
              EDIT PROFILE
            </button>
            <div
              className="place-center w-12 h-12 rounded-lg bg-primary text-white cursor-pointer"
              onClick={() => ShowPassword(true)}
            >
              <GoPasskeyFill />
            </div>
          </div>
        </div>
        <div className="body_profile">
          <h3>My Profile</h3>
          <div>
            <p>
              <span>Registration Date:</span>{" "}
              {dayjs(user.joined).format("dddd DD, MMMM YYYY")}
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
              <span>Phone Number:</span>
              {user.phone}
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
      <Modal title={"Update My Profile"} type={"withCancel"} size={"md"}>
        <UpdateProfile close={() => setShowModal(false)} />
      </Modal>
      <Password title={"Change Password"} type={"withCancel"} size={"md"}>
        <ChangePassword close={() => ShowPassword(false)} />
      </Password>
    </>
  );
};

export default MyProfile;
