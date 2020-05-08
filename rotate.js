const rotate = (nums, k) => {
  if (nums.length === 0) {
    return nums;
  }
  for (let i = 0; i < k; i += 1) {
    let num = nums.pop();
    nums.unshift(num);
  }

  return nums;
};

// rotate([1,2,3,4,5,6,7],3)
// rotate([-1,-100,3,99], 2)
rotate([], 1);
