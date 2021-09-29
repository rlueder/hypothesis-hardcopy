import axios from "axios";

/**
 * @name getBook
 * @summary Queries the Google Books API for details on book.
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
        .then((response) => {
            const data = response.data?.items[0]?.volumeInfo;
            const idEntry = data?.industryIdentifiers[0];

            // handle missing ISBN-13 or ISBN-10
            if(idEntry.type !== "ISBN_13" || idEntry.type !== "ISBN_10") {
                if(isbn.length === 13) {
                    idEntry.type = "ISBN_13";
                }
                if(isbn.length === 10) {
                    idEntry.type = "ISBN_10";
                }
                idEntry.identifier = isbn;
            }
            return data;
        })
        .catch((error) => {
            console.log(error);
        })
};

export default getBook;
