function destroyer(arr, ...args) {
  arr = arr.filter(elem => !args.includes(elem));
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);