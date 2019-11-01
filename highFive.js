var highFive = function (items) {
  const studentsScores = [];
  const finalScores = [];

  for (let i = 0; i < items.length; i += 1) {
    let curr = items[i];

    if (studentsScores[curr[0]] === undefined) {
      studentsScores[curr[0]] = [curr[1]];
    } else {
      studentsScores[curr[0]].push(curr[1])
    }
  }

  for (let j = 0; j < studentsScores.length; j += 1) {
    const scores = studentsScores[j];

    if (scores !== undefined) {
      let average;


      average = scores.sort(function (a, b) {
        return b - a
      }).slice(0, 5).reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);
      finalScores.push([j, Math.floor(average / 5)]);
    }
  }

  return finalScores;
};