import axios from "axios";
// import { REACT_APP_SERVER_URL } from "../constants/constant";
import { loginStart, loginFailure, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      process.env.REACT_APP_SERVER_URL + "/auth/login",
      user
    );
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
