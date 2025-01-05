import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiExpress, SiVite } from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6 text-center text-sm pb-[calc(1.5rem+theme(spacing.safe-bottom))]">
      <p className="px-4 text-xs sm:text-sm">
        Created by <span className="text-gray-200 font-semibold">Peter M</span>{" "}
        2025
      </p>
      <div className="flex gap-6 justify-center mt-6 text-lg">
        <a
          href="https://vitejs.dev/"
          target="_blank"
          rel="noopener noreferrer"
          title="Vite"
        >
          <SiVite className="text-purple-500 hover:scale-110 transition-transform duration-200" />
        </a>
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          title="React"
        >
          <FaReact className="text-blue-500 hover:scale-110 transition-transform duration-200" />
        </a>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
          title="TypeScript"
        >
          <SiTypescript className="text-blue-400 hover:scale-110 transition-transform duration-200" />
        </a>
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="Tailwind CSS"
        >
          <SiTailwindcss className="text-teal-400 hover:scale-110 transition-transform duration-200" />
        </a>
        <a
          href="https://nodejs.org/"
          target="_blank"
          rel="noopener noreferrer"
          title="Node.js"
        >
          <FaNodeJs className="text-green-500 hover:scale-110 transition-transform duration-200" />
        </a>
        <a
          href="https://expressjs.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="Express"
        >
          <SiExpress className="text-gray-400 hover:scale-110 transition-transform duration-200" />
        </a>
      </div>
      <p className="px-4 text-xs sm:text-sm mt-6">
        This project uses the{" "}
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          TMDB API
        </a>{" "}
        but is not endorsed or certified by TMDB
      </p>
    </footer>
  );
};

export default Footer;
