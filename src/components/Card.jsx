import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { likeProduct } from "../store/Actions/productAction.jsx";
import { toast } from "react-toastify";
import { clearErr, clearMsg } from "../store/Reducers/productSlice.jsx";

const Card = ({ product, like, user }) => {
  const dispatch = useDispatch();
  // console.log(like?.wishlist);
  const { message, error, loading } = useSelector(
    (state) => state.productReducer
  );

  useEffect(() => {}, [like?.wishlist]);
  const handleLike = (id) => {
    dispatch(likeProduct(id));
  };
  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(clearMsg());
    }
    if (error) {
      toast.error(error);
      dispatch(clearErr());
    }
  }, [message, error, dispatch, loading]);

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="flex gap-[2vw] flex-wrap items-center px-[3vw]">
          {product && product.length > 0 ? (
            product.map((item) => (
              <div
                key={item._id} // Use _id as the key
                className="w-[20vw] h-[20vw] flex flex-col rounded bg-white shadow-lg"
              >
                <Link to={`/product/${item._id}`}>
                  <div className="w-[20vw] h-[17vw] flex flex-col justify-between">
                    <div className="w-full h-[12vw] flex items-center justify-center pb-[1vw]">
                      <img loading="lazy"
                        className="w-full h-[10vw] object-contain"
                        src={item.img || "default.jpg"} // Fallback image if img is missing
                        alt={item.title || "Product Image"} // Fallback alt text
                      />
                    </div>
                    <div>
                      <h2 className="text-[1vw] pl-[1vw]">
                        {item.title || "No title"}
                      </h2>
                    </div>
                  </div>
                </Link>
                <div className="w-full h-[3vw] flex items-center justify-around">
                  <h3 className="text-[1.5vw]">₹{item.price}</h3>
                  <h4>
                    {/* {like?.wishlist.indexOf(item._id) === -1 ? "true" :"false"} */}
                    {user?.wishlist?.indexOf(item._id) === -1 ? (
                      <i
                        onClick={() => handleLike(item._id)}
                        className="ri-heart-3-line text-2xl cursor-pointer"
                      ></i>
                    ) : (
                      <i
                        onClick={() => handleLike(item._id)}
                        className="ri-heart-3-fill text-red-500 text-2xl cursor-pointer"
                      ></i>
                    )}
                  </h4>
                </div>
              </div>
            ))
          ) : (
            <h4 className="text-2xl mx-auto">No products available!</h4>
          )}
        </div>
      )}
    </>
  );
};

export default Card;
