import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProtectedTeacherRoute = ({ children }) => {
    const { teacher, loading } = useAuth();

    if (loading) {
        return (
            <div className="h-screen flex justify-center items-center">
                Loading...
            </div>
        );
    }

    if (!teacher) {
        return <Navigate to="/teacher/login" replace />;
    }

    return children;
};

export default ProtectedTeacherRoute;