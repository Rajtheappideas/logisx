import axios from "axios";

export default axios.defaults.baseURL = "https://logisx.uc.r.appspot.com/";
export const imageUrl = "https://storage.googleapis.com/logisx-uploads/";

export const PostUrl = axios.create({
  // baseURL: "http://192.168.29.44:3000/api/shipper",
  baseURL: "https://logisx.uc.r.appspot.com/api/shipper",
  method: "POST",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const GetUrl = axios.create({
  baseURL: "https://logisx.uc.r.appspot.com/api/shipper",
  method: "GET",
});

export const commonGetUrl = axios.create({
  baseURL: "https://logisx.uc.r.appspot.com/api/",
  method: "GET",
});
