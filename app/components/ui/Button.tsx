import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = "submit" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-[#1C5FAF] cursor-pointer text-white px-6 py-2 rounded-md shadow hover:bg-[#174a8c] transition-colors w-full sm:w-auto"
    >
      {label}
    </button>
  );
};

export default Button;
