import axios from "axios";

export const getAllComments = () => {
  const URL = import.meta.env.VITE_HOST + "/comments";
  return axios.get(URL);
};

export const addComment = (data) => {
  const URL = import.meta.env.VITE_HOST + "/comments";
  return axios.post(URL, data);
};
