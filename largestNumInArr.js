function largestOfFour(arr) {
  // You can do this!
  const largestArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    const currArr = arr[i];

    largestArr.push(currArr.sort((a, b) => b - a)[0]);
  }


  return largestArr;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);