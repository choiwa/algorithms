function sumAll(arr) {
  let sum = 0;
  let firstNum;
  let secondNum;

  if (arr[0] < arr[1]) {
    [firstNum, secondNum] = arr;
  } else {
    [secondNum, firstNum] = arr;
  }

  for (let i = firstNum; i <= secondNum; i += 1) {
    sum += i;
  }

  return sum;
}

sumAll([1, 4]);
