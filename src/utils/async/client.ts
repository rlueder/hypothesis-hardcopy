import axios, { AxiosInstance } from "axios";

const TOKEN = import.meta.env.VITE_HYPOTHESIS_TOKEN;

/**
 * @name hypothesisClient
 * @summary Creates an Axios instance for Hypothesis API calls.
 * @returns {AxiosInstance}
 */

const hypothesisClient = axios.create({
  baseURL: "https://api.hypothes.is/api",
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

export default hypothesisClient;
