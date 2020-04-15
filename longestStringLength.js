function findLongestWordLength(str) {
  let longestStrLength = 0;
  const arr = str.split(' ');

  for (let i = 0; i < arr.length; i += 1) {
    const currStringLength = arr[i].length;

    if (longestStrLength < currStringLength) {
      longestStrLength = currStringLength;
    }
  }

  return longestStrLength;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');