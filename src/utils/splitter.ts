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

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("splits a hyphenated ISBN into parts", () => {
    expect(splitter("9780415319157")).toEqual([
      "978",
      "0",
      "415",
      "31915",
      "7",
    ]);
  });
}
