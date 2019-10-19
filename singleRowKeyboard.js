var calculateTime = function (keyboard, word) {
  const keyWordObj = {};
  let sum = 0;

  for (let i = 0; i < keyboard.length; i += 1) {
    keyWordObj[keyboard[i]] = i;
  }

  for (let j = 0; j < word.length; j += 1) {
    const letterIdx = keyWordObj[word[j]];
    let previous = undefined;

    if (j === 0) {
      previous = 0;
    } else {
      previous = keyWordObj[word[j - 1]];
    }

    sum += Math.abs(letterIdx - previous);
  }

  return sum;
};