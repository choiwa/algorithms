const maxProfit = (prices) => {
  let profit = 0;

  for (let i = 0; i < prices.length; i += 1) {
    const currentPrice = prices[i];
    const tmrPrice = prices[i + 1];

    if (tmrPrice > currentPrice) {
      profit += tmrPrice - currentPrice;
    }
  }

  return profit;
}