// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Simulación de login (cambiar por lógica real con API)
//     if (email === "admin@test.com" && password === "123456") {
//       navigate("/admin/dashboard"); // Redirigir al Admin
//     } else {
//       navigate("/store"); // Redirigir a la tienda
//     }
//   };


  
//   return (
//     <form onSubmit={handleLogin} className="space-y-4">
//       <h2 className="text-2xl font-semibold text-center">Iniciar sesión</h2>
//       <input
//         type="email"
//         placeholder="Correo electrónico"
//         className="w-full p-2 border rounded"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Contraseña"
//         className="w-full p-2 border rounded"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
//         Ingresar
//       </button>
//     </form>
//   );
// };

// export default Login;


const Login = () => {
    return (
       <div className="h-screen bg-orange-500 p-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-white">¡Hola Tailwind CSS!</h1>
        <p className="mt-4 text-white underline">
          Tailwind CSS es increíblemente poderoso. ¡No puedo esperar para seguir explorándolo!
        </p>
      </div>
    );
  }
  
// function Login() {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//         <h1 className="text-4xl font-bold text-blue-500">Hola, Tailwind!</h1>
//         <p className="text-gray-700">¡Tailwind está funcionando correctamente! 🎉</p>
//         <p className="text-gray-700">¡Tailwind está funcionando correctamente! 🎉</p>
//       </div>
//     );
//   }
  
  export default Login;
  