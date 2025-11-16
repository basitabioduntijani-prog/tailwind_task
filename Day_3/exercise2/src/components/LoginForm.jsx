import { useState } from "react";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Logged in!");
    }, 2000);
  };

  return (
    <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">

      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Welcome Back
      </h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        
        {/* Email */}
        <div>
          <label className="block text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="
              w-full px-4 py-3 rounded-lg border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-green-600
              transition-all duration-300
            "
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            required
            placeholder="Enter password"
            className="
              w-full px-4 py-3 rounded-lg border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-green-600
              transition-all duration-300
            "
          />
        </div>

        {/* Remember me */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-gray-700">
            <input type="checkbox" className="w-4 h-4" />
            Remember me
          </label>

          <a href="#" className="text-green-600 text-sm hover:underline">
            Forgot password?
          </a>
        </div>

        {/* Submit */}
        <button
          disabled={loading}
          className="
            w-full py-3 rounded-lg text-white bg-green-600 
            hover:bg-green-700 active:scale-95
            transition-all duration-300
            flex items-center justify-center
          "
        >
          {loading ? (
            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Login"
          )}
        </button>

      </form>
    </div>
  );
}
