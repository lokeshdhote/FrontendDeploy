import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { LoginUser } from "../store/Actions/productAction";
import { useEffect } from "react";

const Nav = ()=>{
    const dispatch = useDispatch()
      
    useEffect(()=>{
      dispatch(LoginUser())
    },[dispatch])
    const {Login} = useSelector((state)=>state.productReducer)



    return(
        <nav className=" min-w-screen h-[3.5vw]  flex  items-center justify-center">
         <div className="w-[60%] h-[2.5vw] bg-stone-200 rounded-full  flex  items-center gap-[7vw] justify-center">
         <Link className="font-[500]" to="/" >Home</Link>
<Link className="font-[500]" to= {Login ? "/product" : "/UserAth"}>Product</Link>
<Link className="font-[500]" to={Login ? "/about" : "/UserAth"} >About</Link>

            </div>
        </nav> 
    )
}
export default Nav
//