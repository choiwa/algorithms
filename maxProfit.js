const maxProfit = (prices) => {
  let profits = 0;
  let i = 0;
  let j = 1;

  while (i < prices.length) {
    if (prices[i + 1] > prices[i]) {
      j = i + 1;
      while (j < prices.length && prices[j] < prices[j + 1]) {
        j += 1;
      }

      profits += prices[j] - prices[i];
      i = j + 1;
    } else {
      i += 1;
    }
  }

  return profits;
};

// maxProfit([7,1,5,3,6,4]); //7
maxProfit([1, 2, 3, 4, 5]); //4
// maxProfit([7,6,4,3,1]); //0
