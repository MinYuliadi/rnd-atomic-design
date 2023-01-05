import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const DisplayPicture = ({ icon }) => {
  return (
    <>
      {icon ? (
        <img
          src={icon}
          alt="display-picture"
          className="w-[55px] h-[55px] rounded-full"
        />
      ) : (
        <FaRegUserCircle className="w-[55px] h-[55px] text-gray-medium" />
      )}
    </>
  );
};

export default DisplayPicture;
