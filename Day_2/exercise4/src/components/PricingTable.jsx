export default function PricingTable() {
  const plans = [
    {
      title: "Basic",
      price: "₦5,000/month",
      features: ["Feature A", "Feature B", "Feature C"],
      popular: false,
    },
    {
      title: "Pro",
      price: "₦15,000/month",
      features: ["Feature A", "Feature B", "Feature C", "Feature D"],
      popular: true, // Highlighted
    },
    {
      title: "Enterprise",
      price: "₦50,000/month",
      features: ["Feature A", "Feature B", "Feature C", "Feature D", "Feature E"],
      popular: false,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
        Pricing Plans
      </h2>

      <div className="flex flex-col md:flex-row md:justify-center md:gap-6 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className={`flex-1 rounded-xl shadow-lg p-6 flex flex-col items-center text-center
              ${plan.popular ? "bg-green-700 text-white scale-105 md:translate-y-0.5" : "bg-white text-green-700"}
            `}
          >
            {plan.popular && (
              <span className="bg-yellow-400 text-green-700 px-3 py-1 rounded-full uppercase text-xs mb-4">
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
            <p className="text-3xl font-bold mb-4">{plan.price}</p>
            <ul className="mb-6 space-y-2 text-left">
              {plan.features.map((feature, index) => (
                <li key={index} className="before:content-['✔'] before:text-green-500 before:mr-2">
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`px-6 py-2 rounded font-semibold transition-colors
                ${plan.popular ? "bg-white text-green-700 hover:bg-green-100" : "bg-green-700 text-white hover:bg-green-800"}
              `}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
