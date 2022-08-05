import axios from "axios";

const http = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL_DEV
});

export default http;

// https://sozaeng.herokuapp.com/https://course-api.com/react-store-products