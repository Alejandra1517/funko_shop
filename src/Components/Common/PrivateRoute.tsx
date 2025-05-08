import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";

// type UserRole = "admin" | "customer" | null;

interface PrivateRouteProps {
  element: ReactElement;
  authenticated: boolean;
  // userRole: UserRole;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  element,
  authenticated,
  // userRole,
}) => {

  console.log("PrivateRoute", authenticated);
  // const requiredRole: string = "admin"; // Simulación del rol del usuario

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  // if (requiredRole && requiredRole !== userRole) {
  //   console.log("morning")
  //   // Si se requiere un rol y el usuario no lo tiene, redirigir a una página de acceso denegado
  //   return <Navigate to="/access-denied" />;
  // }

  return element;
};

export default PrivateRoute;
