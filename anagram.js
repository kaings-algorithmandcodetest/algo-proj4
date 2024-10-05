function validAnagram(string1, string2) {
  const arr1 = [...string1];
  const arr2 = [...string2];
  let obj1 = {};
  let obj2 = {};

  if (arr1.length !== arr2.length) {
    console.log("invalid anagram!");
    return false;
  }

  for (let key1 of arr1) {
    if (!obj1[key1]) {
      obj1[key1] = 1;
    } else {
      obj1[key1] += 1;
    }
  }

  for (let key2 of arr2) {
    if (!obj2[key2]) {
      obj2[key2] = 1;
    } else {
      obj2[key2] += 1;
    }
  }

  for (let k1 in obj1) {
    if (!(k1 in obj2)) {
      console.log("invalid anagram!");
      return false;
    }
    if (obj1[k1] !== obj2[k1]) {
      console.log("invalid anagram!");
      return false;
    }
  }

  console.log("valid anagram!");
  return true;
}

const args = process.argv;
console.log(`args: ${[...args]}`);
validAnagram(args[2], args[3]);
