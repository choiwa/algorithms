function uniteUnique(...arr) {
  let concatedArr = [];
  const obj = {};
  const finalArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    concatedArr = concatedArr.concat(arr[i]);
  }

  for (let j = 0; j < concatedArr.length; j += 1) {
    const curr = concatedArr[j];

    if (obj[curr] === undefined) {
      finalArr.push(curr);
      obj[curr] += 1;
    }
  }
  return finalArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);