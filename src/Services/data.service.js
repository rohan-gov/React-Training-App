import axios from "axios";

const API_URL = "https://reqres.in/api/";

const getUsers = () => {
  return axios.get(API_URL + "users");
};

export default {
  getUsers
};
