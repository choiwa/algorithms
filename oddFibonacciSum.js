function sumFibs(num) {
  let prevNum = 0;
  let currNum = 1;
  let result = 0;

  while (num >= currNum) {
    if (currNum % 2 !== 0) {
      result += currNum;
    }

    const temp = currNum;
    currNum += prevNum;
    prevNum = temp;
  }

  return result;
}

sumFibs(10);
