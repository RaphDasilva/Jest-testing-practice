const stringLength = require('./string-length.js');

test('King is 4 latters', () => {
  expect(stringLength('king')).toBe(4);
});