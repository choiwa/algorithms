function pairElement(str) {
  const finalArr = [];
  const pairs = {
    G: "C",
    C: "G",
    A: "T",
    T: "A",
  };

  for (let i = 0; i < str.length; i += 1) {
    finalArr.push([str[i], pairs[str[i]]]);
  }

  return finalArr;
}

pairElement("GCG");
