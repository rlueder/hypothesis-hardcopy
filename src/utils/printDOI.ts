/**
 * @name printDOI
 * @param {string[]} parts
 * @returns {string}
 */

const printDOI = (parts: string[]): string =>
  `doi:10.${parts[0]}.${parts[1]}${parts[2]}/${parts[3]}${parts[4]}`;

export default printDOI;
