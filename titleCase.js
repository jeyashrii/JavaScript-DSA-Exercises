function capitalize(str) {
  let result = [];
  const words = str.split(" ");
  for (let word of words) {
    result.push(word[0].toUpperCase() + word.slice(1));
  }
  return result.join(" ");
}

console.log(capitalize("hey how are you"));
