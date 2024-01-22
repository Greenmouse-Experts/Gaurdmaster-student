import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import logo from "../assets/logo.png";
import { getUser } from "../services/api/authApi";
import { useQuery } from "@tanstack/react-query";

const LoginUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, isError, data, isSuccess } = useQuery({
    queryKey: ["getUser"],
    queryFn: () => getUser(id || ""),
    retry: 1,
    retryDelay: 1000,
  });
  useEffect(() => {
    if (isSuccess) {
        const payload = {
            token: data.token,
            name: data.user.name,
            email: data.user.email,
            phone: data.user.phone,
            image: data.user.photo,
            state: data.user.state,
            account: data.user.userType,
            id: data.user.id,
          };
          saveUser(payload);
          localStorage.setItem("guard_token", id);
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
  }, [isSuccess]);

  return (
    <>
      <div className="main_login">
        <div className="fixed top-0 left-0 bg-white z-[30000] h-screen w-full mont">
          <div className="w-full h-full bg-login">
            <div className="box h-full flex items-center justify-center">
              <div className="lg:w-[550px] mx-auto bg-white lg:px-16 p-6">
                <Link to="/">
                  <img
                    src={logo}
                    alt="logo"
                    className="w-[250px] absolute left-6 top-6"
                    width={400}
                    height={80}
                  />
                </Link>
                <div className="my-8 lg:mt-16 mb-5 mx-auto">
                  {isLoading && (
                    <div className="w-full h-36 flex justify-center">
                      <BeatLoader size={34} />
                    </div>
                  )}
                  {isSuccess && (
                    <div>
                      <img
                        src={
                          "https://res.cloudinary.com/greenmouse-tech/image/upload/v1705925994/rsh/check-mark_vhbeuv.png"
                        }
                        alt="check"
                        className="w-6/12 mx-auto"
                      />
                      <p className="text-center text-black fw-600 text-lg lg:text-xl">
                        Login Success
                      </p>
                    </div>
                  )}
                  {isError && (
                    <div>
                      <img
                        src={
                          "https://res.cloudinary.com/greenmouse-tech/image/upload/v1705929170/rsh/failed_zbvdtm.gif"
                        }
                        alt="check"
                        className="w-4/12 mx-auto"
                      />
                      <p className="text-center text-black mt-5 fw-600 text-lg lg:text-xl">
                        Token Expired
                      </p>
                      <div className="mt-6 flex justify-center">
                        <a
                          href="https://guardmaster.netlify.app/login"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-lg bg-primary text-white font-medium"
                        >
                          Try Again
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginUser;
