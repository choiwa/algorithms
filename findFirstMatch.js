function findElement(arr, func) {
  for (let i = 0; i < arr.length; i += 1) {
    const curr = arr[i];

    if (func(curr)) {
      return curr;
    }
  }

  return undefined;
}

findElement([1, 3, 5, 8, 9, 10], function (num) {
  return num % 2 === 0;
});