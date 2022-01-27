import API_URLS from "../../../../constants/API_URLS";
import { axiosInstance } from "./common";

const { SIGNUP, LOGIN, LOGOUT, ID_CHECK } = API_URLS;

export const signupApi = async (userid, username, password, goal) => {
  const data = {
    userid: userid,
    username: username,
    password: password,
    goal: goal,
  };
  return await axiosInstance.post(SIGNUP, data);
};

export const loginApi = async (userid, password) => {
  const data = {
    userid: userid,
    password: password,
  };
  return await axiosInstance.post(LOGIN, data);
};

export const checkApi = async (userid) => {
  const data = {
    userid: userid,
  };
  return await axiosInstance.post(ID_CHECK, data);
};

export const logoutApi = async () => {
  return await axiosInstance.get(LOGOUT);
};
