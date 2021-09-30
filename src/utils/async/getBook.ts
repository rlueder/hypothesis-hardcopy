import axios from "axios";

import type { BookInfo } from "../../definitions";

/**
 * @async
 * @name getBook
 * @summary Queries the Google Books API for details on a book.
 * @param {string} isbn - a valid ISBN-10 or ISBN-13
 * @returns {Promise<any>}
 */

const getBook = (isbn: string): Promise<any> => {
  return axios
    .get("/volumes", {
      baseURL: "https://www.googleapis.com/books/v1",
      params: {
        q: `isbn:${isbn}`,
      },
    })
    .then(
      (response: {
        data: {
          items: Array<{
            volumeInfo: BookInfo;
          }>;
          kind: string;
          totalViews: number;
        };
      }) => {
        const { data } = response;
        const volumeInfo = data.items[0].volumeInfo;
        const idEntry = volumeInfo.industryIdentifiers[0];

        // handle missing ISBN-13 or ISBN-10
        if (idEntry.type !== "ISBN_13" || "ISBN_10") {
          if (isbn.length === 13) {
            idEntry.type = "ISBN_13";
          }
          if (isbn.length === 10) {
            idEntry.type = "ISBN_10";
          }
          idEntry.identifier = isbn;
        }
        return volumeInfo;
      }
    )
    .catch((error: Error) => {
      console.log(error);
    });
};

export default getBook;
