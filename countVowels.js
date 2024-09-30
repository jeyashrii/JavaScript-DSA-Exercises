// ---Direcions
// --write a program that returns the number of vowels in a given String
// ---example
// ---'HI THERE"-3
// ---"HOW ARE yoU?"-5
// ---"CODING MONEY"-4
//-----------------------------with RegEx----------------------------------------//
// function countVowels(str) {
//   const matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
// }

// console.log(countVowels("CODING MONEY"));

//-----------------------------without RegEx----------------------------------------//
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("HI THERE"));
