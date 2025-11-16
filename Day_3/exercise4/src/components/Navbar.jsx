export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl text-gray-800">Tijjbbas Ventures</h1>
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">Products</li>
        <li className="hover:text-blue-600 cursor-pointer">Categories</li>
        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
      </ul>
      <button className="md:hidden px-3 py-2 border rounded-md">Menu</button>
    </nav>
  );
}
