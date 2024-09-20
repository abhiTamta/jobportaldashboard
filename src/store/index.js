import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authLoginReducer";
import changeToggleReducer from "./changeToggleReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    changeToggle : changeToggleReducer
  },
});

export default store;
