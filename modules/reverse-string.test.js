const reverseString = require('./reverse-string.js');

test('Hello should be cat', () => {
  expect(reverseString('cat')).toBe('tac');
});

test('Empty string should return Error', () => {
  expect(reverseString('')).toBe('Empty string can not be reversed');
});