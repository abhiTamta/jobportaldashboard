import React from "react";
import { RouterProvider } from "react-router-dom";
import pageRouter from "./routers";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={pageRouter} />
    </Provider>
  );
};

export default App;
