/** @format */

import axios from "axios";

const auth = JSON.parse(window.localStorage.getItem("auth"));

const privateAPI = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  headers: {
    Authorization: auth?.access_token,
    "x-access-token": "fghjkfjkgiuiutgkb",
  },
});

export default privateAPI;
