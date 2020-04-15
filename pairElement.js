function pairElement(str) {
  const pairs = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C",
  }

  const result = [];

  for (let i = 0; i < str.length; i += 1) {
    const key = str[i];
    result.push([key, pairs[key]]);
  }

  return result;
}

pairElement("GCG");