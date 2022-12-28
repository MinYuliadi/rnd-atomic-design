import React from "react";

const Button = ({ type, onClick, label, color, bgColor, ...rest }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${color ? color : " text-white "} ${
        bgColor ? bgColor : " bg-primary "
      } py-2 px-[10px] min-w-[118px] text-center rounded-[4px]`}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
