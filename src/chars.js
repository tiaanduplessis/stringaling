/**
 * Split given strings into array of characters
 * @param {Array} strs to split into array of characters
 *
 * @returns {Array} Characters in given strings
 */
function chars (...strs) {
  return strs.join('').split('')
}

export default chars
