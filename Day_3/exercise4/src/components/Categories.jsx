const categories = [
  { name: "Electronics", img: "/src/assets/images/category1.jpg" },
  { name: "Clothing", img: "/src/assets/images/category2.jpg" },
  { name: "Home", img: "/src/assets/images/category3.jpg" },
  { name: "Books", img: "/src/assets/images/category4.jpg" },
];

export default function Categories() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {categories.map((cat, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
            <img src={cat.img} alt={cat.name} className="w-full h-32 object-cover"/>
            <p className="text-center py-2 font-medium">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
