import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/Slices/authSlice"

const store = configureStore({
  reducer: {
    authReducer,
  },
});

export default store;