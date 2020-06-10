function fearNotLetter(str) {
  for (let i = 0; i < str.length; i += 1) {
    let code = str.charCodeAt(i); // the code at str index i

    if (code !== str.charCodeAt(0) + i) {
      //check the code in order
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

fearNotLetter("abce");
// function fearNotLetter(str) {
//     const alphabet = "abcdefghijklmnopqrstuvwxyz";

//     for (let i = 0; i < alphabet.length; i += 1) {
//       if (str[0] === alphabet[i]){
//         let count = 0;
//         for (let j = i + 1; j < alphabet.length; j += 1) {
//           count += 1;
//           if (str[count] !== alphabet[j]) {
//             return alphabet[j];
//           }
//         }
//       }
//     }
//    return undefined;
//   }

//   fearNotLetter("abce");
