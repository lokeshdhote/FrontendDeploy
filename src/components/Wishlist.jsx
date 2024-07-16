import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./Card";
import { wishlistuser } from "../store/Actions/productAction";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { like, user } = useSelector((state) => state.productReducer);
 
  // Fetch wishlist data when the component mounts
  useEffect(() => {
    dispatch(wishlistuser());
  }, [dispatch]);

  return (
    <div className="w-[100vw] min-h-screen bg-emerald-700 overflow-hidden">
      <div className="w-screen py-[2vw] pl-[4vw] flex items-center gap-[40vw]">
        <Link to="/" className="text-white text-2xl">
          <i className="ri-arrow-left-line"></i>
        </Link>
        <h2 className="text-2xl text-stone-200 font-[400]">Wishlist</h2>
      </div>
      <div className="w-screen h-fit overflow-hidden py-[2vw] flex flex-wrap">
      
      <Card product={like?.wishlist} like={user} />
      {/* { like?.wishlist > 0 ? ( 
        ) : (
          <h4 className="text-2xl text-stone-400 font-[500] mx-auto">
            No products available!
          </h4>
        )} */}
      </div>
    </div>
  );
};

export default Wishlist;
