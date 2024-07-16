import Home from "./Home.jsx"
import Product from "./Product.jsx";
import About from "./About.jsx";
import Details from "./Details.jsx";
import Login from "./Login.jsx";


const FullLayout =()=>{
 return(
    <div className="">
        <Home/>
    
        <Product/>
        <About/>
        <Details/>
    </div>
 )   
}
export default FullLayout
