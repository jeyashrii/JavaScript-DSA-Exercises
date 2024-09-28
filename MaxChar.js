// ---Directions
// --given a string ,return the character that is most commonly used in the string
// ---Eg:findMaxChar("apple")===p
// ---Eg:findMaxChar("abccdddeffff")===4

///------------------------one max char ------------------------//

// function findMaxChar(str) {
//   let charMap = {};
//   let max = 0,
//     maxChar = "";
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
//       maxChar = key;
//     }
//   }
//   return maxChar;
// }

// console.log(findMaxChar("applle"));

//------------------------multiple char with same number of occurences-----------//

function findMaxChar(str) {
  let charMap = {};
  let max = 0;
  let maxChars = [];
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
      maxChars = [key];
    } else if (charMap[key] === max) {
      maxChars.push(key);
    }
  }
  return maxChars;
}

console.log(findMaxChar("applle"));
