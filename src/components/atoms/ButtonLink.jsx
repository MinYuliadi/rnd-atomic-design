import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({ to, label, color, ...rest }) => {
  return (
    <Link
      to={to}
      className={`${color ? color : "text-primary"} text-xs`}
      {...rest}
    >
      {label}
    </Link>
  );
};

export default ButtonLink;
