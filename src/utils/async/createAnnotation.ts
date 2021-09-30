import axios from "axios";

const TOKEN = process.env.REACT_APP_HYPOTHESIS_TOKEN;

/**
 * @async
 * @name createAnnotation
 * @type {Function}
 * @param {string} doi
 * @param {string} text
 * @see {@link https://h.readthedocs.io/en/latest/api-reference/v2/#tag/annotations/paths/~1annotations/post}
 * @returns {Promise<any>}
 */

const createAnnotation = (doi: string, text: string): Promise<any> => {
  return axios
    .post(
      "/annotations",
      {
        uri: doi,
        text: text,
      },
      {
        baseURL: "https://api.hypothes.is/api",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    )
    .then((response: { status: number }) => response)
    .catch((error: Error) => {
      console.log(error);
    });
};

export default createAnnotation;
