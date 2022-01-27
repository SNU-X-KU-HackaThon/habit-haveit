import axios from "axios";

function withoutAuth() {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });
}

export const axiosInstance = withoutAuth();
