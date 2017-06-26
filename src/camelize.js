import toTitleCase from './to-title-case'

/**
 * Camelcase a given string
 * @param {String} str to convert to camelcase
 *
 * @returns {String} Camelcase string
 */
function camelize (str = '') {
  const newStr = toTitleCase(str.replace(/[.-]/, ' ')).replace(/\s/g, '')
  return `${newStr.slice(0, 1).toLowerCase()}${newStr.slice(1)}`
}

export default camelize
