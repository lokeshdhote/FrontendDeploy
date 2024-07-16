// src/components/Login.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { asynclogin } from "../store/Actions/productAction";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { clearErr, clearMsg } from "../store/Reducers/productSlice";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const { message, error, loading } = useSelector(
    (state) => state.productReducer
  );
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(asynclogin({ email, password }));
  };
  useEffect(() => {
    if (message) {
      toast.success(message);
      navigate(from, { replace: true });
      dispatch(clearMsg());
    }
    if (error) {
      toast.error(error);
      dispatch(clearErr());
    }
  }, [error, message, loading,dispatch]);

  return (
    <>
      {loading ? (
        <h1>Loading.......</h1>
      ) : (
        <form
          className="flex flex-col gap-5 items-center justify-center"
          onSubmit={handleSubmit}
        >
          <input
            autoComplete="on"
            className="w-60 h-8 rounded pl-5 border-gray-300 outline-none"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <div className="bg-white flex items-center pl-2 pr-4 rounded w-60 h-8 border border-gray-300">
            <input
              autoComplete="on"
              name="password"
              className="pl-4 rounded outline-none w-full h-full"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <i
              className={`cursor-pointer ml-2 ${
                showPassword ? "ri-eye-off-line" : "ri-eye-line"
              }`}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <input
            className="mt-2 w-40 h-8 rounded-full bg-zinc-600 text-white text-center active:scale-95"
            type="submit"
            value="Submit"
          />
        </form>
      )}
    </>
  );
};

export default Login;
