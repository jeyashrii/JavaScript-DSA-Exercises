function withSet(arr) {
  let seen = new Set();
  let duplicate = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) duplicate.add(arr[i]);
    else {
      seen.add(arr[i]);
    }
  }
  return duplicate;
}
console.log(withSet([1, 2, 3, 5, 4, 2, 1, 3, 3]));

// with map

function withMap(arr) {
  let map = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = (map[arr[i]] || 0) + 1;
  }
  for (let key in map) {
    if (map[key] > 1) {
      result.push(key);
    }
  }
  return result;
}

function withSort(arr) {
  const array = arr.sort((a, b) => a - b);
  let result = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] === array[i - 1] && array[i] !== array[i - 2]) {
      result.push(array[i]);
    }
  }
  return result;
}
