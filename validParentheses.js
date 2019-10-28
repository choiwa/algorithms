var isValid = function (s) {
  const matches = {
    ")": "(",
    "}": "{",
    "]": "["
  }
  let stack = [];

  for (let i = 0; i < s.length; i += 1) {
    const letter = s[i];

    if (letter === "(" || letter === "{" || letter === "[") {
      stack.push(letter);
    } else {
      if (matches[letter] !== stack[stack.length - 1]) {
        return false;
      } else {
        stack.pop();
      }
    }

  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};