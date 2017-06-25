import beforeLast from '../src/before-last'

test('should return substring before last occurence of delimter', () => {
  const str = 'foobarbarbaz'
  expect(beforeLast(str, 'bar')).toBe('foobar')
})
