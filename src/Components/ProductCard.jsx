import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition duration-300">

      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {product.category}
        </span>
      </div>

      {/* Product Information */}
      <div className="p-5">

        <h3 className="text-lg font-bold text-gray-800 mb-2">
          {product.name}
        </h3>

        <p className="text-purple-700 font-bold text-xl mb-4">
          ৳{product.price}
        </p>

        <Link
          to={`/product/${product.id}`}
          className="block text-center bg-black text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
        >
          View Details
        </Link>

      </div>
    </div>
  );
}

export default ProductCard;