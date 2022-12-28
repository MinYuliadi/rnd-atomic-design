import React from "react";

const SubTitle = ({ label, color }) => {
  return (
    <span
      className={` font-light text-[13px] ${
        color ? color : "text-dark-primary"
      } `}
    >
      {label}
    </span>
  );
};

export default SubTitle;
