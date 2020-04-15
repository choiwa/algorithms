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


// alternative 
const sortArrayByParity = (A) => {
  if (A.length === 1) return A
  let t 
  let left = 0
  let right = A.length - 1 
  while (left < right) { 
      if (A[left] % 2 !== 0) {  
          while (left < right) { 
              if (A[right] % 2 === 0) { 
                  t = A[right];
                  A[right] = A[left];
                  A[left] = t;
                  break
              } else {
                  right--;
              }
          }
      }
      left++
  }
  return A;
};


sortArrayByParity([3,1,2,4])