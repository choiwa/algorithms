const removeDuplicates = (nums) => {
  if (nums.length === 0) {
    return 0;
  }

  let i = 0;

  for (let j = 1; j < nums.length; j += 1) {
    if (nums[i] !== nums[j]) {
      i += 1;
      nums[i] = nums[j];
    }
  }

  return i + 1;
};

removeDuplicates([1, 1, 2]);
