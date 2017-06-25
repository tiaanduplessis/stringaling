/**
 * Searches string for given delimiter and returns substring before last occurence of delimiter
 *
 * @param {String} str to search
 * @param {*} delimiter to find
 */
function beforeLast (str = '', delimiter) {
  str = str.toString()

  if (!delimiter) {
    return str
  }

  const index = str.lastIndexOf(delimiter)

  if (index === -1) {
    return str
  }

  return str.slice(0, index)
}

export default beforeLast
