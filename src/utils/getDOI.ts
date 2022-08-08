import { toIsbn13, validate } from "./beautify-isbn";

import { printDOI, splitter } from "./index";

/**
 * @name getDOI
 * @type {Function}
 * @summary Generates a DOI based on a valid ISBN-13.
 * @see {@link https://www.doi.org/factsheets/ISBN-A.html}
 * @param {string} isbn
 * @returns {string | null}
 */

const getDOI: Function = (isbn: string | null): string | null => {
  // checks if ISBN is valid first
  if (isbn && validate(isbn)) {
    // ISBN-A requires a ISBN-13 starting point; convert if needed
    if (isbn.length === 10) {
      return printDOI(splitter(toIsbn13(isbn)));
    }
    return printDOI(splitter(isbn));
  } else {
    console.log("ISBN is not valid.");
    return null;
  }
};

export default getDOI;
