const coins = [10, 6, 1];
// memorization + recursive approach
const cache = {};

const makeChange = (value) => {
  if (cache[value]) {
    return cache[value];
  }

  if (value === 0) {
    return 0;
  }

  let minCoins;

  coins.forEach((coin) => {
    if (value - coin >= 0) {
      let currMinCoins = makeChange(value-coin);

      if (minCoins === undefined || minCoins > currMinCoins) {
        minCoins = currMinCoins;
      }
    }

  })

  cache[value] = minCoins + 1
  return cache[value];
}

makeChange(12);