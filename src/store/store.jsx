import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Reducers/productSlice.jsx";

export const store = configureStore({
    reducer:{
        productReducer:productSlice,
    }
})