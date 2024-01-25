import React, { useState } from "react";
import TextInput from "../UI/TextInput";
import useAuthStore from "../../store/userStore";
import { updateProfile } from "../../services/api/authApi";
import { toast } from "react-toastify";

const UpdateProfile = ({close}) => {
  const user = useAuthStore((state) => state.user);
  const saveUser = useAuthStore((state) => state.saveUser);
  const [userData, setUserData] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
    phone: user?.phone,
  });
  const updateValue = (name, value) => {
    setUserData({ ...userData, [name]: value });
  };
  const [isBusy, setIsBusy] = useState(false)
  const handleUpdate = (e) => {
    e.preventDefault();
    setIsBusy(true)
    const payload = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      phone: userData.phone,
    };
    updateProfile(payload)
    .then((data) => {
        toast.success(data.message)
        saveUser({...user, ...payload})
        close()
    })
    .then((error) => {
        toast.error(error.response.data.message)
        setIsBusy(false)
    })
  };
  return (
    <>
      <div className="syne px-4">
        <form onSubmit={handleUpdate}>
          <div className="grid gap-4">
            <TextInput
              label={"First Name"}
              value={userData.firstName}
              onChange={(e) => updateValue("firstName", e.target.value)}
            />
            <TextInput
              label={"Last Name"}
              value={userData.lastName}
              onChange={(e) => updateValue("lasttName", e.target.value)}
            />
            <TextInput label={"Email"} value={userData.email} disabled />
            <TextInput
              label={"Phone"}
              value={userData.phone}
              onChange={(e) => updateValue("phone", e.target.value)}
            />
          </div>
          <div className="mt-12">
            <button className="btn-primary w-full py-3">{isBusy? "Updating..." : "Update"}</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateProfile;
