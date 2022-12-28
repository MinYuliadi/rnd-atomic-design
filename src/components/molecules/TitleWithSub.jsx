import React from "react";
import Title from "../atoms/Title";
import SubTitle from "../atoms/SubTitle";

const TitleWithSub = ({ title, subTitle }) => {
  return (
    <div className=" flex flex-col gap-[5px]">
      <Title label={title} />
      <SubTitle label={subTitle} />
    </div>
  );
};

export default TitleWithSub;
