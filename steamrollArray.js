function steamrollArray(arr) {
  // I'm a steamroller, baby
  const finalArr = [];

  function recursion(arr) {
    if (!Array.isArray(arr)) {
      finalArr.push(arr);
      return;
    }
    for (let i = 0; i < arr.length; i += 1) {
      recursion(arr[i]);
    }
  }

  recursion(arr);

  return finalArr;
}