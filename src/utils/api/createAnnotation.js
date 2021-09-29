import axios from "axios";

const TOKEN = process.env.REACT_APP_HYPOTHESIS_TOKEN;

/**
 * @name createAnnotation
 * @type {Function}
 * @param {string} isbn - string following ISBN-A syntax
 * @param {string} annotation
 * @see {@link https://h.readthedocs.io/en/latest/api-reference/v2/#tag/annotations/paths/~1annotations/post}
 * @returns {Promise<any>}
 */

const createAnnotation = (isbn, annotation) => {
    return axios.post("/annotations", {
        uri: `doi:${isbn}`,
        text: annotation
    }, {
        baseURL: "https://api.hypothes.is/api",
        headers: {
            "Authorization": `Bearer ${TOKEN}`,
        }
    })
        .then((response) => response)
        .catch((error) => {
            console.log(error);
        })
};

export default createAnnotation;
