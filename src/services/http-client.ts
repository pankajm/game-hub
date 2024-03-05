import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9fd2d48f71bd45c2afa1aa8152ea6f9a",
  },
});

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

class HttpClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (axiosConfig: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, axiosConfig)
      .then((res) => res.data);

  get = (slug: number | string) =>
    axiosInstance.get<T>(this.endpoint + "/" + slug).then((res) => res.data);
}

export default HttpClient;
