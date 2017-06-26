import toTitleCase from '../src/to-title-case'

test('should make a string title case', () => {
  const str = 'foo bar baz'
  expect(toTitleCase(str)).toBe('Foo Bar Baz')
})
