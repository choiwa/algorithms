var generateParenthesis = function (n) {
  let combinations = [];

  const bfs = (tempString, openParen, closeParen) => {

    if (openParen === n && closeParen === n) {
      return combinations.push(tempString);
    }

    // continues to add open parens until it reaches max;
    if (openParen < n) {
      bfs(tempString + "(", openParen + 1, closeParen);
    }

    // as long as we have enough open parens we can close it with no problem;
    if (openParen > closeParen) {
      bfs(tempString + ")", openParen, closeParen + 1);
    }
  }

  bfs("", 0, 0);


  return combinations;
};