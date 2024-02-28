import React from "react";

type SpinnerProps = {
  size: number;
};

const Spinner: React.FC<SpinnerProps> = ({ size }) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div
        style={{ width: `${size}px`, height: `${size}px` }}
        className="animate-spin"
      >
        <div
          className="h-full w-full border-4 border-t-purple-500
       border-b-purple-700 rounded-[50%]"
        ></div>
      </div>
    </div>
  );
};

export default Spinner;
