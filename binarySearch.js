function b(arr, target) {
  let start = 0,
    end = arr.length - 1;
  arr.sort((a, b) => a - b);
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === target) return mid;
    if (target < arr[mid]) {
      end = mid - 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    }
  }
  return -1;
}
console.log(b([12, 3, 4, 5, 6, 8, 2], 8));
