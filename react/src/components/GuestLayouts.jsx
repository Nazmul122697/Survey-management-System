import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
const GuestLayouts = () => {
    const { currentUser, userToken } = useStateContext();
    if(userToken){
        return <Navigate to='/' />
    }
    return (
        <div>
            <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
                <Outlet />
            </div>
        </div>
    );
};

export default GuestLayouts;
