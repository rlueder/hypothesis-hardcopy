import axios from "axios";

/**
 * @async
 * @name getBook
 * @summary Queries the Google Books API for details on a book.
 * @param {string} isbn - a valid ISBN-10 or ISBN-13
 * @returns {Promise<any>}
 */

const getBook = async (isbn: string): Promise<any> => {
  try {
    const response = await axios.get("/volumes", {
      baseURL: "https://www.googleapis.com/books/v1",
      params: {
        q: `isbn:${isbn}`,
      },
    });

    const { data } = response;

    const volumeInfo = data.items[0].volumeInfo;
    const { imageLinks, industryIdentifiers } = volumeInfo;

    // change default style of Google Books thumbnails
    imageLinks.smallThumbnail = imageLinks.smallThumbnail
      .replace("&edge=curl", "")
      .replace("&zoom=5", "&zoom=1");

    // handle missing ISBN-13 or ISBN-10
    const idEntry = industryIdentifiers[0];
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
  } catch (error) {
    console.log(error);
  }
};

export default getBook;
