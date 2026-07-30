// ---Directions
// --given a string ,return the character that is most commonly used in the string
// ---Eg:findMaxChar("apple")===p
// ---Eg:findMaxChar("abccdddeffff")===f

///------------------------one max char ------------------------//

function findMaxChar(str) {
  let charMap = {};
  let max = 0,
    maxChar = "";
  for (let char of str) {
    if (charMap[char]) {
      charMap[char] = charMap[char] + 1;
    } else {
      charMap[char] = 1;
    }
  }

  for (let key in charMap) {
    if (charMap[key] > max) {
      max = charMap[key];
      maxChar = key;
    }
  }
  return maxChar;
}

console.log(findMaxChar("applle"));

//------------------------multiple char with same number of occurences-----------//

// function findMaxChar(str) {
//   let charMap = {};
//   let max = 0;
//   let maxChars = [];
//   for (let char of str) {
//     if (charMap[char]) {
//       charMap[char] = charMap[char] + 1;
//     } else {
//       charMap[char] = 1;
//     }
//   }

//   for (let key in charMap) {
//     if (charMap[key] > max) {
//       max = charMap[key];
//       maxChars = [key];
//does NOT push into the existing array.

//It creates a completely new array:
//array is recreated/reinitialized so only the new maximum remains.
//     } else if (charMap[key] === max) {
//       maxChars.push(key);
//     }
//   }
//   return maxChars;
// }

// console.log(findMaxChar("applle"));

// If a character's count is greater than the current max,
// we found a new winner.

// Update max and reset maxChars to contain only that character.

// If a character's count equals the current max,
// it ties with the current winner, so push it into maxChars.

// If a character's count is less than max,
// ignore it because it cannot be a maximum-frequency character.
