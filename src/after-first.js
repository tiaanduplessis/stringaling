/**
 *
 * @param {String} str to search
 * @param {String} delimter to look for
 */
function afterFirst (str = '', delimiter = '') {
  str = str.toString()

  if (!delimiter) {
    return str
  }

  const index = str.indexOf(delimiter)

  if (index === -1) {
    return str
  }

  return str.slice(index + delimiter.length)
}

export default afterFirst
