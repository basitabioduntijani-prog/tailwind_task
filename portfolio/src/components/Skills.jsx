import React from "react";
import { motion } from "framer-motion";

// Icons
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiPytorch,
  SiTensorflow,
  SiNumpy,
  SiPandas,
  SiFastapi,
  SiFlask,
  SiPostgresql,
  SiMongodb,
  SiGooglecloud,
  SiVercel,
  SiOpencv,
} from "react-icons/si";

import { FaDatabase } from "react-icons/fa";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "TailwindCSS", icon: SiTailwindcss },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Flask", icon: SiFlask },
    ],
  },
  {
    category: "Machine Learning",
    items: [
      { name: "Python", icon: SiPython },
      { name: "PyTorch", icon: SiPytorch },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "NumPy", icon: SiNumpy },
      { name: "Pandas", icon: SiPandas },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "SQL", icon: FaDatabase },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "Vercel", icon: SiVercel },
      { name: "Git & GitHub", icon: SiGit },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 bg-black text-white bg-[url('/images/skills.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-center">
          Skills & Technologies
        </h2>

        <div className="mt-12 space-y-16">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-2xl font-semibold mb-6">{group.category}</h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {group.items.map(({ name, icon: Icon }) => (
                  <motion.div
                    key={name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex flex-col items-center p-6 bg-white/10 rounded-xl 
                            border border-white/20 shadow-lg hover:bg-white/20 
                            transition cursor-pointer"
                  >
                    <Icon className="text-4xl mb-3" />
                    <p className="text-lg font-medium text-center">{name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
