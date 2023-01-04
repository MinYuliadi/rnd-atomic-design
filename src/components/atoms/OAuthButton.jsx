import React from "react";
import oauth from "../../config/oauth";
import { useGoogleLogin } from "react-google-login";
import GoogleIcon from "../../assets/google.svg";
import state from "../../config/state";
import { useNavigate } from "react-router-dom";
import pages from "../../config/pages";

const { CLIENT_ID } = oauth;

const OAuthButton = () => {
  const navigate = useNavigate();
  function onSuccess(res) {
    // console.log("login success", res);
    sessionStorage.setItem(state.TOKEN, res.tokenId);
    navigate(pages.dashboard);
  }

  function onFailure(res) {
    console.log("login fail", res);
  }

  const { signIn } = useGoogleLogin({
    clientId: CLIENT_ID,
    onSuccess,
    onFailure,
  });

  return (
    <button
      type="button"
      className="flex flex-row justify-center items-center gap-2 w-full py-4 border-[1.5px] rounded-2xl"
      onClick={signIn}
    >
      <img src={GoogleIcon} alt={"google"} className="w-6 h-6" />
      <span className=" font-bold text-base text-dark-secondary">
        Continue with Google
      </span>
    </button>
  );
};

export default OAuthButton;
