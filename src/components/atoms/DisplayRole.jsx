import React from "react";

const DisplayRole = ({ role }) => {
  return (
    <div className="flex justify-center items-center bg-gray-soft text-primary font-medium text-[13px] py-[5px] px-[10px]">
      {role}
    </div>
  );
};

export default DisplayRole;
