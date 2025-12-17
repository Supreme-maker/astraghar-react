import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-center py-4 bg-black/90 mt-8 shadow-[0_0_10px_rgba(255,0,0,0.5)]">
      <p className="text-white">
        &copy; 2025 AstraGhar. All rights reserved. |{' '}
        <Link to="/about" className="text-red-600 hover:text-white transition-colors">
          About Us
        </Link>
      </p>
    </footer>
  );
};

export default Footer;

