import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("Demo login successful!");

    setTimeout(() => {
      navigate("/account");
    }, 1000);
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 md:p-10">

        <div className="text-center mb-8">
          <p className="text-purple-600 font-bold tracking-widest">
            TAHMINA FASHION
          </p>

          <h1 className="text-3xl font-bold text-gray-900 mt-4">
            Welcome Back!
          </h1>

          <p className="text-gray-500 mt-2">
            Login to your account
          </p>
        </div>

        {message && (
          <p className="bg-green-100 text-green-700 p-3 rounded-lg mb-5 text-center">
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              minLength="6"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" />
              Remember me
            </label>

            <button
              type="button"
              className="text-purple-600 hover:underline"
              onClick={() =>
                alert("Password recovery will be available later.")
              }
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Login
          </button>

        </form>

        <p className="text-center text-gray-600 mt-7">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-purple-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>

        <div className="text-center mt-5">
          <Link
            to="/"
            className="text-sm text-gray-500 hover:text-purple-600"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Login;