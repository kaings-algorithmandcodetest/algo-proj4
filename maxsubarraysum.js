function maxSubArraySum(arr, num) {
  let max = 0;
  let tmp = 0;

  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  tmp = max;

  console.log("init max sum is ", max);

  for (let j = 1; j < arr.length; j++) {
    tmp = tmp - arr[j - 1] + arr[num - 1 + j];

    console.log(
      "max vs tmp: ",
      max,
      " vs ",
      tmp,
      max,
      arr[j - 1],
      arr[num - 1 + j]
    );

    if (tmp > max) max = tmp;
  }

  console.log("max sum is ", max);
  return max;
}

let arr = [2, 6, 9, 2, 1, 8, 5, 6, 3];
let num = 3;

maxSubArraySum(arr, num);
