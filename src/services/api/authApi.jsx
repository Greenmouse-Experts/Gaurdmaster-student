import axios from "axios";
import { BASE_URL } from "../constant.Jsx";

// const Base = ENDPOINT.BASE_URL
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Authorization"] = `${localStorage.getItem(
  "guard_token"
)}`;
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
        localStorage.clear()
      return (window.location.href = "/auth/login");
    }
    return Promise.reject(error);
  }
);

export const getUser = async(payload) => {
    return  axios.get(`/auth/profile`, {
      headers: {
        Authorization: `Bearer ${payload}`
      }
    }).then((response) => response.data)
  } 