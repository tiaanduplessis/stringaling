import stringaling from '../src'

test('should export object', () => {
  expect(stringaling).toBeDefined()
  expect(typeof stringaling).toBe('object')
})
