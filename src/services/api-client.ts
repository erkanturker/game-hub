import axios, { AxiosRequestConfig } from "axios";

export interface Payload<T> {
  count: number;
  results: T[];
  next: string | null;
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "39a8472c3e294ce8be08174629415310",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll(config?: AxiosRequestConfig) {
    return axiosInstance
      .get<Payload<T>>(this.endpoint, config)
      .then((res) => res.data);
  }

  get(id: number | string) {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  }
}

export default APIClient;
