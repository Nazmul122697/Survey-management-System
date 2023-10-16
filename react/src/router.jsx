import { createBrowserRouter } from "react-router-dom";
import Login from "./Views/Login";
import Dashboard from "./Views/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
]);

export default router;
