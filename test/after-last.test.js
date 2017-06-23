import afterLast from '../src/after-last'

test('should return substring after last occurrence of delimiter', () => {
  const str1 = 'foobazbar'
  const str2 = 'foolalalabaz'

  expect(afterLast(str1, 'baz')).toBe('bar')
  expect(afterLast(str2, 'la')).toBe('baz')
})
