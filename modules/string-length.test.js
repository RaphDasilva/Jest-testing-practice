const stringLength = require('./string-length');

test('King is 4 latters', () => {
  expect(stringLength('king')).toBe(4);
});

test('The string length for encyclopedia is greater than 10', () => {
  expect(stringLength('encyclopedia')).toBe('Conditions are not met');
});

test('string Length less than 1', () => {
  expect(stringLength('')).toBe('Conditions are not met');
});