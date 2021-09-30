/**
 * @name printDOI
 * @param {Array<string>} parts
 * @returns {string}
 */

const printDOI = (parts: Array<string>) =>
  `doi:10.${parts[0]}.${parts[1]}${parts[2]}/${parts[3]}${parts[4]}`;

export default printDOI;
