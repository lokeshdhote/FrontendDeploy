import axios from "axios";

const instance =  axios.create({
    baseURL :"https://backenddeploy-1-4mre.onrender.com/",

    // baseURL :"http://localhost:3000/",

    withCredentials:true,
   
})
export default instance