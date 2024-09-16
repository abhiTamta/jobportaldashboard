import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/authLoginReducer";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      dispatch(setUser(storedUser));
    }
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthProvider;
