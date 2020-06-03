const multiply = (num1, num2) => {
  if (num1 === "0" || num2 === "0") {
    return "0";
  }

  let answer = Array(num1.length + num2.length - 1).fill(0);
  let remainder = 0;

  for (let i = num1.length - 1; i >= 0; i -= 1) {
    for (let j = num2.length - 1; j >= 0; j -= 1) {
      let num = num1[i] * num2[j] + remainder + answer[i + j];
      answer[i + j] = num % 10;
      remainder = Math.floor(num / 10);

      if (j === 0 && i > 0 && remainder > 0) {
        answer[i + j - 1] += remainder;
        remainder = 0;
      }
    }
  }

  if (remainder > 0) {
    answer.unshift(remainder);
  }

  return answer.join("");
};

multiply("9", "9");
