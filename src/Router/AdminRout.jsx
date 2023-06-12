import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import UseAdmin from "../Dashboard/Admin";


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = UseAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;