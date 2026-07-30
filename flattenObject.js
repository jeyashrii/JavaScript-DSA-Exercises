function flattenObject(obj) {
  let result = {};
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      let flattened = flattenObject(obj[key]);
      for (let innerkey in flattened) {
        result[`${key}.${innerkey}`] = flattened[innerkey];
      }
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}

const obj = {
  name: "jeyashri",
  adress: {
    city: "chennai",
    pincode: 24362,
  },
  age: 25,
  education: {
    hsc: "biomath",
    bachelors: "it",
  },
};
console.log(flattenObject(obj));
console.log(JSON.stringify(flattenObject(obj)));
// All object keys in JavaScript are strings.
// The console omits quotes for valid identifiers like name or age for readability.
// Keys containing special characters like . are shown with quotes.
// If you want all keys displayed as strings, JSON.stringify() will show them that way.");
