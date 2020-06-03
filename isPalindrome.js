const isPalindrome = (s) => {
  let beg = 0;
  let end = s.length - 1;

  while (beg < end) {
    while (!/\w+/g.test(s[beg]) && beg < s.length - 1) {
      beg += 1;
    }

    while (!/\w+/g.test(s[end]) && end > 0) {
      end -= 1;
    }

    if (beg < end && s[beg].toLowerCase() !== s[end].toLowerCase()) {
      return false;
    }
    beg += 1;
    end -= 1;
  }

  return true;
};

isPalindrome("A man, a plan, a canal: Panama");
// isPalindrome("race a car")
// isPalindrome(".")
// isPalindrome(".,")
