import React from "react";

const Title = ({ label, color }) => {
  return (
    <span
      className={` text-dark-primary font-semibold text-xl ${
        color ? color : "text-dark-primary"
      }`}
    >
      {label}
    </span>
  );
};

export default Title;
