import axios from "axios";

const apiKey = "db2e4920bdb0e2bfe866ae3f1a0cb1a5";
export const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: { appid: apiKey ,units: "metric"},
});
