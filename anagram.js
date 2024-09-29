//-Description
//--Check to see  if two provided strings are anagram of one another
//--one string is anagram of another if it uses the same characters in same quantity
//--only consider characters not spaces or punctuations
//--Uppercase is same as lowercase
// example
//---anagrams("CODING MONEY", "money coding")-true
//---anagrams("RAIL ! SAFETY!", "fairy tales")-true
//---anagrams("Hi there", "Bi there")-false

//----------------------------solution 1--------------------------------------------------//
function cleanStr(str) {
  return str.toLowerCase().replace(/[\W]/g, "").split("").sort().join("");
}
function anagrams(stringA, stringB) {
  return cleanStr(stringA) === cleanStr(stringB);
}

console.log(anagrams("CODING MONEY", "money coding"));
//----------------------------solution 2--------------------------------------------------//

// function charMap(str) {
//   const charMap = {};
//   str = str.toLowerCase().replace(/[\W]/g, "");
//   for (let char of str) {
//     charMap[char] = ++charMap[char] || 1;
//   }
//   return charMap;
// }
// function anagrams(stringA, stringB) {
//   //Step 1:Build a charmap for stringA
//   const charMapA = charMap(stringA);
//   //Step 1:Build a charmap for stringB
//   const charMapB = charMap(stringB);
//   //Step 3:Compare each character in both the charactermaps
//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length)
//     return false;
//   for (let key in charMapA) {
//     if (charMapA[key] !== charMapB[key]) return false;
//   }
//   return true;
// }

//console.log(anagrams("RAIL ! SAFETY!", "fairy tales"));

//---------------------------Notes---------------------------------//

//  In summary, key represents the character, and charMapA[key] or charMapB[key] represents the count of that character.
//  The for...in loop iterates over the keys (characters), compares their counts in both character maps,
//  and returns false if there's a mismatch in counts.
//  The order of the keys doesn't affect the comparison, just the counts of each character!
//  charMap[char] = ++charMap[char] || 1;-----in the first occurence char value will be (zero)undefined so ++undefined is NaN,so || operator will go the next that is it assigns 1 as the value
//  ThE || operator returns the first truthy value it encounters
