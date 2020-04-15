function mutation(arr) {
  let obj = {};

  for (let i = 0; i < arr[0].length; i += 1) {
    obj[(arr[0][i].toLowerCase())] = true;
  }

  for (let j = 0; j < arr[1].length; j += 1) {
    let curr = arr[1][j].toLowerCase();

    if(obj[curr] === undefined) {
      return false;
    }
  }

  return true;
}

mutation(["hello", "hey"]);