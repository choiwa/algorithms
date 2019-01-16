function maximumToys(prices, k) {
  let arr = prices.sort((a, b) => a - b);
  let num = k;
  let count = 0;

  for (let i = 0; i < arr.length; i += 1) {
    num -= arr[i];

    if (num > 0) {
      count++;
    }

    if (num === 0) {
      break;
    }

    if (num < 0) {
      break;
    }
  }

  return count;
}
