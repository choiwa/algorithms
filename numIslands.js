const numIslands = (grid) => {
  let islands = 0;

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === "1") {
        islands += 1;
        findIsland(grid, i, j);
      }
    }
  }

  return islands;
};

const findIsland = (grid, i, j) => {
  if (i < 0 || i > grid.length - 1 || j < 0 || j > grid[i].length - 1) {
    return; // out of range;
  }

  if (grid[i][j] === "0") {
    return;
  }

  grid[i][j] = "0";

  findIsland(grid, i - 1, j); // down
  findIsland(grid, i + 1, j); // up
  findIsland(grid, i, j - 1); // left;
  findIsland(grid, i, j + 1); // right;
};

// numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]);
// numIslands([
//   ["1", "1", "0", "0", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "1", "0", "0"],
//   ["0", "0", "0", "1", "1"],
// ]);

// numIslands([
//   ["1", "1", "1"],
//   ["1", "0", "1"],
//   ["1", "1", "1"],
// ]);
numIslands([
  ["1", "1", "1"],
  ["0", "1", "0"],
  ["1", "1", "1"],
]);
