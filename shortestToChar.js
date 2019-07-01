var shortestToChar = function (S, C) {
  let distance = 100001; // make the distance of out range initially
  let shortestDistance = [];

  // checking distance from left to right
  for (let i = 0; i < S.length; i += 1) {
    let letter = S[i];

    if (letter === C) {
      distance = 0;
    } else {
      distance += 1;
    }

    shortestDistance.push(distance);
  }

  //     checking distance from right to left
  //     compare the distance as the same time

  for (let i = S.length - 1; i >= 0; i -= 1) {

    if (shortestDistance[i] === 0) {
      distance = 0;
    } else {
      distance += 1;
      shortestDistance[i] = Math.min(distance, shortestDistance[i])
    }
  }

  return shortestDistance;
};