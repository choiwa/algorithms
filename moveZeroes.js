var moveZeroes = function (nums) {
  let zeros = [];

  while (nums.indexOf(0) !== -1) {
    nums.splice(nums.indexOf(0), 1);
    zeros.push(0);
  }

  return nums.push(...zeros);
};