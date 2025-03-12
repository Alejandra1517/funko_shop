import { Routes, Link, Outlet } from 'react-router-dom';
// import AdminProducts from './AdminProducts';
// import AdminUsers from './AdminUsers';

function AdminDashboard() {
  return (
    <div>
      <h2>Panel de Administración</h2>
      <nav>
        <Link to="/admin/products">Productos</Link> | <Link to="/admin/users">Usuarios</Link>
      </nav>
      <Outlet />
      <Routes>
        {/* <Route path="/products" element={<AdminProducts />} /> */}
        {/* <Route path="/users" element={<AdminUsers />} /> */}
      </Routes>
    </div>
  );
}

export default AdminDashboard;