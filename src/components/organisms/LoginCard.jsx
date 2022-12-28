import React from "react";
import LoginForm from "../molecules/LoginForm";
import TitleWithSub from "../molecules/TitleWithSub";

const LoginCard = () => {
  return (
    <div className=" flex flex-col w-full max-w-[385px] pt-10 pl-5 pb-[18px] pr-[22px] bg-white rounded-lg">
      <div>
        <TitleWithSub title="Welcome" subTitle="Please login to your account" />
      </div>
      <div className=" mt-[30px]">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginCard;
