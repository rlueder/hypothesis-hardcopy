import {
    hyphenate,
    validate,
    toIsbn13
} from "./beautify-isbn";

/**
 * @name getDOI
 * @summary Generates a valid DOI based on a valid 13-digit ISBN.
 * @see {@link https://www.doi.org/factsheets/ISBN-A.html}
 * @param {string} isbn
 * @returns {string} DOI
 */

const getDOI = (isbn) => {
    const splitter = (isbn) => hyphenate(isbn).split("-");
    const printDOI = (parts) => `10.${parts[0]}.${parts[1]}${parts[2]}/${parts[3]}${parts[4]}`;
    // checks if ISBN is valid first
    if(validate(isbn)) {
        // ISBN-A requires a ISBN-13 starting point convert if needed
        if(isbn.length === 10) {
            return printDOI(splitter(toIsbn13(isbn)));
        }
        return printDOI(splitter(isbn));
    } else {
        console.log("ISBN is not valid.")
    }
};

export default getDOI;
