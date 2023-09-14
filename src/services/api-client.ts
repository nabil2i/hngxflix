import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = import.meta.env.DEV ? import.meta.env.VITE_API_BASE_URL : process.env.API_BASE_URL;
const API_KEY = import.meta.env.DEV ? import.meta.env.VITE_API_KEY : process.env.API_BASE_URL;
console.log(BASE_URL);
console.log(API_KEY);

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY
  }
});

class APIClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get(this.endpoint, config)
      .then(res => res.data);
  };

}

export default APIClient;
