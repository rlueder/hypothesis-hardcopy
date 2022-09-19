import { hypothesisClient } from "../index";

import type { Annotation } from "../../definitions";

/**
 * @async
 * @name createAnnotation
 * @type {Function}
 * @param {string} uri
 * @param {string} text
 * @see {@link https://h.readthedocs.io/en/latest/api-reference/v2/#tag/annotations/paths/~1annotations/post}
 * @returns {Promise<any>}
 */

const createAnnotation: Function = async (
  uri: string,
  title: string,
  text: string
): Promise<any> => {
  // by default we assign group "__world__" making annotations public
  const group = "__world__";

  try {
    const response: Annotation = await hypothesisClient.post("/annotations", {
      document: {
        title: title,
      },
      group: group,
      permissions: {
        read: [`group:${group}`],
      },
      text: text,
      uri: uri,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default createAnnotation;
