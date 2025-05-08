import { FaLock, FaUser } from "react-icons/fa";
import { HiOutlineEyeOff } from "react-icons/hi";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('../public/WallPaper.png')] bg-cover bg-center">
      <div className="w-[520px] h-[650px] p-6 px-12 bg-[#081D48] rounded-lg shadow-lg backdrop-blur-md bg-opacity-25 border-t-2 border-b-4 border-[#14A189] flex flex-col gap-4">
        {/* Logo */}
        <p className="text-[#14A189] flex flex-col items-center font-extrabold text-xl mt-[-14px]">
          FunkoShop
        </p>
        {/* Título */}
        <h1 className="text-3xl items-start font-bold">
          <span className="text-white">Sign</span>
          <span className="text-[#14A189]"> up</span>
        </h1>
        {/* Enlace de registro */}
        <div className="text-start mb-4">
          <p className="text-white text-md">Already have an account?</p>
          <a
            href="#"
            className="text-[#14A189] hover:underline text-md font-bold"
          >
            Login Here!
          </a>
        </div>
        {/* Formulario */}
        <form className="w-full flex flex-col gap-6">
          <div className="relative">
            <label htmlFor="username" className="block text-white font-nunito text-sm mb-1">
              Email
            </label>
            <FaUser className="absolute left-3 top-11 transform -translate-y-1/2 text-white" />
            <input
              type="text"
              id="username"
              placeholder="Enter your Email"
              className="w-full pl-10 px-2 py-2 font-nunito text-md pr-3 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-[#14A189] transition duration-300"
            />
          </div>
          <div className="relative">
            <label htmlFor="username" className="block text-white font-nunito text-sm mb-1">
              Username
            </label>
            <FaUser className="absolute left-3 top-11 transform -translate-y-1/2 text-white" />
            <input
              type="text"
              id="username"
              placeholder="Enter your Username"
              className="w-full pl-10 px-2 py-2 font-nunito text-md pr-3 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-[#14A189] transition duration-300"
            />
          </div>
          <div className="relative">
            <label htmlFor="username" className="block text-white font-nunito text-sm mb-1">
            Password
            </label>
            <FaLock className="absolute left-3 top-11 transform -translate-y-1/2 text-white" />
            <input
              type="text"
              id="username"
              placeholder="Enter your Password"
              className="w-full pl-10 px-2 py-2 font-nunito text-md pr-3 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-[#14A189] transition duration-300"
            />
            <HiOutlineEyeOff className="absolute right-3 top-11 transform -translate-y-1/2 text-white" />
          </div>
          <div className="relative mt-4">
            <label htmlFor="password" className="block text-white font-nunito text-sm mb-1">
             Confirm Password
            </label>
            <FaLock className="absolute left-3 top-11 transform -translate-y-1/2 text-white" />
            <input
              type="password"
              id="password"
              placeholder="Enter your Password"
              className="w-full px-2 py-2 font-nunito text-md pl-10 pr-3 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-[#14A189] transition duration-300"
            />
            <HiOutlineEyeOff className="absolute right-3 top-11 transform -translate-y-1/2 text-white" />
          </div>
          {/* Botón de inicio de sesión */}
          <button className="w-full py-2 text-xl bg-[#14A189] text-white font-semibold rounded-full hover:bg-[#11866F] transition duration-300">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
