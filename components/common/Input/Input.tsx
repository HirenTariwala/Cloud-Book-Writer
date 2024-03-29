import React from "react";

type InputProps = {
  name: string;
  type: string;
  value: string;
  placeholder: string;
  onChange(name: string, value: string): void;
  classname: string;
  error?: string;
};

const Input = ({
  type,
  onChange,
  name,
  placeholder,
  classname,
  error,
  value,
}: InputProps) => {
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        className={`w-[100%] text-black ${classname}`}
      />
      {error && error?.length > 0 && (
        <span className="text-red-600">{error}</span>
      )}
    </div>
  );
};

export default Input;
