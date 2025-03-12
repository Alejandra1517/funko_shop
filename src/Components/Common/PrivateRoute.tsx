import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  element: ReactElement;
  authenticated: boolean;
  requiredRole?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  element,
  authenticated,
  requiredRole,
}) => {
  const userRole: string = "admin"; // Simulación del rol del usuario

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && userRole !== requiredRole) {
    // Si se requiere un rol y el usuario no lo tiene, redirigir a una página de acceso denegado
    return <Navigate to="/access-denied" />;
  }

  return element;
};

export default PrivateRoute;
