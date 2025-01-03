import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-gray-800 text-gray-400 text-center">
      <p className="text-sm">
        Created by <span className="font-semibold text-gray-300">Peter Morales</span> 2025.
        Powered by <span className="font-semibold text-blue-400">React</span> + <span className="font-semibold text-teal-400">TMDB</span>.
      </p>
    </footer>
  );
};

export default Footer;