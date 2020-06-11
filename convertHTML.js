function convertHTML(str) {
  let convertedString = "";
  const library = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&apos;",
    '"': "&quot;",
  };

  for (let i = 0; i < str.length; i += 1) {
    if (library[str[i]]) {
      convertedString += library[str[i]];
    } else {
      convertedString += str[i];
    }
  }

  return convertedString;
}

convertHTML("Dolce & Gabbana");
