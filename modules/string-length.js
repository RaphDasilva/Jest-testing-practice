const stringLength = (str) => {
  if (str.length > 0 && str.length < 11) {
    return str.length;
  }
  return 'Conditions are not met';
};
module.exports = stringLength;