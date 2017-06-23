/**
 *
 * @param {String} str to get substring from
 * @param {Nunber} length of substring
 */
function last (str = '', length = 1) {
  return str.substr(str.length - length, str.length)
}

export default last
