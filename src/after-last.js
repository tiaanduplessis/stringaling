function afterLast (str = '', delimiter) {
  str = str.toString()

  if (!delimiter) {
    return str
  }

  const index = str.lastIndexOf(delimiter)

  if (index === -1) {
    return str
  }

  return str.slice(index + delimiter.length)
}

export default afterLast
