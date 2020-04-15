const numIslands = (grid) => {
  let copy = grid;
  let lands = 0;
  const findIsland = (copy, i, j) => {
    for (let move = j; j < copy[i].length; move += 1) {
      const curr = copy[i][move];

      if (curr === "1") {
        copy[i][move] = "0";
        findIsland(copy, i, move + 1);
      } else {
        break;
      }
    }

    for (let move = i; move < copy.length; move += 1) {
      const curr = copy[move][j];

      if (curr === "1") {
        copy[move][j] = "0";
        findIsland(copy, move + 1, j);
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
// numIslands([
//   ["1", "1", "0", "0", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "1", "0", "0"],
//   ["0", "0", "0", "1", "1"],
// ]);

numIslands([
  ["1", "1", "1"],
  ["1", "0", "1"],
  ["1", "1", "1"],
]);
