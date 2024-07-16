import axios from "axios";

const instance =  axios.create({
    // baseURL :"https://back-end-e-commerce-node.onrender.com",
    baseURL :"http://localhost:3000",
    withCredentials:true,
   
})
export default instance