import { FaEye, FaLock, FaUser } from "react-icons/fa";
import { useAuthStore } from "../../store/authStore";
import { useState } from "react";
// import AppRoutes from "../../routes/AppRouter";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  const [role, _setRole] = useState('admin'); 

  const handleSubmit = (e: { preventDefault: () => void; }) => {
  try {
    localStorage.setItem('user', JSON.stringify({ role }));

    e.preventDefault();
    // Lógica de autenticación (ejemplo)
    // const userData = { isAuthenticated: true, username === 'admin' };
    console.log("Login successful:", username, password);
    login('admin');
    // AppRoutes();
    // <Link to="/">Inicio</Link> | <Link to="/about">Acerca de</Link>
    // navigate('/admin');
    

    if (role === 'admin') {
      navigate('/admin');
    } else if (role === 'customer') {
      navigate('/customer');
    } else {
      console.log('Rol desconocido');
    }
  } catch (err) {
    console.log('Credenciales inválidas', err);
    // setError('Credenciales inválidas');
  }

    // <Link to="/">Inicio</Link> | <Link to="/about">Acerca de</Link>

  };


  // const handleSubmit = () => {
  //   navigate('/admin');
  // };


  return (
    // <form onSubmit={handleSubmit}>
    <div className="flex items-center justify-center min-h-screen bg-[url('../public/WallPaper.png')] bg-cover bg-center">
      <div className="w-[520px] h-[650px] p-6 px-12 bg-[#081D48] rounded-lg shadow-lg backdrop-blur-md bg-opacity-25 border-t-2 border-b-4 border-[#14A189] flex flex-col gap-4">
        {/* Logo */}
        <p className="text-[#14A189] flex flex-col items-center font-extrabold text-xl mt-[-14px]">
          FunkoShop
        </p>
        {/* Título */}
        <h1 className="text-3xl items-start font-bold">
          <span className="text-white">Log</span>
          <span className="text-[#14A189]"> in</span>
        </h1>
        {/* Enlace de registro */}
        <div className="text-start mb-7">
          <p className="text-white text-md">Don't have an account?</p>
          <a
            href="#"
            className="text-[#14A189] hover:underline text-md font-bold"
          >
            Register Here!
          </a>
        </div>
        {/* Formulario */}
        <form className="w-full flex flex-col gap-5">
          <div className="relative">
            <label htmlFor="username" className="block text-white font-nunito text-sm mb-1">
              Username
            </label>
            <FaUser className="absolute left-3 top-11 transform -translate-y-1/2 text-white" />
            <input
              type="text"
              id="username"
              placeholder="e.g., johndoe99"
              className="w-full font-nunito pl-10 pr-3 py-2 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-[#14A189] transition duration-300"
              value={username} onChange={(e) => setUsername(e.target.value)} 
            />
          </div>
          <div className="relative mt-4">
            <label htmlFor="password" className="block text-white font-nunito text-sm mb-1">
              Password
            </label>
            <FaLock className="absolute left-3 top-11 transform -translate-y-1/2 text-white" />
            <input
              type="password"
              id="password"
              placeholder="e.g., StrongP@ssw0rd"
              className="w-full font-nunito pl-10 pr-3 py-2 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-[#14A189] transition duration-300"
              value={password} onChange={(e) => setPassword(e.target.value)} 
            />
            <FaEye className="absolute right-3 top-11 transform -translate-y-1/2 text-white" />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-white mt-4 mb-4">
              <input type="checkbox" className="mr-2 accent-[#14A189]" />
              Remember me
            </label>
            <a href="#" className="text-white hover:underline">
              Forgot password?
            </a>
          </div>
          {/* Botón de inicio de sesión */}
          <button onClick={handleSubmit} className="w-full text-lg py-2 bg-[#14A189] text-white font-semibold rounded-full hover:bg-[#11866F] transition duration-300">
            Sign In
          </button>
        </form>
        {/* Divider */}
        <div className="w-full flex flex-col items-center mt-1">
          <div className="flex-grow border-t border-white"></div>
          <span className="text-white text-md mb-2">Or continue with</span>
          <div className="flex-grow border-t border-white"></div>
        </div>
        {/* Iconos de redes sociales */}
        <div className="flex justify-center gap-10">
          <a href="#" className="hover:opacity-80 transition">
            <img
              src="../public/devicon_google.png"
              alt="Google"
              className="w-8 h-8"
            />
          </a>
          <a href="#" className="hover:opacity-80 transition">
            <img src="../public/apple.png" alt="apple" className="w-8 h-8" />
          </a>
          <a href="#" className="hover:opacity-80 transition">
            <img
              src="../public/vector.png"
              alt="Facebook"
              className="w-8 h-8"
            />
          </a>
        </div>
      </div>
    </div>
    // </form>
  );
};

export default Login;

