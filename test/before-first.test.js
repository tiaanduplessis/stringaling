import beforeFirst from '../src/before-first'

test('should return substring before first first occurence of delimter', () => {
  const str = 'foobarbar'
  expect(beforeFirst(str, 'bar')).toBe('foo')
})
