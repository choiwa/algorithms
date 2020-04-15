const numIslands = (grid) => {
  let copy = grid;
  let lands = 0;
  const findIsland = (copy, i, j) => {
    for (let k = j; k < copy[i].length; k += 1) {
      const box = copy[i][k];

      if (box === "1") {
        copy[i][k] = "0";
        findIsland(copy, i, k);
      } else {
        break;
      }
    }

    for (let l = i + 1; l < copy.length; l += 1) {
      const box = copy[l][j];
      if (box === "1") {
        copy[l][j] = "0";
        findIsland(copy, l, j);
      } else {
        break;
      }
    }
  };

  for (let i = 0; i < copy.length; i += 1) {
    const row = copy[i];

    for (let j = 0; j < row.length; j += 1) {
      const box = copy[i][j];
      if (box === "1") {
        findIsland(copy, i, j);
        lands += 1;
      }
    }
  }

  return lands;
};

// numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]);
numIslands([
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
]);
