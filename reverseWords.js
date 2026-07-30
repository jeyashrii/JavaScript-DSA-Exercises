// Given a String str, reverse the string without reversing its individual words. Words are separated by dots.

// Note: The last character has not been '.'.

// Examples :

// Input: str = i.like.this.program.very.much
// Output: much.very.program.this.like.i
// Explanation: After reversing the whole string(not individual words), the input string becomes much.very.program.this.like.i
// Input: str = pqr.mno
// Output: mno.pqr

function reverseWords(str) {
  return str.split(".").reverse().join(".");
}

const s = "much.very.program.this.like.i";
console.log(s.split("."));
console.log(reverseWords("hey.how.are.you"));

console.log("hey how".split(" ").reverse(" ").join(" "));
