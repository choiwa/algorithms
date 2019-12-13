function translatePigLatin(str) {
  // loop through str to find vowel
  for (let i = 0; i < str.length; i += 1) {
    if (i === 0 && str[i].match(/['aeiouAEIOU']/)) {
      return str.concat('way');
    }

    if (str[i].match(/['aeiouAEIOU']/)) {
      return str.slice(i, str.length).concat(str.slice(0, i)).concat('ay');
    }
  }

  return str.concat('ay');
}

translatePigLatin('algorithm');
// should return "algorithmway".