
import { useState } from "react";
import ProductCard from "../Components/ProductCard";

function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const products = [
    {
      id: 1,
      name: "Elegant Women's Dress",
      category: "Women",
      price: 1850,
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600",
    },
    {
      id: 2,
      name: "Classic Men's Shirt",
      category: "Men",
      price: 1250,
      image: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?w=600",
    },
    {
      id: 3,
      name: "Casual Women's Outfit",
      category: "Women",
      price: 1650,
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
    },
    {
      id: 4,
      name: "Premium Fashion Wear",
      category: "Women",
      price: 2200,
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600",
    },
    {
      id: 5,
      name: "Men's Casual Outfit",
      category: "Men",
      price: 1950,
      image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600",
    },
    {
      id: 6,
      name: "Kids Fashion Dress",
      category: "Kids",
      price: 1100,
      image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600",
    },
    {
      id: 7,
      name: "Women's Summer Dress",
      category: "Women",
      price: 1450,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600",
    },
    {
      id: 8,
      name: "Men's Stylish Outfit",
      category: "Men",
      price: 1750,
      image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600",
    },
  ];

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return a.id - b.id;
    });

  return (
    <main className="min-h-screen bg-[#090711] text-white">

      {/* Page Banner */}
      <section className="bg-gradient-to-r from-black to-purple-950 py-20 px-6 text-center">
        <p className="text-purple-400 tracking-[5px] font-semibold">
          TAHMINA FASHION
        </p>

        <h1 className="text-5xl font-bold mt-4">
          Our <span className="text-purple-400">Collection</span>
        </h1>

        <p className="text-gray-300 mt-4">
          Discover fashion that matches your style.
        </p>
      </section>

      {/* Shop Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-10">
          <div>
            <h2 className="text-3xl font-bold">All Products</h2>
            <p className="text-gray-400 mt-2">
              Showing {filteredProducts.length} products
            </p>
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-[#171323] text-white border border-gray-700 rounded-lg px-5 py-3 outline-none focus:border-purple-500"
          >
            <option value="default">Default Sorting</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>

        {/* Search and Category */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search your favorite product..."
            className="w-full bg-[#171323] text-white border border-gray-700 rounded-lg px-5 py-4 outline-none focus:border-purple-500"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-[#171323] text-white border border-gray-700 rounded-lg px-5 py-4 outline-none focus:border-purple-500"
          >
            <option value="All">All Categories</option>
            <option value="Women">Women</option>
            <option value="Men">Men</option>
            <option value="Kids">Kids</option>
          </select>

        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold">
              No Products Found
            </h3>
            <p className="text-gray-400 mt-3">
              Try another search or category.
            </p>
          </div>
        )}

      </section>
    </main>
  );
}

export default Shop;
