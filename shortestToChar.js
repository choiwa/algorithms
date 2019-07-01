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

  return shortestDistance;
};