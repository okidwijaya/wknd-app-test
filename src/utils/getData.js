import axios from "axios";

const URL = process.env.REACT_APP_HOST;

export const getTestimonial = () => {
  return axios.get(URL + "/testimonial");
};

export const getAdditionalInfo = () => {
  return axios.get(URL + "/help-tips");
};
