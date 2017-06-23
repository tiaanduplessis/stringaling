import chars from '../src/chars'

test('should return array of characters', () => {
  expect(chars('foo')).toEqual(['f', 'o', 'o'])
})
