import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authLoginReducer"


const store = configureStore({
  reducer: {
    auth : authReducer
  },
});


export default store