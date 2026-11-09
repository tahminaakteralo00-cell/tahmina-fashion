import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Men", path: "/men" },
    { name: "Women", path: "/women" },
    { name: "Kids", path: "/kids" },
  ];

  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <Link to="/" className="text-2xl font-bold tracking-wider">
          TAHMINA <span className="text-purple-500">FASHION</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-medium transition duration-300 hover:text-purple-400 ${
                  isActive ? "text-purple-400" : "text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <Link to="/login" className="hover:text-purple-400">
            Login
          </Link>

          <Link
            to="/cart"
            className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition"
          >
            Cart
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;