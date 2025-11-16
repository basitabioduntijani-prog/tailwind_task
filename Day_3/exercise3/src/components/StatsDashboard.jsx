import { TrendingUp, ShoppingCart, Users, Wallet } from "lucide-react";

export default function StatsDashboard() {
  const stats = [
    {
      title: "Total Sales",
      value: "₦2.5M",
      change: "+12%",
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      bg: "bg-green-600",
    },
    {
      title: "Orders",
      value: "1,234",
      change: "+8%",
      icon: <ShoppingCart className="w-8 h-8 text-white" />,
      bg: "bg-blue-600",
    },
    {
      title: "Customers",
      value: "567",
      change: "+23%",
      icon: <Users className="w-8 h-8 text-white" />,
      bg: "bg-purple-600",
    },
    {
      title: "Revenue",
      value: "₦4.2M",
      change: "+15%",
      icon: <Wallet className="w-8 h-8 text-white" />,
      bg: "bg-orange-600",
    },
  ];

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
        >
          <div
            className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${item.bg}`}
          >
            {item.icon}
          </div>

          <h2 className="text-gray-600 text-lg font-medium">{item.title}</h2>

          <p className="text-3xl font-bold mt-1">{item.value}</p>

          <p className="text-green-600 font-semibold mt-2 flex items-center gap-1">
            {item.change} ↑
          </p>
        </div>
      ))}
    </div>
  );
}
