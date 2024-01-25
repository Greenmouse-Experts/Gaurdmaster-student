import axios from "axios";
import * as ENDPOINT from "../constant";

axios.defaults.baseURL =  ENDPOINT.BASE_URL
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('guard_token')}`;

export const uploadFile = async(payload) => {
    return  axios.post(`/upload/image`, payload).then((response) => response.data)
 } 