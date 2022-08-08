import axios from "axios";

const TOKEN = import.meta.env.VITE_HYPOTHESIS_TOKEN;

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
  text: string
): Promise<any> => {
  try {
    const response = await axios.post(
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
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default createAnnotation;
