import React from 'react';

const Button = ({text}) => {
  return (
    <div>
      <div className="p-4">
        <button className="w-48 bg-[#56BA28] text-white py-2 rounded-md">{text}</button>
      </div>
    </div>
  );
}

export default Button;
