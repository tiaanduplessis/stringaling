import at from '../src/at'

test('should retrieve character at given index', () => {
  expect(at('foo', 1)).toBe('o')
})
