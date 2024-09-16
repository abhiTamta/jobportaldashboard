import { createSlice } from "@reduxjs/toolkit";
import userData from "../utils/userData.json"

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user : null,
    password : null
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.userName;
      state.password = action.payload.userPassword;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    logout: (state) => {
      state.user = null;
      state.password = null;
      localStorage.removeItem("user");
    },
    setUser: (state, action) => {
      state.user = action.payload.userName;
    },
  },
});

export const { login, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
