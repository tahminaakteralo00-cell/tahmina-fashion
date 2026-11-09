import { useState } from "react";
import { Link } from "react-router-dom";

function Kids() {
  const [sort, setSort] = useState("default");

  const products = [
    {
      id: 15,
      name: "Kids Casual T-Shirt",
      category: "T-Shirt",
      price: 550,
      image:
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600",
    },
    {
      id: 16,
      name: "Cute Kids Summer Dress",
      category: "Dress",
      price: 950,
      image:
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600",
    },
    {
      id: 17,
      name: "Kids Denim Outfit",
      category: "Outfit",
      price: 1250,
      image:
        "https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=600",
    },
    {
      id: 18,
      name: "Kids Winter Jacket",
      category: "Jacket",
      price: 1450,
      image:
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600",
    },
    {
      id: 19,
      name: "Kids Stylish Shirt",
      category: "Shirt",
      price: 750,
      image:
        "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600",
    },
    {
      id: 20,
      name: "Kids Casual Set",
      category: "Set",
      price: 1100,
      image:
        "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600",
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

        {/* Page Heading */}
        <div className="mb-10">
          <p className="text-purple-600 font-semibold tracking-widest">
            TAHMINA FASHION
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mt-3">
            Kids Collection
          </h1>

          <p className="text-gray-500 mt-3">
            Explore comfortable and adorable fashion for kids.
          </p>
        </div>

        {/* Sorting */}
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

export default Kids;