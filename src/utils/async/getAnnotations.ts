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

const getAnnotations: Function = async (doi: string): Promise<any> => {
  try {
    const response = await axios.get("/search", {
      baseURL: "https://api.hypothes.is/api",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      params: {
        uri: doi,
      },
    });
    const annotations: Annotation[] = response.data.rows;
    return annotations;
  } catch (error) {
    console.log(error);
  }
};

export default getAnnotations;
