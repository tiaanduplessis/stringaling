import slugify from '../src/slugify'

test('should return a slug', () => {
  const str1 = 'foo baz bar'
  const str2 = '<foo><baz>baz boo</baz></foo>'

  expect(slugify(str1)).toBe('foo-baz-bar')
  expect(slugify(str2)).toBe('baz-boo')
})
