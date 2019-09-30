var removeVowels = function (S) {
  const obj = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true
  }

  let newString = "";

  for (let i = 0; i < S.length; i += 1) {
    const letter = S[i];
    if (obj[letter] === undefined) {
      newString += letter;
    }
  }

  return newString;
};

// var removeVowels = function(S) {
//     var output = ""
//     var vowels = ['a', 'e', 'i', 'o', 'u'];
//     for(i=0; i<S.length; i++){
//         if(vowels.indexOf(S[i]) == -1){
//             output = output + S[i];
//         }
//     }
//     return output;

//     console.log(output)

// };