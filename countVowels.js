// ---Directions
// --write a program that returns the number of vowels in a given String
// ---example
// ---'HI THERE"-3
// ---"HOW ARE yoU?"-5
// ---"CODING MONEY"-4
//-----------------------------with RegEx----------------------------------------//
// function countVowels(str) {
//   const matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
// or
// const matches=str.match(/[aeiou]/gi) ||0;
// return matches.length;
// match returns array of matches (character that are in th pattern which matches the string)g-global flag, i-case insensitive.if no matches found it returns null
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

let str = "jeyashru";
console.log(str[0]);
