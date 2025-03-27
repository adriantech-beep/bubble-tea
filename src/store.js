import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";
import cartReducer from "./cart/cartSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
