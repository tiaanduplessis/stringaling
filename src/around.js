const arrToStr = (arr = '') => {
  return Array.isArray(arr) ? arr.join('') : arr
}

function around (str = '', prefix = '', suffix = '') {
  return `${arrToStr(prefix)}${str}${arrToStr(suffix)}`
}

export default around
