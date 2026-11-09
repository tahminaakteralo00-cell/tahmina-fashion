import { useState } from "react";
import { Link } from "react-router-dom";

function Men() {
  const [sort, setSort] = useState("default");

  const products = [
    {
      id: 9,
      name: "Classic Men's T-Shirt",
      category: "T-Shirt",
      price: 850,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
    },
    {
      id: 10,
      name: "Casual Denim Shirt",
      category: "Shirt",
      price: 1450,
      image:
        "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600",
    },
    {
      id: 11,
      name: "Men's Casual Jacket",
      category: "Jacket",
      price: 2500,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
    },
    {
      id: 12,
      name: "Slim Fit Jeans",
      category: "Jeans",
      price: 1850,
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600",
    },
    {
      id: 13,
      name: "Premium Polo Shirt",
      category: "T-Shirt",
      price: 1100,
      image:
        "https://images.unsplash.com/photo-1625910513413-5fc45e6c6c5a?w=600",
    },
    {
      id: 14,
      name: "Men's Formal Shirt",
      category: "Shirt",
      price: 1650,
      image:
        "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600",
    },
  ];

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    return 0;
  });

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <p className="text-purple-600 font-semibold tracking-widest">
            TAHMINA FASHION
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mt-3">
            Men's Collection
          </h1>

          <p className="text-gray-500 mt-3">
            Discover stylish and comfortable fashion for men.
          </p>
        </div>

        {/* Filter and Sort */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-gray-600">
            {products.length} Products
          </p>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
          >
            <option value="default">Default Sorting</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-5">
                <p className="text-sm text-purple-600 font-medium">
                  {product.category}
                </p>

                <h2 className="text-lg font-semibold text-gray-900 mt-2">
                  {product.name}
                </h2>

                <p className="text-xl font-bold text-gray-900 mt-3">
                  ৳{product.price}
                </p>

                <Link
                  to={`/product/${product.id}`}
                  className="block text-center bg-black text-white py-3 rounded-lg mt-5 hover:bg-purple-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Men;