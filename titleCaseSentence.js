function titleCase(str) {
  const newString = [];
  const arr = str.split(' ');

  for (let i = 0; i < arr.length; i += 1) {
    let newWord = '';
    const word = arr[i];

    newWord += word[0].toUpperCase();
    newWord += word.substring(1, word.length).toLowerCase();

    newString.push(newWord);
  }

  return newString.join(' ');
}

titleCase("I'm a little tea pot");