// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays

function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  function checkDiff(firstArr, secondArr) {
    for (let i = 0; i < firstArr.length; i += 1) {
      const curr = firstArr[i];
      if (secondArr.indexOf(curr) === -1) {
        newArr.push(curr);
      }
    }
  }

  checkDiff(arr1, arr2);
  checkDiff(arr2, arr1);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);