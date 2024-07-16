
import { useDispatch, useSelector } from "react-redux"
import Nav from "./Nav.jsx"
import { LoginUser } from "../store/Actions/productAction.jsx";
import { useEffect } from "react";
const Home = ()=>{
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(LoginUser());
  }, [dispatch]);


return(
<div className="min-w-screen h-screen bg-emerald-700 ">
  <Nav/>
  <div className="w-[100%] h-[80%] flex items-center pt-[3vw] ">
    <div className="w-1/2 h-full  " >
    
    <h2 className="text-[2.5vw] font-sanif pl-[8vw]  text-stone-300 pt-[7vw] "><span className="text-[2.7vw] font-[400]">S</span>hop your <br />    </h2>
    <h2 className="text-[2.5vw] font-sanif pl-[10vw]  text-stone-300  " >product ...!</h2>
    </div>
    <div className="w-1/2  h-full flex pt-[4vw] justify-center" >
    <div className=" w-[20vw] h-[20vw] rounded ">
      <img className="w-full h-full object-contain" src="https://i.pinimg.com/564x/16/ed/2b/16ed2b9502f6c18c50590f2f6b562f95.jpg" alt="loading error" />
    </div>
    </div>
  </div>
  <div className="min-w-screen ">
    <h1 className=" text-center   text-[1.5vw] text-neutral-300">
    'Discover Exclusive Deals and Unique Finds - Shop Smarter, Live Better with ShopWave !'
    </h1>
  </div>
</div>
  
)
}
export default Home