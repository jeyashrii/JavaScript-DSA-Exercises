function missingNumber(num) {
  const sum = num.reduce((acc, cur) => acc + cur);
  const n = num.length;
  const expected = (n * (n + 1)) / 2;
  return expected - sum;
}

console.log(missingNumber([0, 3, 1, 4]));
