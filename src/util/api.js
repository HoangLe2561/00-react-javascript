import axios from "./axios-customize";
const createUserAPI = (email, password, name) => {
  const URL_API = "/v1/api/register";
  const data = {
    email,
    password,
    name,
  };
  return axios.post(URL_API, data);
};
const loginAPI = (email, password) => {
  const URL_API = "/v1/api/login";
  const data = {
    email,
    password,
  };
  return axios.post(URL_API, data);
};
const getUserAPI = () => {
  const URL_API = "/v1/api/user";
  return axios.get(URL_API);
};
export { createUserAPI, loginAPI, getUserAPI };
