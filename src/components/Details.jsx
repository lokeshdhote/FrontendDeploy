import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {addForCart, getSingleProduct,likeProduct} from "../store/Actions/productAction";
import { useEffect } from "react";
import Wishlist from "./Wishlist";

const Details = () => {
  const { id } = useParams();
 const dispatch = useDispatch()
  const {like} = useSelector((state)=> state.productReducer)

  const { data } = useSelector((state) => state.productReducer);

  

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch]);

  const dataLike = (id) => {
    dispatch(likeProduct(id))
  };
  const dataCart = (id) => {
    dispatch(addForCart(id));
  };

  return (
    <div className="w-screen min-h-screen bg-emerald-700  text-">
      <div className="w-screen h-[4vw]  pl-[4vw]   pt-[2vw] flex items-center ">
        <Link to={"/"} className="   text-white text-2xl  ">
          {" "}
          <i className="ri-arrow-left-line"></i>
        </Link>
      </div>

      <div className=" w-screen h-[40vw] pt-[2vw] overflow-x-hidden">
        <div className=" w-screen  flex  ">
          <div className="w-[40%]   items-center flex flex-col gap-[5vw]  ">
            <div className="w-[22vw] h-[22vw]  ">
              <img
                className="w-full h-full object-contain"
                src={data?.img}
                alt={data?.title}
              />
            </div>

            <div className=" flex  gap-[1vw] ">
              <div className="text-white text-center  flex gap-[1vw] flex-col">
                <h2 className="text-xl text-stone-300 font-[400] ">
                  {data?.title}
                </h2>
                <h4 className="text-xl font-[600] ">₹ {data?.price}</h4>

                {data?.categoryGender == "Mens"||data?.categoryGender == "Womens" ||data?.categoryGender == "Kids" ? (
                  <>
                    <h3 className="text-xl text-zinc-3000">
                      {" "}
                      {data?.categoryGender} {data?.category}
                    </h3>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl text-zinc-3000">{data?.category}</h3>
                  </>
                )}
              </div>
              <div>
                {" "}
                {like?.wishlist.indexOf(data?._id) === -1  ? (
                  <>
                    {" "}
                    <i
                      onClick={() => dataLike(data?._id)}
                      className="ri-heart-3-fill text-red-500 text-2xl cursor-pointer"
                    >
                      {" "}
                    </i>
                  </>
                ) : (
                  <>
                    {" "}
                    <i
                      onClick={() => dataLike(data?._id)}
                      className="ri-heart-3-line text-2xl  cursor-pointer"
                    >
                      {" "}
                    </i>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="w-[60%] h-[30vw]  flex flex-col items-center  gap-[2vw]  ">
            <div className="flex  flex-col gap-[1vw]">
              <h3 className="text-stone-300 text-2xl font-bold">Description</h3>
              <p className="text-white w-[30vw] ">
                <li>{data?.description}</li>{" "}
              </p>
            </div>
            <div className="flex  flex-col gap-[1vw]">
              <h3 className="text-stone-300 text-2xl font-bold">
                Specification
              </h3>
              <p className="text-white w-[30vw] ">
                <li>{data?.specification}</li>{" "}
              </p>
            </div>

            <h6 className="text-stone-200 text-xl mt-[1vw] ">
              {" "}
              Rating : {data?.rating}{" "}
            </h6>

            <Link to={`/cart/${data?._id}`}>
              <div className="w-[10vw] h-[3vw] mt-[1vw] bg-red-200 rounded flex items-center justify-center  cursor-pointer active:scale-[0.98] ">
                <h4 onClick={() => dataCart(data?._id)} className="text-lg">
                  Add to cart
                </h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
