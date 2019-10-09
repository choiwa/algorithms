var maxSubArray = function (nums) {
  let sum = 0;
  let max = nums[0];

  for (let i = 0; i < nums.length; i += 1) {
    let curr = nums[i];
    sum += curr;

    if (max < sum) {
      max = sum;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  return max;
  // let output = undefined;

  // for (let i = 0; i < nums.length; i += 1) {
  //   let head = nums.slice(i);
  //   let sum = 0;

  //   for (let j = 0; j < head.length; j += 1) {
  //     sum += head[j];

  //     if (output === undefined || output < sum) {
  //       output = sum;
  //     }
  //   }
  // }

  // return output;
};