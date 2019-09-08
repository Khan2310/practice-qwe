import axios from "axios";
import qs from "qs";

const isAuthenticated = () => {
  const authToken = sessionStorage.getItem("tokenData");
  if (!authToken) {
    //return false;
    return true;
  }
  return true;
};

const setAuthToken = authToken => {
  if (authToken) {
    axios.defaults.headers.common["authorization"] = authToken;
  } else {
    delete axios.defaults.headers.common["authorization"];
  }
  // console.log(axios.interceptors.response.handlers);
};

export { isAuthenticated, setAuthToken, initAuth };
