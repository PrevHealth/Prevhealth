import React  from 'react'

const Button = ({children}) => {
  return (
    <button className="bg-[#255869] font-[16px] text-white px-4 py-2 rounded-md">
      {children}
    </button>
  );
}

export default Button
