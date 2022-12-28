import CONSTANTS from "../helpers/constants";
import { useSearchParams } from "react-router-dom";
import { SHA256 } from "crypto-js";
import state from "../config/state";

const { FORM, SECRET_TOKEN } = CONSTANTS;

const isTokenValid = () => {
  let isValid = true;
  const [searchParams] = useSearchParams();

  const user = {
    [FORM.EMAIL.NAME]: searchParams.get(FORM.EMAIL.NAME),
    [FORM.PASSWORD.NAME]: searchParams.get(FORM.PASSWORD.NAME),
  };

  const encryptedUser = SHA256(JSON.stringify(user), SECRET_TOKEN).toString();
  const token = sessionStorage.getItem(state.TOKEN);

  if (encryptedUser !== token) {
    alert("token tidak valid");
    isValid = false;
  }

  return isValid;
};

export default isTokenValid;
