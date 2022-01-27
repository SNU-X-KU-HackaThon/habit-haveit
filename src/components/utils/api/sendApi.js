import API_URLS from "../../../../constants/API_URLS";
import { axiosInstance } from "./common";

const { SEND, COMPLETE, CHECK_GIFT, CHECK_LETTER } = API_URLS;

export const sendApi = async (
  sender,
  userId,
  sendType,
  letterDate,
  presentType,
  letterContent
) => {
  let data = {};
  if (sendType === "LETTER") {
    data = {
      sender: sender,
      receiver: userId,
      sendType: "LETTER",
      date: Number.parseInt(letterDate),
      content: letterContent,
    };
  } else {
    data = {
      sender: sender,
      receiver: userId,
      sendType: "PRESENT",
      name: presentType,
      month: 2,
    };
  }
  console.log(data);
  return await axiosInstance.post(SEND, data);
};

export const completeApi = async (userId, today, goal) => {
  const data = {
    userid: userId,
    date: Number.parseInt(today),
    goal: goal,
  };
  return await axiosInstance.post(COMPLETE, data);
};

export const checkgiftApi = async (userId) => {
  const data = {
    userid: userId,
  };
  return await axiosInstance.post(CHECK_GIFT, data);
};

export const checkletterApi = async (userId, date) => {
  const data = {
    userid: userId,
    date: Number.parseInt(date),
  };
  return await axiosInstance.post(CHECK_LETTER, data);
};
