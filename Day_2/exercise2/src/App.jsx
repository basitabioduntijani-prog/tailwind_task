import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold text-green-700">
          Welcome to Our Store!
        </h1>
        <p className="mt-2 text-gray-700">
          This is your responsive navbar demo with Nigerian green theme.
        </p>
      </main>
    </div>
  );
}

export default App;
