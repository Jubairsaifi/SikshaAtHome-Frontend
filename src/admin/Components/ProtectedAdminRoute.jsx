import { Navigate } from "react-router-dom";
import { useAdmin } from "../../context/AdminContext";

const ProtectedAdminRoute = ({ children }) => {

  const { admin, loading } = useAdmin();

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!admin) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedAdminRoute;