import { Routes, Link, Outlet } from 'react-router-dom';
// import StoreProducts from './StoreProducts';
// import StoreCategories from './StoreCategories';

function StoreHome() {
  return (
    <div>
      <h2>Tienda en Línea</h2>
      <nav>
        <Link to="/store/products">Productos</Link> | <Link to="/store/categories">Categorías</Link>
      </nav>
      <Outlet />
      <Routes>
        {/* <Route path="/products" element={<StoreProducts />} /> */}
        {/* <Route path="/categories" element={<StoreCategories />} /> */}
      </Routes>
    </div>
  );
}

export default StoreHome;