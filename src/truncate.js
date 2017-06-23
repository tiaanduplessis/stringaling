import append from './append'
export default function (str = '', length = 0, suffix = '') {
  if (length === 0) {
    return ''
  }

  if (length >= str.length) {
    return str
  }

  const truncated = str.substr(0, length - suffix.length)

  return append(truncated, suffix)
}
