import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");
    setMessage("Demo registration successful!");

    setTimeout(() => {
      navigate("/login");
    }, 1200);
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 md:p-10">

        {/* Heading */}
        <div className="text-center mb-8">
          <p className="text-purple-600 font-bold tracking-widest">
            TAHMINA FASHION
          </p>

          <h1 className="text-3xl font-bold text-gray-900 mt-4">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Join us and discover your style.
          </p>
        </div>

        {/* Messages */}
        {error && (
          <p className="bg-red-100 text-red-600 p-3 rounded-lg mb-5 text-center">
            {error}
          </p>
        )}

        {message && (
          <p className="bg-green-100 text-green-700 p-3 rounded-lg mb-5 text-center">
            {message}
          </p>
        )}

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
            />
          </div>

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
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
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
              placeholder="Create a password"
              required
              minLength="6"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
              minLength="6"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Create Account
          </button>

        </form>

        <p className="text-center text-gray-600 mt-7">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-purple-600 font-semibold hover:underline"
          >
            Login
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

export default Register;