function myReplace(str, before, after) {
  const words = str.split(' ');

  for (let i = 0; i < words.length; i += 1) {
    if (words[i] === before) {
      if (words[i] === words[i].charAt(0).toUpperCase() + words[i].slice(1)) {
        words[i] = after.charAt(0).toUpperCase() + after.slice(1);
        break;
      } else {
        words[i] = after.charAt(0) + after.slice(1);
        break;
      }
    }
  }

  return words.join(' ');
}

myReplace('This has a spellngi error', 'spellngi', 'spelling');