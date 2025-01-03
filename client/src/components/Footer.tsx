import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiExpress } from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6 text-center text-sm">
      <p className="px-4 text-xs sm:text-sm">
        Created by <span className="text-gray-200 font-semibold">Peter Morales</span> 2025.
      </p>
      <div className="flex gap-6 justify-center mt-4 text-lg">
        <FaReact title="React" className="text-blue-500 hover:scale-110 transition-transform duration-200" />
        <SiTypescript title="TypeScript" className="text-blue-400 hover:scale-110 transition-transform duration-200" />
        <SiTailwindcss title="Tailwind CSS" className="text-teal-400 hover:scale-110 transition-transform duration-200" />
        <FaNodeJs title="Node.js" className="text-green-500 hover:scale-110 transition-transform duration-200" />
        <SiExpress title="Express" className="text-gray-400 hover:scale-110 transition-transform duration-200" />
      </div>
      <p className="px-4 text-xs sm:text-sm mt-4">
        This product uses the TMDB API but is not endorsed or certified by TMDB.
      </p>
    </footer>
  );
};

export default Footer;