import truncate from '../src/truncate'

test('should truncate a string', () => {
  const value = 'foobazbar'
  expect(truncate(value, 6, '...')).toBe('foo...')
  expect(truncate(value, 6)).toBe('foobaz')
  expect(truncate(value, 10)).toBe(value)
})
