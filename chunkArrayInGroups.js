function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr = [];
  let pointer = 0;

  while (pointer < arr.length) {
    newArr.push(arr.slice(pointer, pointer + size))
    pointer += size;
  }
  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);