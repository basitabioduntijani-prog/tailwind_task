import ProductCard from "./components/ProductCard";

function App() {
  const products = [
    { id: 1, name: "Jollof Rice", price: "₦1,500", image: "/images/jollof.jpg" },
    { id: 2, name: "Ankara Fabric", price: "₦5,000", image: "/images/ankara.jpg" },
    { id: 3, name: "Suya", price: "₦1,000", image: "/images/suya.jpg" },
    { id: 4, name: "Aso-Ebi", price: "₦15,000", image: "/images/asoebi.jpg" },
    { id: 5, name: "Palm Wine", price: "₦1,200", image: "/images/palmwine.jpg" },
    { id: 6, name: "Agbada", price: "₦25,000", image: "/images/agbada.jpg" },
    { id: 7, name: "Chin Chin", price: "₦500", image: "/images/chinchin.jpg" },
    { id: 8, name: "Puff Puff", price: "₦300", image: "/images/puffpuff.jpg" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center"> Tijjbbas Product Grid</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
