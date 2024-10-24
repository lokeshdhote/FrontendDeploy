import axios from "axios";

const instance =  axios.create({
    baseURL :"https://backend-deploy-blush.vercel.app",

    // baseURL :"http://localhost:3000/",

    withCredentials:true,
   
})
export default instance