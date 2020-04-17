const trap = (height) => {
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let count = 0;
  let leftMax = 0;
  let rightMax = 0;

  while (leftPointer < rightPointer) {
    if (height[leftPointer] < height[rightPointer]) {
      if (height[leftPointer] > leftMax) {
        leftMax = height[leftPointer];
      } else {
        count += leftMax - height[leftPointer];
      }

      leftPointer += 1;
    } else {
      if (height[rightPointer] > rightMax) {
        rightMax = height[rightPointer];
      } else {
        count += rightMax - height[rightPointer];
      }
      rightPointer -= 1;
    }
  }

  return count;
};

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
