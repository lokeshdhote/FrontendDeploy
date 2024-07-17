import axios from "axios";

const instance =  axios.create({
    // baseURL :"https://backenddeploy-7n72.onrender.com/",

    baseURL :"http://localhost:3000/",

    withCredentials:true,
   
})
export default instance