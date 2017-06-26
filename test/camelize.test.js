import camelize from '../src/camelize'

test('should turn a string to camelcase', () => {
  const str = 'foo bar BAZ-boo'

  expect(camelize(str)).toBe('fooBarBazBoo')
})
