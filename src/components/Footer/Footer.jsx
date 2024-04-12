import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 bg-black text-white border-t-2 flex justify-center items-start flex-col gap-4 relative z-10">
      <Link to="/" className="flex flex-col w-full">
        <h2 className="text-2xl font-bold">Weather.Info</h2>
      </Link>
      <div className="w-full text-center font-semibold text-sm">
        <p>© Copyright by Weather.Info 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
