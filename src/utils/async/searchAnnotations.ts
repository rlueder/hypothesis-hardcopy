import { hypothesisClient } from "../index";

import type { Annotation } from "../../definitions";

/**
 * @async
 * @name searchAnnotations
 * @type {Function}
 * @summary Queries the Hypothesis API returning annotations for a DOI.
 * @see {@link https://h.readthedocs.io/en/latest/api-reference/#tag/annotations}
 * @param {string} uri
 * @returns {Promise<any>}
 */

const searchAnnotations: Function = async (uri: string): Promise<any> => {
  try {
    const response = await hypothesisClient.get("/search", {
      params: {
        uri: uri,
      },
    });
    const annotations: Annotation[] = response.data.rows;
    return annotations;
  } catch (error) {
    console.log(error);
  }
};

export default searchAnnotations;
