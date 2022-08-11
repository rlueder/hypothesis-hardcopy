import { hypothesisClient } from "../index";

import type { Annotation } from "../../definitions";

/**
 * @async
 * @name createAnnotation
 * @type {Function}
 * @param {string} doi
 * @param {string} text
 * @see {@link https://h.readthedocs.io/en/latest/api-reference/v2/#tag/annotations/paths/~1annotations/post}
 * @returns {Promise<any>}
 */

const createAnnotation: Function = async (
  doi: string,
  title: string,
  text: string
): Promise<any> => {
  // by default we assign group "__world__" making annotations public
  const group = "__world__";
  const uri = `https://dx.doi.org/${doi}`;

  try {
    const response: Annotation = await hypothesisClient.post("/annotations", {
      document: {
        title: title,
      },
      group: group,
      permissions: {
        read: [`group:${group}`],
      },
      target: [
        {
          source: uri,
        },
      ],
      text: text,
      uri: uri,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default createAnnotation;
