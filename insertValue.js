function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] >= num) return i;
  }

  return arr.length;
}