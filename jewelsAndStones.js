var numJewelsInStones = function (J, S) {
  const whatIHave = {};
  let howManyJewelsIHave = 0;

  for (let i = 0; i < S.length; i += 1) {
    const letter = S[i];

    if (whatIHave[letter] === undefined) {
      whatIHave[letter] = 1;
    } else {
      whatIHave[letter] += 1;
    }
  }

  for (let j = 0; j < J.length; j += 1) {
    const letter = J[j];

    if (whatIHave[letter] !== undefined) {
      howManyJewelsIHave += whatIHave[letter];
    }
  }

  return howManyJewelsIHave;
};