var uniqueOccurrences = function (arr) {
  const counts = {};
  const array = [];

  for (let i = 0; i < arr.length; i += 1) {
    const curr = arr[i]
    if (counts[curr] === undefined) {
      counts[curr] = 1;
    } else {
      counts[curr] += 1;
    }
  }

  for (const key in counts) {
    array.push(counts[key]);
  }

  array.sort(function (a, b) {
    return a - b;
  })

  for (let j = 0; j < array.length - 1; j += 1) {
    const curr = array[j];
    const next = array[j + 1];

    if (curr - next === 0) {
      return false;
    }
  }

  return true;
};