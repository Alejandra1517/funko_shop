import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <Outlet />  {/* Renderiza Login o Signup según la ruta */}
        <p className="mt-4 text-center text-sm text-gray-500">
          ¿No tienes una cuenta?{" "}
          <Link to="/auth/signup" className="text-blue-500 hover:underline">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
