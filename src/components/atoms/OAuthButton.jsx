import React from "react";

const OAuthButton = ({ onClick, label, icon }) => {
  return (
    <button
      type="button"
      className="flex flex-row justify-center items-center gap-2 w-full py-4 border-[1.5px] rounded-2xl"
      onClick={onClick}
    >
      <img src={icon} alt={icon} className="w-6 h-6" />
      <span className=" font-bold text-base text-dark-secondary">{label}</span>
    </button>
  );
};

export default OAuthButton;
