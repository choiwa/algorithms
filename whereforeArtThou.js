function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];

  for (let i = 0; i < collection.length; i += 1) {
    let currentProperty = collection[i];
    let add = true;

    for (const key in source) {
      if (currentProperty[key] === undefined || currentProperty[key] !== source[key]) {
        add = false;
        break;
      }
    }

    if (add) {
      arr.push(currentProperty);
    }

  }
  return arr;
}