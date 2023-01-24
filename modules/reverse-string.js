const reverseString = (str) => {
  if (str.length > 0) {
    return str.split('').reverse().join('');
  }
  return 'Empty string can not be reversed';
};

module.exports = reverseString;