import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-2">Tijani Basit A.</h2>
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()}. Built with React + Tailwind.
          </p>
        </div>

        {/* Right Section: Social Links */}
        <div className="flex gap-6 text-xl">
          {/* GitHub */}
          <a
            href="https://github.com/basitabioduntijani-prog"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 ... (trimmed for brevity)" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/basitabiodun"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14 ... (trimmed)" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:basitabioduntijani@gmail.com"
            className="hover:text-red-500 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12.713l11.985-8.713h-23.97l11.985 8.713zm0 2.574l-12-8.713v13.426h24v-13.426l-12 8.713z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
