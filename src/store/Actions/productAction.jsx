

export {  productsLoad } from "../Reducers/productSlice.jsx";

import { useState } from "react";
import {   profile , userwishlist, addCart, search , removeItemCart, addMoreQunatity,cart , productsLoad, singleProduct,Productlike,Login, resgistedin,loggedout, LogedUser ,productCreate, ProductLikeRequest, ProductlikeError, productsError, productsRequest } from "../Reducers/productSlice.jsx";
import axios from "../../util/axios.jsx";



export const getProduct = ()=>async(dispatch, getState)=>{
  dispatch(productsRequest())
    try {
      const {data} = await axios.get("/products")

  dispatch(productsLoad(data))
    
    } catch (error) {
     dispatch(productsError(error))
    }

  }
  export const getSingleProduct = (id)=>async(dispatch, getState)=>{
    try {
      const {data} = await axios.get(`/detail/${id}`)
   dispatch( singleProduct(data))
    
    } catch (error) {
      console.log(error);
    }

  }
  export const likeProduct = (id)=>async(dispatch, getState)=>{
    dispatch(ProductLikeRequest())
        try {
         
          const {data} = await axios.get(`/like/${id}`)
       dispatch( Productlike(data))
    
        } catch (error) {
         dispatch(ProductlikeError(error))
        }
    
      }
  export const asynclogin = (user)=>async(dispatch, getState)=>{
    try {
      const {data} = await axios.post("/login",user)
   
   dispatch( LogedUser(data))
    
    } catch (error) {
      console.log("hello");
      console.log(error);
    }

  }
  export const LoginUser = ()=>async(dispatch, getState)=>{
    try {
      const {data} = await axios.get("/LoginUser")

   dispatch(Login(data))
    
    } catch (error) {
      console.log(error);
    }

  }
  
  export const registered = (registeruser)=>async(dispatch, getState)=>{
    try {
      const {data} = await axios.post("/register",registeruser)
     
   dispatch(resgistedin(data))
    
    } catch (error) {
      console.log(error);
    }

  }
  export const Logout = ()=>async(dispatch, getState)=>{
    try {
      const {data} = await axios.get("/logout")
     
   dispatch(loggedout(data))
    
    } catch (error) {
      console.log(error);
    }

  }
  export const createProduct = (product)=>async(dispatch, getState)=>{
    try {
      const {data} = await axios.post("/pro",product)
     
   dispatch(productCreate(data))
    
    } catch (error) {
      console.log(error);
    }

  }
  export const wishlistuser = ()=>async(dispatch, getState)=>{
    try {
      const {data} = await axios.get("/wishlist")
     dispatch(userwishlist(data))
  
  
    } catch (error) {
      console.log(error);
    }

  }

  export const addForCart = (id)=>async(dispatch, getState)=>{
    try {
      const {data} = await axios.get(`/cart/add/${id}`)
     dispatch  (addCart(data))
  
  
    } catch (error) {
      console.log(error);
    }

  }

  
  
  export const removeCart = (id)=>async(dispatch, getState)=>{
    try {
      const {data} = await axios.get(`/cart/remove/${id}`)
     dispatch  (removeItemCart(data))
  
  
    } catch (error) {
      console.log(error);
    }

  }
  export const addmoreCart = (id)=>async(dispatch, getState)=>{
    try {
      const {data} = await axios.get(`/cart/addMore/${id}`)
     dispatch  ( addMoreQunatity(data))
  
  
    } catch (error) {
      console.log(error);
    }

  }
  export const cartPage = ()=>async(dispatch, getState)=>{
    try {
      const {data} = await axios.get("/cart")
     dispatch  (cart(data))
  
  
    } catch (error) {
      console.log(error);
    }

  }
  export const Aboutpage = ()=>async(dispatch, getState)=>{
    try {
      const {data} = await axios.get("/profile")

     dispatch(profile(data))
  
  
    } catch (error) {
      console.log(error);
    }

  }
  export const searchPage = (searcher)=>async(dispatch, getState)=>{
    try {
      const {data} = await axios.get(`/search/${searcher}`);

     dispatch(search(data))
  
  
    } catch (error) {
      console.log(error);
    }

  }