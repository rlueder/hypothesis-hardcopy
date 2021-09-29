import axios from "axios";

/**
 * @name getWorks
 * @summary Queries the CrossRef API for details on book.
 * @see {@link https://api.crossref.org/swagger-ui/index.html#/Works}
 * @param {string} author
 * @param {number} isbn
 * @param {string} publisher
 * @param {string} title
 * @returns {Promise}
 */

// TODO refactor parameters assignment

const getWorks = (author, isbn, publisher, title) => {

    const params = {};

    if(author) {
        params["query.author"] = author;
    }

    if(isbn) {
        params["query.bibliographic"] = isbn;
    } else if(title) {
        params["query.bibliographic"] = title;
    }

    if(publisher) {
        params["query.publisher-name"] = publisher;
    }

    return axios.get("/works", {
        baseURL: "https://api.crossref.org/",
        params: params
    })
        .then((response) => response.data.message.items)
        .catch((error) => {
            console.log(error);
        })
};

export default getWorks;
