// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { registered } from '../store/Actions/productAction';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router';

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
const dispatch = useDispatch()

    const[username,setusername] = useState("")
    const[category,setcategory] = useState("")
    const[adress,setadress] = useState("")
    const[email,setemail] = useState("")
    const [phoneNumber , setphoneNumber] = useState("")
    const[password,setpassword] = useState("")
   
  const [showPassword, setShowPassword] = useState(false);

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     dispatch(registered({username,email,category,adress,password,phoneNumber}))
     navigate(from, { replace: true });

        
      toast.success('Registration successful');
      
    } catch (error) {
      toast.success('Registration failed', error);
    }
  };

  return (
    <form className="flex flex-col gap-5 items-center justify-center" onSubmit={handleSubmit}>
      <input
        autoComplete="on"
        className="w-60 h-8 rounded pl-5 border-gray-300 outline-none"
        type="text"
        placeholder="Username"
        name="username"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />
      <input
        autoComplete="on"
        className="w-60 h-8 rounded pl-5 border-gray-300 outline-none"
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
           <input
        autoComplete="on"
        className="w-60 h-8 rounded pl-5 border-gray-300 outline-none"
        type="Phonenumber"
        placeholder="Phonenumber"
        name="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setphoneNumber(e.target.value)}
      />
      <input
        autoComplete="on"
        className="w-60 h-8 rounded pl-5 border-gray-300 outline-none"
        type="text"
        placeholder="category (Buyer/ Seller)"
        name="category "
        value={category}
        onChange={(e) => setcategory(e.target.value)}
      />
      <textarea name="adress" value={adress} className="w-60 h-16 pt-1 rounded px-4 border-gray-300 outline-none"  onChange={(e) => setadress(e.target.value)}  placeholder='address'>
      
      </textarea>
      <div className="bg-white flex items-center pl-2 pr-4 rounded w-60 h-8 border border-gray-300">
        <input
          autoComplete="on"
          name="password"
          className="pl-4 rounded outline-none w-full h-full"
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <i
          className={`cursor-pointer ml-2 ${showPassword ? 'ri-eye-off-line' : 'ri-eye-line'}`}
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>
      <input className="mt-2 w-40 h-8 rounded-full bg-zinc-600 text-white text-center active:scale-95" type="submit" value="Submit" />
    </form>
  );
};

export default Register;
