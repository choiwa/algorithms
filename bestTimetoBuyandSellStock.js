var maxProfit = function(prices) {
  let profit = 0;
  let minPrice = prices[0];

  for (let i = 0; i < prices.length; i += 1) {
    const currentPrice = prices[i];
    minPrice = Math.min(currentPrice, minPrice);
    profit = Math.max(profit, currentPrice - minPrice);
  }

  return profit;
};
