import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth:false,
  profile:null,
  isLoading:true
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authAction: (state, action) => {
      state.auth = action.payload.auth;
      state.profile = action.payload.profile
      state.isLoading = false
    }
  },
});

const { actions , reducer } = authSlice;
export const { authAction } = actions;

export default reducer;