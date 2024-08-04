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
export { createUserAPI };
