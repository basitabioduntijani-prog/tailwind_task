const naijaShades = [
  { name: "Green 50", hex: "#f0fdf4", class: "bg-green-50" },
  { name: "Green 100", hex: "#dcfce7", class: "bg-green-100" },
  { name: "Green 200", hex: "#bbf7d0", class: "bg-green-200" },
  { name: "Green 300", hex: "#86efac", class: "bg-green-300" },
  { name: "Green 400", hex: "#4ade80", class: "bg-green-400" },
  { name: "Green 500", hex: "#22c55e", class: "bg-green-500" },
  { name: "Green 600", hex: "#16a34a", class: "bg-green-600" },
  { name: "Green 700", hex: "#15803d", class: "bg-green-700" },
  { name: "Green 800", hex: "#166534", class: "bg-green-800" },
  { name: "Green 900", hex: "#14532d", class: "bg-green-900" },
  { name: "Green 950", hex: "#052e16", class: "bg-green-950" },
];

export default function ColorPalette() {
  return (
    <div className="p-6">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Nigerian Color Palette Showcase
      </h2>

      {/* Nigerian Flag Colors */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Nigerian Flag Colors</h3>
        <div className="grid grid-cols-3 gap-6 max-w-lg">
          
          {/* Green */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-lg bg-[#008753] shadow-md"></div>
            <p className="mt-2 text-sm font-medium text-gray-800">Green</p>
            <p className="text-xs text-gray-500">#008753</p>
          </div>

          {/* White */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-lg bg-white border shadow-md"></div>
            <p className="mt-2 text-sm font-medium text-gray-800">White</p>
            <p className="text-xs text-gray-500">#FFFFFF</p>
          </div>

          {/* Green */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-lg bg-[#008753] shadow-md"></div>
            <p className="mt-2 text-sm font-medium text-gray-800">Green</p>
            <p className="text-xs text-gray-500">#008753</p>
          </div>

        </div>
      </div>

      {/* Naija Green Shades */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Naija Green Shades (50–950)</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {naijaShades.map((shade) => (
            <div key={shade.name} className="flex flex-col items-center">
              <div className={`w-20 h-20 rounded-lg shadow-md ${shade.class}`}></div>
              <p className="mt-2 text-sm font-medium text-gray-800">{shade.name}</p>
              <p className="text-xs text-gray-500">{shade.hex}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
