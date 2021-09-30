import { hyphenate } from "./beautify-isbn";

/**
 * @name splitter
 * @param {string} isbn
 * @returns {Array<string>}
 */

const splitter = (isbn: string) => {
  const hyphenated: string = hyphenate(isbn);
  return hyphenated.split("-");
};

export default splitter;
