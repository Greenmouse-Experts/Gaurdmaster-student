import axios from "axios";
import { BASE_URL } from "../constant.Jsx";

axios.defaults.baseURL =  BASE_URL
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('guard_token')}`;

export const uploadFile = async(payload) => {
    return  axios.post(`/upload/image`, payload).then((response) => response.data)
 } 