import { hypothesisClient } from "../index";

import type { Annotation } from "../../definitions";

/**
 * @async
 * @name createAnnotation
 * @type {Function}
 * @see {@link https://h.readthedocs.io/en/latest/api-reference/v2/#tag/annotations/paths/~1annotations/post}
 * @param {string} doi
 * @param {string} text
 * @returns {Promise<any>}
 */

const createAnnotation: Function = async (
  doi: string,
  text: string
): Promise<any> => {
  try {
    const response: Annotation = await hypothesisClient.post("/annotations", {
      uri: doi,
      text: text,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default createAnnotation;
