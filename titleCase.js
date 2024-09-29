//Description
//--write a function that accepts a string capitalizes each word in the string
// returns a new array with the capitalized words

// function capitalize(str) {
//   let result = [];
//   const words = str.split(" ");
//   for (let word of words) {
//     result.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return result.join(" ");
// }

// console.log(capitalize("hey how are you"));

function capitalize(str) {
  const words = str.split(" ");
  return words
    .map((word) => word[0].toUpperCase() + word.slice(1)) // Goes through each word, capitalizes first letter, creates a new array
    .join(" "); // Joins the new array of capitalized words into a single string with spaces as separators
}
console.log(capitalize("hey how are you"));
