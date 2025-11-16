export default function Hero() {
  return (
    <section className="bg-blue-100 p-8 md:flex md:items-center md:justify-between rounded-b-3xl">
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-4">Discover Amazing Products</h2>
        <p className="text-gray-700 mb-6">Shop from a wide range of products at unbeatable prices.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Shop Now</button>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img src="/src/assets/images/hero.jpg" alt="Hero" className="rounded-xl shadow-lg"/>
      </div>
    </section>
  );
}
