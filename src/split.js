/**
 * Split a string at given delimter.
 * Wrapper around String.prototype.split
 * @param {String} str to split based on delimter
 * @param {String} delimiter to split str on
 *
 * @returns {Array}
 */
function split (str = '', delimiter = '') {
  return str.split(delimiter)
}

export default split
