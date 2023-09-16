import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

const BASE_URL = import.meta.env.DEV ? import.meta.env.VITE_API_BASE_URL : process.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.DEV ? import.meta.env.VITE_API_KEY : process.env.VITE_API_KEY;
// console.log(BASE_URL);
// console.log(API_KEY);

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY
  }
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data);
  };

  getAllVideos = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<T>(this.endpoint, config)
      .then(res => res.data);
  };

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + '/' + id)
      .then(res => res.data);
  };

}

export default APIClient;
