import React from "react";

interface InputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = true,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-[#1C5FAF] mb-1">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1C5FAF] focus:border-transparent"
      />
    </div>
  );
};

export default Input;
