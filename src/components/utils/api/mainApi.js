import API_URLS from "../../../../constants/API_URLS";
import { axiosInstance } from "./common";

const { GET_MAIN_INFO } = API_URLS;

export const getMainInfoApi = async (userId, month) => {
  const data = {
    userid: userId,
    month: 2,
  };
  console.log(userId);
  return await axiosInstance.post(GET_MAIN_INFO, data);
};

export const getMainMsgApi = async (today, userid) => {
  const data = {
    userid: "aaa",
    today: "",
  };

  return await axiosInstance.post(GET_MAIN_INFO, data);
};

export const getMonthPresentApi = async (userid) => {
  const data = {
    userid: "aaa",
    today: "",
  };

  return await axiosInstance.post(GET_MAIN_INFO, data);
};
