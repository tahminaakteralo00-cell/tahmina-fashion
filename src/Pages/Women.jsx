import { useState } from "react";
import { Link } from "react-router-dom";

function Women() {
  const [sort, setSort] = useState("default");

  const products = [
    {
      id: 1,
      name: "Elegant Summer Dress",
      category: "Dress",
      price: 1850,
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600",
    },
    {
      id: 2,
      name: "Women's Casual Top",
      category: "Top",
      price: 950,
      image:
        "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=600",
    },
    {
      id: 3,
      name: "Classic Women's Blazer",
      category: "Blazer",
      price: 2200,
      image:
        "https://images.unsplash.com/photo-1548624149-f3221a7f27c4?w=600",
    },
    {
      id: 4,
      name: "Stylish Denim Jeans",
      category: "Jeans",
      price: 1650,
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600",
    },
    {
      id: 5,
      name: "Floral Women's Dress",
      category: "Dress",
      price: 1950,
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600",
    },
    {
      id: 6,
      name: "Premium Casual Shirt",
      category: "Shirt",
      price: 1250,
      image:
        "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=600",
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
            Women's Collection
          </h1>

          <p className="text-gray-500 mt-3">
            Explore beautiful styles and the latest fashion trends.
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

        {/* Products */}
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

export default Women;