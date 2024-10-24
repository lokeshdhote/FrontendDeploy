import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  loading:false
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productsRequest: (state, action) => {
      state.loading = true
      //    state.product.push(action.payload)
    },
    productsLoad: (state, action) => {
      state.product = action.payload,
      state.loading = false
      //    state.product.push(action.payload)
    },
    productsError: (state, action) => {
      state.loading = false
      //    state.product.push(action.payload)
    },
    singleProduct: (state, action) => {
      state.data = action.payload;
    },
    ProductLikeRequest: (state, action) => {
      state.loading = true
    },
    Productlike: (state, action) => {
      state.like = action.payload.user,
      state.loading = false,
      state.message = action.payload.message
    },
    ProductlikeError: (state, action) => {
      state.loading = false,
      state.error = "Error in adding product"
    },
    userwishlist: (state, action) => {
      state.user = action.payload;
    },
   addCart:(state, action) => {
    state.cartdata = action.payload;
  },
  removeItemCart:(state, action) => {
    state.cartdata = action.payload;
  },
  addMoreQunatity:(state, action) => {
    state.cartdata = action.payload;
  },
  cart:(state, action) => {
    state.cartdata = action.payload;
  },
  profile:(state,action) =>{
  state.profileData =action.payload

  },

    LogedUserRequest: (state, action) => {
      (state.message = null), (state.error = null),
      state.loading = true
    },
    LogedUser: (state, action) => {
      state.LogedUser = action.payload
    },
    LogedUserError: (state, action) => {
      state.error = "Error while logging";
      state.loading = false
    },
    Login: (state, action) => {
      state.Login = action.payload,
      state.message = "Login Successfully",
      state.loading = false
    },
    resgistedin: (state, action) => {
      state.RegisterUser = action.payload;
    },
    loggedout: (state, action) => {
      state.logout = action.payload;
    },
    productCreate: (state, action) => {
      state.craetedProduct = action.payload;
    },
    clearMsg: (state, action) => {
      state.message = null;
    },
    clearErr: (state, action) => {
      state.error = null;
    },
    search:(state,action) =>{
      state.searchData =action.payload
    
      },
      searchClear:(state,action) =>{
        state.searchData = []
      
        },
  },
});

export default productSlice.reducer;
export const {
  productsLoad,
  productsRequest,
  productsError,
  profile,
  productsLike,
  productsCart,
  singleProduct,
  Productlike,
  Login,
  LogedUser,
  resgistedin,
  loggedout,
  productCreate,
  clearErr,clearMsg,LogedUserError,LogedUserRequest,
  userwishlist,
  cart,
  search,
  removeItemCart,
  addMoreQunatity,
  addCart,
  searchClear,
  ProductLikeRequest,
  ProductlikeError
} = productSlice.actions;
