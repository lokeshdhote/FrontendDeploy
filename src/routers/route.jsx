import { Navigate, Route, Routes } from "react-router-dom";
import Product from "../components/Product";
import About from "../components/About";
import Home from "../components/Home";
import Details from "../components/Details";
import Wishlist from "../components/Wishlist";
import Order from "../components/Order";
import Cart from "../components/Cart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import UserAth from "../components/UserAth";
import CreateProduct from "../components/CreateProduct";
import { LoginUser } from "../store/Actions/productAction";
// import { logedUser } from "../store/Actions/productAction";


const route = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(LoginUser());
  }, [dispatch]);

  const { Login } = useSelector((state) => state.productReducer);
console.log(Login);
 

  return (
    <Routes>
      <Route path="/" element={<Home />} />
     
      <Route path="/UserAth" element={<UserAth/>} />

      <Route path="/product" element={  Login ? <Product/> : <UserAth/>} />
     
      <Route path="/product/:id" element={<Details />} />
      <Route path="/about" element={ Login ? <About /> : <UserAth/>} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/order" element={<Order />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/createProduct" element={<CreateProduct />} />
      <Route path="/cart/:id" element={<Cart />} />
    
    </Routes>
  );
}

export default route;
