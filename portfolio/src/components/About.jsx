import React from "react";
import passport from "../assets/passport.jpg"; // your passport image

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/about.jpg')", // background image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 text-white grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>

          <p className="mt-4 text-gray-200 text-lg leading-relaxed">
            I’m a Full-Stack Developer and Machine Learning Engineer who enjoys 
            building clean, modern, and scalable digital experiences. I work 
            across the full product stack from crafting intuitive user 
            interfaces to designing efficient APIs and deploying intelligent 
            AI-powered systems.
            <br />
            <br />
            I love turning ideas into real, functional products and I’m constantly
            exploring new tools, frameworks, and technologies that push the limits
            of what’s possible on the web and with AI.
          </p>

          {/* INFO CARDS */}
          <div className="mt-10 grid grid-cols-1 gap-6">
            
            {/* Experience Card */}
            <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-md">
              <h3 className="font-semibold text-xl">Experience</h3>
              <p className="mt-2 text-sm text-gray-300">
                Hands-on experience building full-stack and AI-driven applications 
                using React, Node.js, FastAPI, Python, and deep learning frameworks.
              </p>
            </div>

            {/* What I Do Card */}
            <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-md">
              <h3 className="font-semibold text-xl">What I Do</h3>
              <p className="mt-2 text-sm text-gray-300">
                I build responsive UIs, scalable APIs, integrate AI/ML models, 
                automate workflows, and deploy production-ready cloud applications.
              </p>
            </div>

            {/* Current Focus Card */}
            <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-md">
              <h3 className="font-semibold text-xl">Current Focus</h3>
              <p className="mt-2 text-sm text-gray-300">
                Advancing my expertise in LLMs, deep learning, generative AI, 
                and building intelligent systems with OpenAI, HuggingFace, and LangChain.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src={passport}
            alt="My Passport"
            className="w-80 h-80 object-cover rounded-3xl shadow-2xl border-4 border-white/70"

          />
        </div>
      </div>
    </section>
  );
}
