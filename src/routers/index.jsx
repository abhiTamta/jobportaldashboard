import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../components/layouts/DashboardLayout";

const pageRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />
      }
    ],
  },
]);

export default pageRouter;
