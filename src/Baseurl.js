import axios from "axios";

export default axios.defaults.baseURL = "https://logisx.uc.r.appspot.com";

const token =
  window.localStorage.getItem("persist:auth") &&
  JSON.parse(window.localStorage.getItem("persist:auth")).token.replace(
    /['"]+/g,
    ""
  );

export const PostUrl = axios.create({
  baseURL: "https://logisx.uc.r.appspot.com/api/shipper",
  method: "POST",
  headers: {
    "Content-Type": "Application/json",
    token: token,
  },
});

export const GetUrl = axios.create({
  baseURL: "https://logisx.uc.r.appspot.com/api/shipper",
  method: "GET",
  headers: {
    "Content-Type": "Application/json",
    token: token,
  },
});

export const commonGetUrl = axios.create({
  baseURL: "https://logisx.uc.r.appspot.com/api/",
  method: "GET",
  headers: {
    "Content-Type": "Application/json",
    token: token,
  },
});
