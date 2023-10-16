import { createBrowserRouter } from "react-router-dom";
import Login from "./Views/Login";
import Dashboard from "./Views/Dashboard";
import Survey from "./Views/Survey";
import SignUp from "./Views/SignUp";
import GuestLayouts from "./components/GuestLayouts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },

    {
        path: "/survey",
        element: <Survey />,
    },
    {
        path:"/guest",
        element:<GuestLayouts />,
        children:[
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
        ]
    }
]);

export default router;
