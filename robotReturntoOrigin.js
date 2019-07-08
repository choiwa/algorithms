// leetcode 657. Robot Return to Origin
const judgeCircle = function judgeCircle(moves) {
  let start = [0, 0];

  for (let i = 0; i < moves.length; i += 1) {
    start = findMove(moves[i], start);
  }

  if (start[0] === 0 && start[1] === 0) {
    return true;
  }

  return false;

};

const findMove = function findMove(move, start) {
  switch (move) {
    case 'R':
      start[0] += 1;
      return start;
    case 'L':
      start[0] -= 1;
      return start;
    case 'U':
      start[1] += 1;
      return start;
    case 'D':
      start[1] -= 1;
      return start;
    default:
      return start;
  }
}