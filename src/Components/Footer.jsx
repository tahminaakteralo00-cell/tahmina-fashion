import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              TAHMINA <span className="text-purple-500">FASHION</span>
            </h2>

            <p className="text-gray-400 leading-7">
              Discover your style with our latest fashion collections.
              Quality, comfort and elegance in every outfit.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li><Link to="/" className="hover:text-purple-400">Home</Link></li>
              <li><Link to="/shop" className="hover:text-purple-400">Shop</Link></li>
              <li><Link to="/men" className="hover:text-purple-400">Men</Link></li>
              <li><Link to="/women" className="hover:text-purple-400">Women</Link></li>
              <li><Link to="/kids" className="hover:text-purple-400">Kids</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">
              Customer Service
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li><Link to="/account" className="hover:text-purple-400">My Account</Link></li>
              <li><Link to="/cart" className="hover:text-purple-400">Shopping Cart</Link></li>
              <li><Link to="/login" className="hover:text-purple-400">Login</Link></li>
              <li><Link to="/register" className="hover:text-purple-400">Register</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">
              Contact Us
            </h3>

            <p className="text-gray-300 mb-3">
              Email: support@tahminafashion.com
            </p>

            <p className="text-gray-300 mb-3">
              Location: Bangladesh
            </p>

            <p className="text-gray-300">
              Follow us for the latest fashion updates.
            </p>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} TAHMINA FASHION. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;