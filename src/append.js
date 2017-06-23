/**
 *
 * @param {String} str to append strings to
 * @param {Array} appends is an array of strings to append to the str
 *
 * @returns {String} str with appends appended
 */
function append (str = '', ...appends) {
  return str + appends.join('')
}

export default append
