import { useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Elegant Summer Dress",
      price: 1850,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400",
    },
    {
      id: 9,
      name: "Classic Men's T-Shirt",
      price: 850,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    },
  ]);

  const increaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <div className="mb-10">
          <p className="text-purple-600 font-semibold tracking-widest">
            TAHMINA FASHION
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mt-3">
            Shopping Cart
          </h1>

          <p className="text-gray-500 mt-3">
            Review your selected products before checkout.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Your Cart is Empty
            </h2>

            <p className="text-gray-500 mt-3">
              You haven't added any products to your cart yet.
            </p>

            <Link
              to="/shop"
              className="inline-block bg-purple-600 text-white px-7 py-3 rounded-lg mt-6 hover:bg-purple-700"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Cart Products */}
            <div className="lg:col-span-2 space-y-5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-sm p-5 flex flex-col sm:flex-row gap-5"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full sm:w-36 h-40 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-gray-900">
                      {item.name}
                    </h2>

                    <p className="text-purple-600 font-bold mt-2">
                      ৳{item.price}
                    </p>

                    <div className="flex items-center gap-4 mt-5">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-9 h-9 border rounded-lg hover:bg-gray-100"
                      >
                        -
                      </button>

                      <span className="font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="w-9 h-9 border rounded-lg hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 text-sm font-medium mt-4 hover:underline"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="font-bold text-gray-900">
                    ৳{item.price * item.quantity}
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between text-gray-600 mb-4">
                <span>Subtotal</span>
                <span>৳{totalPrice}</span>
              </div>

              <div className="flex justify-between text-gray-600 mb-4">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>

              <div className="border-t border-gray-200 pt-5 mt-5">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-purple-700">
                    ৳{totalPrice}
                  </span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="block text-center bg-purple-600 text-white py-4 rounded-lg mt-7 font-semibold hover:bg-purple-700 transition"
              >
                Proceed to Checkout
              </Link>

              <Link
                to="/shop"
                className="block text-center text-gray-600 mt-5 hover:text-purple-600"
              >
                Continue Shopping
              </Link>
            </div>

          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;