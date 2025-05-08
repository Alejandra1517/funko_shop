// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { useAuthStore } from '../store/authStore';
// import Login from '../pages/auth/Login';
// import Register from '../pages/auth/Register';
// import AdminDashboard from '../pages/admin/AdminDashboard';
// import { ReactNode } from 'react';

// interface PrivateRouteProps {
//   children: ReactNode;
//   isAdmin?: boolean;
// }

// const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {

//   console.log('welcome to PrivateRoute')

//   const isLoggedIn = useAuthStore((state) => state.isAuthenticated);
//   const user = useAuthStore((state) => state.userRole);

//   if (!isLoggedIn) {
//     return <Navigate to="/login" />;
//   }

//   if (user === "admin") {
//     console.log(
//       'welcome admin'
//     )
//     // return <Navigate to="/dashboard" />;
//   }

//   return children;
// };

// const AppRoutes = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Rutas públicas */}
//         {/* <Route path="/admin" element={<AdminDashboard />} /> */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Rutas privadas (cliente) */}
//         {/* <Route
//           path="/dashboard"
//           element={
//             <PrivateRoute>
//               <AdminDashboard />
//             </PrivateRoute>
//           }
//         /> */}
//         {/* <Route
//           path="/profile"
//           element={
//             <PrivateRoute>
//               <Profile />
//             </PrivateRoute>
//           }
//         /> */}

//         {/* Rutas privadas (admin) */}
//         <Route
//           path="/admin"
//           element={
//             <PrivateRoute isAdmin={true}>
//               <AdminDashboard />
//             </PrivateRoute>
//           }
//         />
//         {/* <Route
//           path="/admin/users"
//           element={
//             <PrivateRoute isAdmin={true}>
//               <Users />
//             </PrivateRoute>
//           }
//         /> */}
//       </Routes>
//     </Router>
//   );
// };

// export default AppRoutes;








import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "../pages/auth/Login";
import AdminDashboard from '../pages/admin/AdminDashboard';
import PrivateRoute from '../Components/Common/PrivateRoute';
import Register from '../pages/auth/Register';
import { useAuthStore } from '../store/authStore';
import CustomerDashboard from '../pages/store/CustomerDashboard';

// Componentes
// import AdminDashboard from '../components/Admin/AdminDashboard';
// import StoreHome from '../components/Store/StoreHome';
// import PrivateRoute from '../components/Common/PrivateRoute';


function AppRouter() {
  // Estado de autenticación (simulado)
  // const isAuthenticated = true;
  const { isAuthenticated } = useAuthStore()

  return (
<BrowserRouter>
  <Routes>
    {/* <Route path="/" element={<StoreHome />} /> */}
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Register />} />

      {/* Rutas privadas de customer */}
      <Route
      path="/customer/*"
      element={<PrivateRoute authenticated={isAuthenticated} element={<CustomerDashboard />} />}
    />
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