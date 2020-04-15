// https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
function minimumSwaps(arr) {
  let min = arr[0];
  let max = arr[0];
  let ketValuePairs = {};
  let count = 0;

  for (let i = 0; i < arr.length; i += 1) {
    let currNum = arr[i];

    if (currNum < min) {
      min = currNum;
    }

    if (currNum > max) {
      max = currNum;
    }

    ketValuePairs[currNum] = i;
  }

  console.log(min, max, ketValuePairs);

  for (let j = 0; j < arr.length; j += 1) {
    // j = 0
    if (ketValuePairs[min] !== j) {
      let currNum = arr[j]; //4
      let temp = ketValuePairs[min]; // 2
      arr[j] = min; //[1, 3, 1, 2]
      arr[ketValuePairs[min]] = currNum; // [1, 3, 4, 2]
      ketValuePairs[min] = j; //{1: 0, 2: 3, 3: 1, 4: 2}
      ketValuePairs[currNum] = temp;
      count++;
    }
    min++;
  }
  console.log(ketValuePairs);
  return count;
}

let arr = [4, 3, 1, 2];
minimumSwaps(arr);
