/**
 * Trim characters from left of string. Defaults to whitespace
 * @param {String} str to trim
 * @param {String} chars to trim from left
 */
function trimLeft (str = '', chars = ' ') {
  return str.replace(new RegExp(`^${chars}+`), '')
}

export default trimLeft
