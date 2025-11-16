export default function ProductCard() {
  return (
    <div className="max-w-sm mx-auto">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden group transition-all duration-300">

        {/* Image */}
        <div className="overflow-hidden">
          <img
            src="/src/assets/images/product.jpg"
            alt="Product"
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          
          {/* Name */}
          <h2 className="text-xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-green-600">
            Fresh Jollof Rice
          </h2>

          {/* Price */}
          <p className="text-lg font-bold text-gray-700">₦3,500</p>

          {/* Button */}
          <button
            className="
              w-full py-3 rounded-lg text-white font-medium 
              bg-green-600 hover:bg-green-700 active:scale-95
              transition-all duration-300
            "
          >
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
}
