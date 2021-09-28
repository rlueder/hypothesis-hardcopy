import axios from "axios";

/**
 * @name getAnnotations
 * @summary Queries the Hypothesis API returning annotations for a DOI.
 * @see {@link https://h.readthedocs.io/en/latest/api-reference/#tag/annotations}
 * @returns {Promise}
 */

const getAnnotations = (doi) => {
    return axios.get("/search", {
        baseURL: "https://api.hypothes.is/api",
        params: {
         uri: `doi:${doi}`
        }
    })
        .then((response) => response.data)
        .catch((error) => {
        console.log(error);
    })
};

export default getAnnotations;