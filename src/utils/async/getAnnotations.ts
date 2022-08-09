import { hypothesisClient } from "../index";

import type { Annotation } from "../../definitions";

/**
 * @async
 * @name getAnnotations
 * @type {Function}
 * @summary Queries the Hypothesis API returning annotations for a DOI.
 * @see {@link https://h.readthedocs.io/en/latest/api-reference/#tag/annotations}
 * @param {string} doi
 * @returns {Promise<any>}
 */

const getAnnotations: Function = async (doi: string): Promise<any> => {
  try {
    const response = await hypothesisClient.get("/search", {
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
