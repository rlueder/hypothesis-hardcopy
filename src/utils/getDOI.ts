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

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("generates a DOI from ISBN-10", () => {
    expect(getDOI("0415319153")).toEqual("doi:10.978.0415/319157");
  });

  it("generates a DOI from ISBN-13", () => {
    expect(getDOI("9780415319157")).toEqual("doi:10.978.0415/319157");
  });

  it("returns null for an invalid ISBN", () => {
    expect(getDOI("1234567890")).toEqual(null);
  });
}
