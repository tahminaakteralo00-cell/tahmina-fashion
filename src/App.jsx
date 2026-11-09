import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProtectedRoute from "./Components/ProtectedRoute";

import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Kids from "./Pages/Kids";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import MyAccount from "./Pages/MyAccount";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AdminDashboard from "./Pages/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Pages */}
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <MyAccount />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;