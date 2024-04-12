import React from "react";

const Alert = ({ message }) => {
  return (
    <div className="p-2 w-[90vw] border border-red-600 rounded-lg bottom-6 self-center bg-[#f571716a] fixed z-20">
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default Alert;
