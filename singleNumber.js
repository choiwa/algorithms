var singleNumber = function (nums) {
  const obj = {};

  for (let i = 0; i < nums.length; i += 1) {
    const currentNum = nums[i];
    if (obj[currentNum] === undefined) {
      obj[currentNum] = 1;
    } else {
      obj[currentNum] += 1;
    }
  }

  for (const property in obj) {
    if (obj[property] === 1) {
      return property;
    }
  }
};
