import afterFirst from '../src/after-first'

test('should return substring after delimter', () => {
  expect(afterFirst('foobarbaz', 'bar')).toBe('baz')
  expect(afterFirst('foolalalabar', 'la')).toBe('lalabar')
})
