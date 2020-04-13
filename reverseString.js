const reverseString = (s) => {
  let begin = 0;
  let end = s.length - 1;

  while (begin < end) {
    const temp = s[begin];

    s[begin] = s[end];
    s[end] = temp;

    begin += 1;
    end -= 1;
  }

  return s;

};