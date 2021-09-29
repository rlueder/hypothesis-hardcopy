import axios from "axios";

const TOKEN = process.env.REACT_APP_HYPOTHESIS_TOKEN;

/**
 * @name getAnnotations
 * @summary Queries the Hypothesis API returning annotations for a DOI.
 * @see {@link https://h.readthedocs.io/en/latest/api-reference/#tag/annotations}
 * @returns {Promise}
 */

const getAnnotations = (doi) => {
    return axios.get("/search", {
        baseURL: "https://api.hypothes.is/api",
        headers: {
            "Authorization": `Bearer ${TOKEN}`,
        },
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