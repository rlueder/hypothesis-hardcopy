import axios from "axios";

/**
 * @name getAuthor
 * @summary Queries the Open Library API for details on author.
 * @param {string} authorKey
 * @returns {Promise}
 */

const getAuthor = (authorKey) => {
    return axios.get(`${authorKey}.json`, {
        baseURL: "https://openlibrary.org/",
    })
        .then((response) => response.data.name)
        .catch((error) => {
            console.log(error);
        })
};

export default getAuthor;
