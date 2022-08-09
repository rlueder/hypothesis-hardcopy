/**
 * @name printDOI
 * @param {string[]} parts
 * @returns {string}
 */

const printDOI = (parts: string[]): string =>
  `doi:10.${parts[0]}.${parts[1]}${parts[2]}/${parts[3]}${parts[4]}`;

export default printDOI;

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("generates a DOI from ISBN", () => {
    expect(printDOI(["978", "0", "415", "31915", "7"])).toEqual(
      "doi:10.978.0415/319157"
    );
  });
}
