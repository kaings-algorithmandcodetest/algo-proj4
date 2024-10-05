function isSubsequence(s1, s2) {
  // good luck. Add any arguments you deem necessary.
  let idx1 = 0;
  let idx2 = s1.length;
  let count = 0;
  const arr = [...s1, ...s2];
  while (idx1 < s1.length && idx2 < arr.length) {
    console.log("BFR", idx1, idx2, count, arr[idx1], arr[idx2]);
    if (arr[idx1] === arr[idx2]) {
      count++;
      idx1++;
      idx2++;
    } else {
      idx2++;
    }
    console.log("AFT", idx1, idx2, count, arr[idx1], arr[idx2]);
  }

  if (count !== s1.length) {
    return false;
  } else {
    return true;
  }
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order
