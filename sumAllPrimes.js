function sumPrimes(num) {
  const primes = [2];
  let count = 3;
  let result = 0;

  if (num < 2) {
    return 0;
  }

  if (num === 2) {
    return 2;
  }

  while (num >= count) {
    for (let i = 0; i < primes.length; i += 1) {
      if (count % primes[i] === 0) {
        break;
      }

      if (i === primes.length - 1) {
        primes.push(count);
      }
    }

    count += 1;
  }

  for (let i = 0; i < primes.length; i += 1) {
    result += primes[i];
  }

  return result;
}
