function averagePair(arr, avg) {
  // add whatever parameters you deem necessary - good luck!

  let tmp = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    tmp = (arr[left] + arr[right]) / 2;
    if (tmp === avg) return true;

    if (tmp < avg) left++;

    if (tmp > avg) right--;
  }

  return false;
}
