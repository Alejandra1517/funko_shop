import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "../pages/auth/Login";
import AdminDashboard from '../pages/admin/AdminDashboard';
import PrivateRoute from '../Components/Common/PrivateRoute';

// Componentes
// import AdminDashboard from '../components/Admin/AdminDashboard';
// import StoreHome from '../components/Store/StoreHome';
// import PrivateRoute from '../components/Common/PrivateRoute';



function AppRouter() {
  // Estado de autenticación (simulado)
  const isAuthenticated = true;

  return (
<BrowserRouter>
  <Routes>
    {/* <Route path="/" element={<StoreHome />} /> */}
    <Route path="/" element={<Login />} />
    <Route
      path="/admin/*"
      element={<PrivateRoute authenticated={isAuthenticated} element={<AdminDashboard />} />}
    />
    {/* <Route path="/store/*" element={<StoreHome />} /> */}
  </Routes>
</BrowserRouter>
  );
}

export default AppRouter;
