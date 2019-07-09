function permute(arr) {
  let result = [];
  let indention = '..';

  const permuteHelper = (arr, arrChosen = []) => {
    if (arr.length === 0) {
      // basecase;
      result.push(arrChosen);
    } else {
      for (let i = 0; i < arr.length; i += 1) {
        // do not modify the arr because we will need to iterate
        // make a copy of the array instead
        const copiedArr = arr.slice();
        // modify the copiedArr arr;
        const itemChosen = copiedArr.splice(i, 1);
        permuteHelper(copiedArr, arrChosen.concat(itemChosen));
      }
    }
  }

  permuteHelper(arr);
  console.log(result);
  return result;
}

permute(['C', 'A', 'T']);