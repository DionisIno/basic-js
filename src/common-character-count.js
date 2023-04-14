const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const map = {};
  
  for (let i = 0; i < s1.length; i++) {
    if (!map[s1[i]]) {
      map[s1[i]] = 1;
    } else {
      map[s1[i]]++;
    }
  }
  
  for (let i = 0; i < s2.length; i++) {
    if (map[s2[i]] && map[s2[i]] > 0) {
      count++;
      map[s2[i]]--;
    }
  }
  
  return count;
}

module.exports = {
  getCommonCharacterCount
};
