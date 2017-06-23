/**
 * Search str for character at given index
 * @param {String} str Input str to search
 * @param {Number} index Index str of character to return(starting from 0)
 *
 * @returns {String} Character at given index
 */
function at (str = '', index = 0) {
  return str.substr(index, 1)
}

export default at
