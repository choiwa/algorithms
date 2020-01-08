function sumFibs(num) {
  let sum = 0;
  let previous = 0;
  let curr = 1;

  while (curr <= num) {
    if (curr % 2 !== 0) {
      sum += curr;
    }

    curr += previous;
    previous = curr - previous;

  }

  return sum;
}

// test here
sumFibs(75024);