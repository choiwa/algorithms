function sumAll(arr) {
  let sum = 0;
  let firstNum;
  let secondNum;

  if (arr[0] < arr[1]) {
    firstNum = arr[0];
    secondNum = arr[1];
  } else {
    firstNum = arr[1];
    secondNum = arr[0];
  }

          for (let i = firstNum; i <= secondNum; i += 1) {
          sum += i;
        }

  return sum;
}

sumAll([1, 4]);