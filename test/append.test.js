import append from '../src/append'

test('should append string to string', () => {
  expect(append('foo', 'bar')).toBe('foobar')
  expect(append('foo', 'bar', 'baz')).toBe('foobarbaz')
})
