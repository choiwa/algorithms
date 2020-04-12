var numberOfSteps = function (num) {
  let count = 0;
  let activeNum = num;

  while (activeNum > 0) {
    if (activeNum % 2 === 0) {
      activeNum = activeNum / 2;
    } else {
      activeNum -= 1;
    }

    count++;
  }

  return count;
};
