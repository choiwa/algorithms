var generateParenthesis = function (n) {
  let combinations = [];

  const bfs = (tempString, openParen, closeParen) => {

    if (openParen === n && closeParen === n) {
      return combinations.push(tempString);
    }

    if (openParen < n) {
      bfs(tempString + "(", openParen + 1, closeParen);
    }

    if (openParen > closeParen) {
      bfs(tempString + ")", openParen, closeParen + 1);
    }
  }

  bfs("", 0, 0);


  return combinations;
};