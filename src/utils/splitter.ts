import { hyphenate } from "./beautify-isbn";

/**
 * @name splitter
 * @param {string} isbn
 * @returns {string[]}
 */

const splitter = (isbn: string): string[] => {
  const hyphenated: string = hyphenate(isbn);
  return hyphenated.split("-");
};

export default splitter;
