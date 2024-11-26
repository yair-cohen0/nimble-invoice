import axios from "axios";
import config from "../config.ts";

export const axiosClient = axios.create({
    baseURL: config.serverUrl,
})