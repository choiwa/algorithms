const sortArrayByParity = (A) => {
  const array = A;
  const even = [];
  const odd = [];

  for (let i = 0; i < array.length; i += 1) {
    const curr = array[i];
    if (curr % 2 !== 0) {
      odd.push(curr);

    } else {
      even.push(curr);
    }
  }

  return even.concat(odd);
};

sortArrayByParity([0, 1])