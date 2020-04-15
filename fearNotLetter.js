function fearNotLetter(str) {
  const match = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < match.length; i += 1) {
    let letter = match[i];

    if (letter === str[0]) {
      let count = 1;
      for (let j = i + 1; j < match.length; j += 1) {
        if (match[j] !== str[count]) {
          return match[j];
        }
        count += 1;
      }
    }
  }
  return undefined;
}

fearNotLetter("abce");