import React from "react";
import { Menu } from "lucide-react";
import logo from "../assets/logo.png"; // ✅ Import must be here at the top

export default function Navbar() {
  return (
    <header className="bg-blue-700 text-white py-6 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">

        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 object-cover rounded-lg shadow-md"
          />

          <div>
            <div className="font-semibold text-white">Tijani Basit A.</div>
            <div className="text-xs text-blue-100">AI Developer,Fullstack Dev, Project Manager</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-blue-200 transition">About</a>
          <a href="#skills" className="hover:text-blue-200 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-200 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-200 transition">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-lg bg-white/20 backdrop-blur-md hover:bg-white/30 transition">
          <Menu size={30} />
        </button>
      </div>
    </header>
  );
}
