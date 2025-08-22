import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import useAuth hook

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth(); // Get the login function from AuthContext

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for displaying error messages

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setError("No user found. Please register first.");
      // Redirect to register after a short delay to show the message
      setTimeout(() => navigate("/register"), 1500);
      return;
    }

    if (email === storedUser.email && password === storedUser.password) {
      // Call the login function from AuthContext to update global state
      login(storedUser);
      navigate("/user-dashboard"); // Redirect to dashboard after successful login
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600 text-sm">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Register here
          </button>
        </p>
      </div>
    </div>
  );
}
