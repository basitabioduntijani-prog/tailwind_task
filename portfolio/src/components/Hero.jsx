import React from "react";
import { motion } from "framer-motion";
import passport from "../assets/passport.jpg";
import heroBg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 px-6"
      >
        <p className="text-lg opacity-90">Hello — I’m</p>

        <h1 className="text-4xl md:text-6xl font-extrabold mt-2 leading-tight">
          TIJANI BASIT ABIODUN <br />{" "}
          <span className="text-blue-300">AI_DEVELOPER</span>
        </h1>

        <p className="mt-6 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          I build fast, accessible, and delightful web experiences. Currently
          open to new opportunities.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-medium"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition"
          >
            Contact Me
          </a>
        </div>

        {/* Passport Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <img
            src={passport}
            alt="Me"
            className="w-40 h-40 md:w-56 md:h-56 rounded-2xl object-cover shadow-xl border-4 border-white/30"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
