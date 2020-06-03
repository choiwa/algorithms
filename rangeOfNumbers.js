function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  }
  let currArr = rangeOfNumbers(startNum, endNum - 1);
  currArr.push(endNum);
  return currArr;
}
