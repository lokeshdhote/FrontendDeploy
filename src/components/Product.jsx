import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./Nav";
import Card from "./Card";
import { LoginUser, getProduct, searchPage } from "../store/Actions/productAction";
import { clearErr, clearMsg, searchClear } from "../store/Reducers/productSlice";
import { toast } from "react-toastify";

const Product = () => {
  const dispatch = useDispatch();
  const [search, setsearch] = useState("");
  const searchHandler = (e) => {
    setsearch(e.target.value);
    if (e.target.value !== "") {
      dispatch(searchPage(e.target.value));
    }
    else{
      dispatch(searchClear());
    }
  };
  const { product, searchData, like,Login,loading,message,error } = useSelector(
    (state) => state.productReducer
  );
  console.log(searchData);
  // Fetch product data when the component mounts
  useEffect(() => {
    dispatch(getProduct());
    dispatch(LoginUser())
  }, [dispatch]);
  useEffect(() => {
   
  }, [loading,dispatch])
  
  return (
   <>
    {
      loading ? <h1>Loadiing ...</h1> : 
      <div className="min-w-screen min-h-screen bg-emerald-700">
      <Nav />
      <div className="min-w-screen flex items-center justify-center pt-[2vw]">
        <input
          type="text"
          onChange={(e) => searchHandler(e)}
          className="rounded-full w-[40vw] h-[3.5vw] pl-[2vw] outline-none"
          placeholder="Search"
        />
      </div>
     
        <div className="pl-[3vw] pt-[3vw]">
        {searchData && searchData.length > 0 ? (
          searchData.length > 0 ? (
            <Card product={searchData} like={like} user={Login} />
          ) : (
            <h4 className="text-2xl text-stone-400 font-[500] mx-auto">
              No products available!
            </h4>
          )
        ) : product && product.length > 0 ? (
          <Card product={product} like={like} user={Login} />
        ) : (
          <h4 className="text-2xl text-stone-400 font-[500] mx-auto">
            No products available!
          </h4>
        )}
      </div>
     
    
    </div>
    }
   </>
  );
};

export default Product;
