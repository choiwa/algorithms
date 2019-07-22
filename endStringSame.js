function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  const startIndex = str.length - target.length;
  const endIndex = startIndex + target.length;

  return str.substring(startIndex, endIndex) === target;
}

confirmEnding('Bastian', 'n');