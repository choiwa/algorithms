function steamrollArray(arr) {
  // I'm a steamroller, baby
  let finalArr = [];

  function recursion(arr) {
    if (arr[0][0] !== undefined) {
      recursion(arr[0][0]);
    }

    for (let i = 0; i < arr.length; i += 1) {
      finalArr.push(arr[i]);
    }
  }

  return finalArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
