function countUniqueValues(arr) {
  let obj = {};

  for (let val of arr) {
    if (!obj[val]) {
      obj[val] = 1;
    }

    obj[val]++;
  }

  const keys = Object.keys(obj);
  return keys.length || 0;
}

let input = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];
input = [];
console.log("number of unique value: ", countUniqueValues(input));
