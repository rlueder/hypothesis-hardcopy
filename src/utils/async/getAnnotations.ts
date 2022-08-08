import axios from "axios";

import type { Annotation } from "../../definitions";

const TOKEN = import.meta.env.VITE_HYPOTHESIS_TOKEN;

/**
 * @async
 * @name getAnnotations
 * @summary Queries the Hypothesis API returning annotations for a DOI.
 * @see {@link https://h.readthedocs.io/en/latest/api-reference/#tag/annotations}
 * @param {string} doi
 * @returns {Promise<any>}
 */

const getAnnotations = (doi: string): Promise<any> => {
  return axios
    .get("/search", {
      baseURL: "https://api.hypothes.is/api",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      params: {
        uri: doi,
      },
    })
    .then(
      (response: {
        data: {
          rows: Annotation[];
        };
      }) => response.data.rows
    )
    .catch((error: Error) => {
      console.log(error);
    });
};

export default getAnnotations;
