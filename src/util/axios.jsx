import axios from "axios";

const instance =  axios.create({
    baseURL :"https://backenddeploy-7n72.onrender.com/",
    withCredentials:true,
   
})
export default instance