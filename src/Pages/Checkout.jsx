import { useState } from "react";
import { Link } from "react-router-dom";

function Checkout() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    payment: "Cash on Delivery",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <div className="mb-10">
          <p className="text-purple-600 font-semibold tracking-widest">
            TAHMINA FASHION
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mt-3">
            Checkout
          </h1>

          <p className="text-gray-500 mt-3">
            Complete your information to place your order.
          </p>
        </div>

        {orderPlaced ? (
          <div className="bg-white rounded-2xl shadow-sm p-10 text-center">
            <div className="text-5xl mb-5">✓</div>

            <h2 className="text-3xl font-bold text-gray-900">
              Order Submitted!
            </h2>

            <p className="text-gray-500 mt-4">
              Thank you for choosing Tahmina Fashion.
              Your demo order has been submitted successfully.
            </p>

            <Link
              to="/shop"
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg mt-7 hover:bg-purple-700"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >

            {/* Customer Information */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-7">
                Billing Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

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

                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2">
                    Delivery Address
                  </label>

                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your full delivery address"
                    required
                    rows="4"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2">
                    City
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter your city"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
                  />
                </div>

              </div>

              {/* Payment Method */}
              <div className="mt-10">
                <h2 className="text-xl font-bold text-gray-900 mb-5">
                  Payment Method
                </h2>

                <div className="space-y-4">

                  <label className="flex items-center gap-3 border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-purple-500">
                    <input
                      type="radio"
                      name="payment"
                      value="Cash on Delivery"
                      checked={formData.payment === "Cash on Delivery"}
                      onChange={handleChange}
                    />

                    <span className="font-medium text-gray-700">
                      Cash on Delivery
                    </span>
                  </label>

                  <label className="flex items-center gap-3 border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-purple-500">
                    <input
                      type="radio"
                      name="payment"
                      value="Online Payment"
                      checked={formData.payment === "Online Payment"}
                      onChange={handleChange}
                    />

                    <span className="font-medium text-gray-700">
                      Online Payment (Demo)
                    </span>
                  </label>

                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-4 rounded-lg mt-9 font-semibold hover:bg-purple-700 transition"
              >
                Place Order
              </button>

            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between text-gray-600 mb-4">
                <span>Products</span>
                <span>Demo Items</span>
              </div>

              <div className="flex justify-between text-gray-600 mb-4">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>

              <div className="border-t border-gray-200 pt-5 mt-5">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-purple-700">
                    Demo
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-5 leading-6">
                This is a frontend demonstration. No real payment or order
                processing is connected yet.
              </p>

            </div>

          </form>
        )}
      </div>
    </section>
  );
}

export default Checkout;