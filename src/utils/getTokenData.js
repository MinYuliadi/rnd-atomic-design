import state from "../config/state";
import { Buffer } from "buffer";

const getTokenData = () => {
  const token = sessionStorage.getItem(state.TOKEN);
  if (token) {
    return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
  }
  return {};
};

export default getTokenData;
