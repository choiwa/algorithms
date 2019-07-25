function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  const firstArr = arr1.slice();
  const secArr = arr2.slice();

  secArr.splice(n, 0, ...firstArr);

  return secArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);