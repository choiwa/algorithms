// recursion
// Big O in this case is equal to 2^n
// runtime: 80 ms

const fib = function (N) {
  if (N === 0) {
    return 0;
  }
  if (N <= 2) {
    return 1;
  }

  return fib(N - 1) + fib(N - 2);
};


// iterative 
// Big O is n
// runtime: 48 ms
const fib = function (N) {
  let arr = [1, 1];

  if (N === 0) {
    return 0;
  }

  if (N <= 2) {
    return 1;
  }

  for (let i = 0; arr.length < N; i += 1) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }

  return arr[arr.length - 1]
}