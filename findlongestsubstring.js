function findLongestSubstring(str) {
  // add whatever parameters you deem necessary - good luck!
  let count = 0;
  let max = 0;
  let obj = {};

  if (str.length === 0) return count;

  let idx1 = 0;
  let idx2 = 0;

  while (idx1 < str.length) {
    const key = str[idx2];
    // console.log("BFR1", key, obj, count, max);
    if (key && !obj[key]) {
      obj[key] = 1;
      count++;
      idx2++;
      if (count > max) {
        max = count;
      }
    } else {
      obj = {};
      count = 0;
      idx2 = idx1 + 1;
      idx1++;
    }
    console.log("AFT", key, obj, count, max);
  }

  return max;
}

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
