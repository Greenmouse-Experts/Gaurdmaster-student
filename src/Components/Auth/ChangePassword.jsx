import React, { useState } from "react";
import { toast } from "react-toastify";
import TextInput from "../UI/TextInput";
import { updatePassword } from "../../services/api/authApi";

const ChangePassword = ({close}) => {
  const [userData, setUserData] = useState({
    oldPassword: "",
    newPassword: "",
    newPasswordConfirmation: "",
  });
  const updateValue = (name, value) => {
    setUserData({ ...userData, [name]: value });
  };
  const [isBusy, setIsBusy] = useState(false);
  const handleUpdate = (e) => {
    e.preventDefault();
    setIsBusy(true);
    if(userData.newPassword !== userData.newPasswordConfirmation){
        toast.error('Password does not match')
        setIsBusy(false)
        return ;
    }
    updatePassword(userData)
      .then((data) => {
        toast.success(data.message);
        close();
      })
      .then((error) => {
        toast.error(error.response.data.message);
        setIsBusy(false);
      });
  };
  return (
    <>
      <div className="syne px-4">
        <form onSubmit={handleUpdate}>
          <div className="grid gap-4">
            <TextInput
              type={"password"}
              label={"Old Password"}
              value={userData.oldPassword}
              onChange={(e) => updateValue("oldPassword", e.target.value)}
            />
            <TextInput
              type={"password"}
              label={"New Password"}
              value={userData.newPassword}
              onChange={(e) => updateValue("newPassword", e.target.value)}
            />
            <TextInput
              type={"password"}
              label={"Confirm New Password"}
              value={userData.newPasswordConfirmation}
              onChange={(e) =>
                updateValue("newPasswordConfirmation", e.target.value)
              }
            />
            <div className="mt-12">
              <button className="btn-primary w-full py-3">
                {isBusy ? "Updating..." : "Update"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
