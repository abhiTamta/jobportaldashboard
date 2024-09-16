import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

const pageRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path :"/dashboard",
    // element : <Dashboard />
    element : (<ProtectedRoute element={<Dashboard />} />)
  }
]);

export default pageRouter;
