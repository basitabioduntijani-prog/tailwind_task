const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-4">{product.price}</p>
      <button className="bg-green-500 text-white px-4 py-2 rounded-md">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
