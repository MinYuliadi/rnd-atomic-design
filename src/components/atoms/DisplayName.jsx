import React from "react";

const DisplayName = ({ name }) => {
  return (
    <span className="capitalize text-sm font-medium text-dark-primary">
      {name}
    </span>
  );
};

export default DisplayName;
