import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";

function Home() {
  const categories = [
    {
      name: "Women",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
      path: "/women",
    },
    {
      name: "Men",
      image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600",
      path: "/men",
    },
    {
      name: "Kids",
      image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600",
      path: "/kids",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Elegant Women's Dress",
      price: 1850,
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600",
      category: "Women",
    },
    {
      id: 2,
      name: "Classic Men's Shirt",
      price: 1250,
      image: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?w=600",
      category: "Men",
    },
    {
      id: 3,
      name: "Casual Fashion Outfit",
      price: 1650,
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
      category: "Women",
    },
    {
      id: 4,
      name: "Premium Fashion Wear",
      price: 2200,
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600",
      category: "Fashion",
    },
  ];

  return (
    <main className="bg-[#090711] text-white">

      {/* Hero Section */}
      <section className="min-h-[600px] flex items-center bg-gradient-to-r from-black via-[#171023] to-black px-6 py-20">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-purple-400 tracking-[5px] font-semibold mb-5">
              NEW COLLECTION 2026
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Discover Your
              <span className="text-purple-500 block">Unique Style</span>
            </h1>

            <p className="text-gray-300 mt-6 text-lg leading-8 max-w-lg">
              Explore the latest fashion trends and discover
              clothing that reflects your personality.
              Upgrade your wardrobe with Tahmina Fashion.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">
              <Link to="/shop" className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg font-semibold transition">
                Shop Now →
              </Link>

              <Link to="/women" className="border border-purple-500 hover:bg-purple-600 px-8 py-4 rounded-lg font-semibold transition">
                Explore Collection
              </Link>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000"
              alt="Fashion Collection"
              className="w-full h-[450px] object-cover rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          ["🚚", "Free Shipping", "On selected orders"],
          ["💎", "Premium Quality", "Quality you can trust"],
          ["🔒", "Secure Payment", "Safe shopping experience"],
          ["💜", "Customer Support", "We are here to help"],
        ].map((item) => (
          <div key={item[1]} className="text-center p-5 bg-[#171323] rounded-xl">
            <div className="text-3xl mb-3">{item[0]}</div>
            <h3 className="font-bold">{item[1]}</h3>
            <p className="text-gray-400 text-sm mt-2">{item[2]}</p>
          </div>
        ))}
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-purple-400 tracking-widest font-semibold">
            SHOP BY CATEGORY
          </p>
          <h2 className="text-4xl font-bold mt-3">Explore Categories</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              to={category.path}
              key={category.name}
              className="relative group overflow-hidden rounded-2xl"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-[380px] object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 flex items-end p-8">
                <div>
                  <h3 className="text-3xl font-bold">{category.name}</h3>
                  <p className="text-purple-300 mt-2">
                    Explore Collection →
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-purple-400 tracking-widest font-semibold">
            OUR COLLECTION
          </p>
          <h2 className="text-4xl font-bold mt-3">Trending Products</h2>
          <p className="text-gray-400 mt-3">
            Discover our latest fashion collection.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Special Offer */}
      <section className="mx-6 md:mx-auto max-w-7xl my-16 bg-gradient-to-r from-purple-900 to-[#21132e] rounded-2xl p-10 md:p-16 text-center">
        <p className="text-purple-200 tracking-widest font-semibold">
          SPECIAL COLLECTION
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-5">
          Fashion That Defines You
        </h2>

        <p className="text-gray-200 mt-5">
          Find your favorite styles and refresh your wardrobe.
        </p>

        <Link to="/shop" className="inline-block bg-white text-purple-900 font-bold px-9 py-4 rounded-lg mt-8 hover:bg-gray-200 transition">
          Shop Collection
        </Link>
      </section>

      {/* Newsletter */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Join Our Fashion Community
        </h2>

        <p className="text-gray-400 mt-4">
          Stay updated with our latest collections and offers.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-5 py-4 rounded-lg bg-[#171323] border border-gray-700 outline-none focus:border-purple-500 text-white"
          />

          <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg font-semibold transition">
            Subscribe
          </button>
        </div>
      </section>

    </main>
  );
}

export default Home;