/**
 * Searches string for given delimiter and returns substring before the first occurence of delimiter
 *
 * @param {String} str to search
 * @param {*} delimiter to find
 */
function beforeFirst (str = '', delimiter) {
  str = str.toString()

  if (!delimiter) {
    return str
  }

  const index = str.indexOf(delimiter)

  if (index === -1) {
    return str
  }

  return str.slice(0, index)
}

export default beforeFirst
