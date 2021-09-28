import axios from "axios";
import getAuthor from "./getAuthor";

/**
 * @name getBook
 * @summary Queries the Open Library API for details on book.
 * @param {number} isbn - 10- or 13-digit ISBN
 * @returns {Promise}
 */

const getBook = (isbn) => {
    return axios.get("/volumes", {
        baseURL: "https://www.googleapis.com/books/v1",
        params: {
            q: `isbn:${isbn}`
        }
    })
        .then((response) => response.data?.items[0]?.volumeInfo)
        .catch((error) => {
            console.log(error);
        })
};

export default getBook;
