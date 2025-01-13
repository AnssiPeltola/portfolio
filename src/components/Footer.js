import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ksuPurple text-white p-4 text-center rounded-lg mx-auto w-1/2">
      <p>&copy; {currentYear} Anssi Peltola. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
