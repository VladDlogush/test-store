import axios from "axios";
import Notyf from "notyf-js";
import "notyf-js/dist/notyf.min.css";
import {
  loginRequest,
  loginSuccses,
  loginError,
  signupRequest,
  signupSuccses,
  signupError,
  refreshUserRequest,
  refreshUserSuccses,
  refreshUserError,
  logOutSuccess
} from "./sessionActions";
import * as sessionSelectors from "./sessionSelectors";

axios.defaults.baseURL = "http://localhost:4040";

const notyf = new Notyf();

const setAuthToken = token => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common["Authorization"] = null;
};

export const login = credentials => dispatch => {
  dispatch(loginRequest());

  axios
    .post("/auth/signin", credentials)
    .then(response => {
      notyf.confirm("You are successfully logged in!");
      setAuthToken(response.data.token);
      dispatch(loginSuccses(response.data));
    })
    .catch(error => {
      notyf.alert("Fill in all the fields or enter the correct data!");
      console.log(error);
      dispatch(loginError(error));
    });
};

export const signup = credentials => dispatch => {
  dispatch(signupRequest());

  axios
    .post("/auth/signup", credentials)
    .then(response => {
      notyf.confirm("You are successfully authorized!");
      setAuthToken(response.data.token);
      dispatch(signupSuccses(response.data));
    })
    .catch(error => {
      notyf.alert("Fill in all the fields or enter the correct data!");
      console.log(error);
      dispatch(signupError(error));
    });
};

export const refreshUser = () => (dispatch, getState) => {
  const token = sessionSelectors.getToken(getState());

  if (!token) {
    return;
  }

  setAuthToken(token);

  dispatch(refreshUserRequest());

  axios
    .get("/auth/current")
    .then(response => {
      dispatch(refreshUserSuccses(response.data));
    })
    .catch(error => {
      notyf.alert(error);
      console.log(error);
      clearAuthToken();
      dispatch(refreshUserError(error));
    });
};

export const logOut = () => dispatch => {
  clearAuthToken();

  dispatch(logOutSuccess());
};
