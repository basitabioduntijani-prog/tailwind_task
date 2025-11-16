const products = [
  { name: "Laptop", price: "₦250,000", img: "/src/assets/images/product1.jpg" },
  { name: "Sneakers", price: "₦45,000", img: "/src/assets/images/product2.jpg" },
  { name: "Watch", price: "₦35,000", img: "/src/assets/images/product3.jpg" },
  { name: "Headphones", price: "₦25,000", img: "/src/assets/images/product4.jpg" },
  { name: "Jacket", price: "₦50,000", img: "/src/assets/images/product5.jpg" },
  { name: "Backpack", price: "₦30,000", img: "/src/assets/images/product6.jpg" },
];

export default function ProductsGrid() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products.map((product, i) => (
          <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <img src={product.img} alt={product.name} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="font-medium">{product.name}</h3>
              <p className="font-bold mt-2">{product.price}</p>
              <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
