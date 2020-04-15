function insertionSort(nums) {
  for (let i = 1; i < nums.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (nums[i] < nums[j]) {
        const spliced = nums.splice(i, 1);
        nums.splice(j, 0, spliced[0])
      }
    }
  }
}

let nums = [5, 3, 8, 2, 6, 4, 7, 9, 1, 10];

insertionSort(nums);

// alternative solution
function insertionSort(nums) {
  for (let i = 0; i < nums.length; i += 1) {
    let curr = nums[i];

    for (var j = i - 1; j >= 0 && nums[j] > curr; j--) {
      nums[j + 1] = nums[j];
    }
    nums[j + 1] = curr;
  }

  return nums;
}

const nums = [54, 26, 93, 17, 77, 31, 44, 55, 20]
insertionSort(nums)