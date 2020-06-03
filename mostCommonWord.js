const mostCommonWord = (paragraph, banned) => {
  let words = paragraph.match(/\w+/g);
  wordsObj = {};
  bannedObj = banned.reduce((result, item, index) => {
    result[item] = index;
    return result;
  }, {});

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i].toLowerCase();

    if (bannedObj[word] === undefined) {
      wordsObj[word] === undefined
        ? (wordsObj[word] = 1)
        : (wordsObj[word] += 1);
    }
  }

  let keySorted = Object.keys(wordsObj).sort(
    (a, b) => wordsObj[b] - wordsObj[a];
  );
  console.log(wordsObj);

  return keySorted[0];
};

mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"]);
