import React from "react";
import DisplayName from "../atoms/displayName";
import DisplayRole from "../atoms/DisplayRole";
import DisplayPicture from "../atoms/DisplayPicture";
import getTokenData from "../../utils/getTokenData";

const DisplayProfile = () => {
  const { picture, name, displayName } = getTokenData();
  return (
    <div className="flex flex-row justify-end items-center gap-3">
      <div className="flex flex-col gap-[5px] items-end">
        <DisplayName name={!!name && name || displayName || "-"} />
        <DisplayRole role={"Admin"} />
      </div>
      <DisplayPicture icon={(!!picture && picture) || null} />
    </div>
  );
};

export default DisplayProfile;
