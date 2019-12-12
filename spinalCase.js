function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  let words = str.split(/\W|(?=[A-Z])|_/);
  str = words.join('-').toLowerCase();

  return str;
}