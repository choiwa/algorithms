const trap = (height) => {
  let begin = 0;
  let end;
  let count = 0;

  while (begin < height.length) {
    end = begin + 1;

    if (height[begin] > height[end]) {
      let sum = 0;

      for (let i = end; i < height.length; i += 1) {
        if (height[i] >= height[begin]) {
          count += sum;
          begin = i;
          break;
        } else {
          sum += height[begin] - height[end];
        }

        if (i === height.length - 1) {
          begin += 1;
        }
      }
    } else {
      begin += 1;
    }
  }

  return count;
};

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
