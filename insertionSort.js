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