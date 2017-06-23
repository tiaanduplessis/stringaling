/**
 * Converts a value from a slug
 * Extracted from: https://github.com/egoist/slugo
 * @param {String} str to convert to slug
 *
 * @returns {String} Slug
 */
function slugify (str = '') {
  str = str.toString()
  return str
    .toLowerCase()
    .replace(/<(?:.|\n)*?>/gm, '')
    .replace(/[!"#$%&'()*+,/:;<=>?@[\\]^`{\|}~]/g, '')
    .replace(/(\s|\.)/g, '-')
}

export default slugify
