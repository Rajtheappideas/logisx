import axios from "axios";

export default axios.defaults.baseURL = "https://logisx.uc.r.appspot.com";

export const PostUrl = axios.create({
  baseURL: "https://logisx.uc.r.appspot.com/api/shipper",
  method: "POST",
  headers: {
    "Content-Type": "Application/json",
  },
});

export const GetUrl = axios.create({
  baseURL: "https://logisx.uc.r.appspot.com/api/shipper",
  method: "GET",
  headers: {
    "Content-Type": "Application/json",
  },
});

export const commonGetUrl = axios.create({
  baseURL: "https://logisx.uc.r.appspot.com/api/",
  method: "GET",
  headers: {
    "Content-Type": "Application/json",
  },
});
