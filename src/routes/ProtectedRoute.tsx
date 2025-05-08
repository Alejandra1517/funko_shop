import { Navigate } from "react-router-dom";

interface Props {
  isAuthenticated: boolean;
  userRole: "admin" | "customer" | null;
}


const ProtectedRoute: React.FC<Props>  = ({ isAuthenticated, userRole }) => {

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Redirigir según el rol
  if (userRole === "admin") {
    return <Navigate to="/admin/dashboard" replace />;
  } else {
    return <Navigate to="/store/home" replace />;
  }
};

export default ProtectedRoute;
