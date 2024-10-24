import { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addmoreCart, asyncPayment, cartPage, removeCart } from "../store/Actions/productAction";
import useRazorpay from "react-razorpay";
import { customAlphabet } from 'nanoid'

const Cart = () => {
  const nanoid = customAlphabet('1234567890abcdef', 10)
  


  const [paymetId , setPaymentId]= useState()


  const [Razorpay, isLoaded] = useRazorpay();
  const dispatch = useDispatch();
  const { cartdata } = useSelector((state) => state.productReducer);

  console.log(cartdata?.SUM);

  const handlePayment = useCallback(() => {
    if (!isLoaded) {
      console.log("Razorpay SDK not loaded yet.");
      return;
    }
    const generateProductDescriptions = (cartItems) => {
      if (!cartItems || cartItems.length === 0) return "No items in the cart";
      return cartItems.map((item) => item.pro.title).join(", ");
    };
    const options = {
      //  key: 'rzp_test_KLBKFXwqmfpOaS'
      key: "rzp_test_RoBEua2OuGEqXL", // Enter the Key ID generated from the Dashboard
      amount: cartdata?.SUM*100, // Assuming SUM is already in paise
      currency: "INR",
      description: generateProductDescriptions(cartdata?.cart),
      image: "https://s3.amazonaws.com/rzp-mobile/images/rzp.jpg",
      prefill: {
        email: "shopWave.kumar@example.com",
        contact: "+919900000000", // Ensure contact is a string with the country code
      },
      config: {
        display: {
          blocks: {
            banks: {
              name: 'Most Used Methods',
              instruments: [
                { method: 'upi' },
              ],
            },
            other: {
              name: "Other Payment modes",
              instruments: [
                { method: "card", issuers: ["ICIC"] },
                { method: "netbanking" },
              ],
            },
          },
          sequence: ["block.banks", "block.other"],
          preferences: {
            show_default_blocks: false, // Should Checkout show its default blocks?
          },
        },
      },
      handler: (response) => {
        alert(`Payment ID: ${response.razorpay_payment_id}`);
    const paymentId=`${response.razorpay_payment_id}`;
const orderId= nanoid(10)
console.log(orderId);


        dispatch(asyncPayment({paymentId,orderId}))
        // You can add additional handling for successful payment here
      },
      modal: {
        ondismiss: () => {
          if (window.confirm("Are you sure, you want to close the form?")) {
            console.log("Checkout form closed by the user");
          } else {
            console.log("Complete the Payment");
          }
        },
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay, isLoaded, cartdata?.SUM]);

  const removeItem = (id) => {
    dispatch(removeCart(id));
  };

  const addMore = (id) => {
    dispatch(addmoreCart(id));
  };

  useEffect(() => {
    dispatch(cartPage());
  }, [dispatch, cartdata?.SUM]);

  // useEffect(()=>{
  //   if(paymetId){
  //     dispatch(asyncPayment({paymetId}))
  //     setPaymentId()
  //   }
  
 
  //    },[paymetId,dispatch])
      
  return (
    <div className="w-full min-h-screen bg-emerald-700">
      {/* Header Section */}
      <div className="w-full py-4 px-4 flex items-center justify-between">
        <Link to="/" className="text-white text-2xl">
          <i className="ri-arrow-left-line"></i>
        </Link>
        <h2 className="text-2xl text-stone-200 font-[400]">Cart</h2>
        <div></div> {/* Empty div to fill space */}
      </div>

      {/* Cart Items Section */}
      <div className="w-full h-fit overflow-hidden p-4">
        <div className="w-full flex items-center justify-between">
          <h1 className="flex-1 text-center">Product</h1>
          <h1 className="flex-1 text-center">Quantity</h1>
          <h1 className="flex-1 text-center">Amount</h1>
        </div>
        <hr className="my-2" />

        <div className="cartContainer w-full h-[32vw] pt-2 pb-2 overflow-x-hidden overflow-y-auto px-[2vw]">
          {cartdata?.cart && cartdata.cart.length > 0 ? (
            cartdata.cart.map((item, index) => (
              <div key={index}  className="cartBoxes flex items-center justify-between py-4">
                <div className="flex items-center gap-2 flex-1">
                  <img className="w-24 h-24 object-contain"  loading="lazy" src={item.pro.img} alt={item.pro.title} />
                  <h1>{item.pro.title}</h1>
                </div>
                <div className="flex items-center gap-2 flex-1 justify-center">
                  <button onClick={() => removeItem(item.pro._id)} className="text-2xl">-</button>
                  <h2 className="text-2xl">{item.quantity}</h2>
                  <button onClick={() => addMore(item.pro._id)} className="text-2xl">+</button>
                </div>
                <h1 className="flex-1 text-center">₹{item.pro.price}</h1>
              </div>
            ))
          ) : (
            <h4 className="text-2xl">No products available!</h4>
          )}
        </div>

        {/* Total Amount and Buy Now Section */}
        <div className="w-[98.9vw] absolute bottom-2">
          <div className="flex items-center justify-between px-[8vw]">
            <h1>Total Amount</h1>
            <h1>₹{cartdata?.SUM }</h1> {/* Assuming SUM is in paise */}
          </div>
          <div className="w-full flex items-center justify-center pt-4">
            <button onClick={handlePayment} className="active:scale-[0.94] bg-white text-emerald-700 py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
