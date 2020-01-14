function dropElements(arr, func) {
  let filteredArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (func(arr[i])) {
      filteredArr = arr.slice(i);
      break;
    }
  }

  return filteredArr;
}

dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
})