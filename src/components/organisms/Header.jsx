import React from "react";
import Logo from "../atoms/Logo";
import DisplayProfile from "../molecules/DisplayProfile";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center py-[15.5px] px-10">
      <Logo />
      <DisplayProfile />
    </div>
  );
};

export default Header;
