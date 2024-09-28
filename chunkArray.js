//---Description
//Given an array and chunk size,divide the array into subarrays
//where each subarray is of length size

function chunkArray(array, size) {
  let index = 0;
  let result = [];
  // Use a while loop to handle indices
  while (index < array.length) {
    // Slice the array from the current index to index + size
    result.push(array.slice(index, index + size));
    // Increment the index by size to move to the next chunk
    index = index + size;
  }
  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2));
