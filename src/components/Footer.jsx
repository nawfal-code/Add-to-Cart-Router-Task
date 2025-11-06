import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center border-t border-gray-700">
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="font-semibold text-orange-700">ShopWeb</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
