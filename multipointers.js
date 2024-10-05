function sumZero(arr) {
  let ptr1 = 0;
  let ptr2 = arr.length - 1;

  while (ptr1 < ptr2) {
    if (arr[ptr1] + arr[ptr2] === 0) {
      console.log("pair found!", [arr[ptr1], arr[ptr2]]);
      return true;
    }

    if (arr[ptr1] + arr[ptr2] < 0) ptr1++;
    if (arr[ptr1] + arr[ptr2] > 0) ptr2--;

    console.log("still looking. current pair ", [arr[ptr1], arr[ptr2]]);
  }
}

const input = [-4, -3, -2, -1, 0, 1, 2, 5];

sumZero(input);
