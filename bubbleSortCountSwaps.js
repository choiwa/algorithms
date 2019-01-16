function countSwaps(a) {
  let swaped = false;
  let count = 0;

  for (let i = a.length - 1; i >= 0; i--) {
    swaped = false;
    console.log("array", a);
    for (let j = 0; j < i; j += 1) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        count++;
        swaped = true;
      }
    }

    if (swaped === false) {
      return count;
    }
  }
}

countSwaps([6, 4, 1]);

//             console.log(`Array is sorted in ${numSwaps} swaps.`);
//             console.log(`First Element: ${a[0]}`);
//             console.log(`Last Element: ${a[a.length -1 ]}`);
