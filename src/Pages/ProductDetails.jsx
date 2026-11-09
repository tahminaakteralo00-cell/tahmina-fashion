
import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Elegant Women's Dress",
      category: "Women",
      price: 1850,
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800",
      description: "Beautiful and elegant dress for a stylish look.",
    },
    {
      id: 2,
      name: "Classic Men's Shirt",
      category: "Men",
      price: 1250,
      image: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?w=800",
      description: "Comfortable classic shirt for everyday fashion.",
    },
    {
      id: 3,
      name: "Casual Women's Outfit",
      category: "Women",
      price: 1650,
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
      description: "Modern casual outfit for everyday style.",
    },
    {
      id: 4,
      name: "Premium Fashion Wear",
      category: "Women",
      price: 2200,
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800",
      description: "Premium fashion wear with an elegant design.",
    },
    {
      id: 5,
      name: "Men's Casual Outfit",
      category: "Men",
      price: 1950,
      image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800",
      description: "Stylish casual outfit for men.",
    },
    {
      id: 6,
      name: "Kids Fashion Dress",
      category: "Kids",
      price: 1100,
      image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800",
      description: "Comfortable and beautiful kids fashion wear.",
    },
    {
      id: 7,
      name: "Women's Summer Dress",
      category: "Women",
      price: 1450,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800",
      description: "Light and stylish summer dress.",
    },
    {
      id: 8,
      name: "Men's Stylish Outfit",
      category: "Men",
      price: 1750,
      image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800",
      description: "A stylish outfit for a modern look.",
    },
  ];

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="min-h-screen bg-[#090711] text-white flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold">Product Not Found</h2>
        <Link to="/shop" className="mt-5 bg-purple-600 px-6 py-3 rounded-lg">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#090711] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[500px] object-cover rounded-2xl"
        />

        <div>
          <p className="text-purple-400 font-semibold">
            {product.category}
          </p>

          <h1 className="text-4xl font-bold mt-4">
            {product.name}
          </h1>

          <p className="text-purple-400 text-3xl font-bold mt-6">
            ৳ {product.price}
          </p>

          <p className="text-gray-300 leading-8 mt-6">
            {product.description}
          </p>

          <p className="text-green-400 mt-6">
            In Stock
          </p>

          <Link
            to="/cart"
            className="inline-block bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg mt-8 font-semibold transition"
          >
            Go to Cart
          </Link>

          <Link
            to="/shop"
            className="block text-purple-400 mt-5 hover:text-purple-300"
          >
            ← Continue Shopping
          </Link>
        </div>

      </div>
    </main>
  );
}

export default ProductDetails;
