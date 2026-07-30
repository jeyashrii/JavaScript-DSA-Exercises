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
  return str.toLowerCase().replace(/[\W_]/g, "").split("").sort().join("");
}
function anagrams(stringA, stringB) {
  return cleanStr(stringA) === cleanStr(stringB);
}
// .replace(/[^a-z0-9]/gi, "")  i-- case insensitive
// This means:

// Remove anything that is not (^) a letter (a-z) or digit (0-9).

// Example:

// console.log("ahg76@^#* fdsf12@%$6_".replace(/[^a-z0-9]/gi, ""));
// // "ahg76fdsf126"

// This also removes _.
console.log(anagrams("CODING MONEY", "money coding"));
// replace(/[\W]/g, "") --> regEx used with replace
// /.../ --> regex pattern
// \W --> non word chars(spaces,symbols,punctuation)
// \w -->word characters(a-z,A-Z,0-9,_)
//g--> global flag--replace with not just the first one all characters that match tha pattern
//"" --> replace with empty string
//----------------------------solution 2--------------------------------------------------//

function charMap(str) {
  const charMap = {};
  str = str.toLowerCase().replace(/[\W]/g, "");
  for (let char of str) {
    charMap[char] = ++charMap[char] || 1;
    //charMap[char] = (charMap[char]||0)+1
  }
  return charMap;
}
function anagrams(stringA, stringB) {
  //Step 1:Build a charmap for stringA
  const charMapA = charMap(stringA);
  //Step 1:Build a charmap for stringB
  const charMapB = charMap(stringB);
  //Step 3:Compare each character in both the charactermaps
  // For every character in the first map, check:
  // Does the second map have the same character?
  // Do they both have the same count?
  // If all characters pass this check → ✅ it’s an anagram.
  if (Object.keys(charMapA).length !== Object.keys(charMapB).length)
    //map doesnt have length property , Object.keys(obj)-returns array of keys in that obj so we count length from that array.
    return false;
  for (let key in charMapA) {
    if (charMapA[key] !== charMapB[key]) return false;
  }
  return true;
}

console.log(anagrams("RAIL ! SAFETY!", "fairy tales"));

//---------------------------Notes---------------------------------//

//  In summary, key represents the character, and Object.keys(charMapA).length or Object.keys(charMapB).length represents the count of that character.
//  charMap[char] = ++charMap[char] || 1;-----in the first occurence char value will be (zero)undefined so ++undefined is NaN,so || operator will go the next that is it assigns 1 as the value
//  ThE || operator returns the first truthy value it encounters
