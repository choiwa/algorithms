var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i += 1) {
    const firstNum = nums[i];

    for (let j = i + 1; j < nums.length; j += 1) {
      const secondNum = nums[j];

      if (firstNum + secondNum === target) {
        return [i, j];
      }
    }
  }
};