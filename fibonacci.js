// function fibonacci(n) {
//   let a = 0,
//     b = 1;
//   for (let i = 2; i < n; i++) {
//     let temp = a + b;
//     a = b;
//     b = temp;
//   }
//   return b;
// }

// console.log(fibonacci(6));
//given a number 'n' find the first 'n' elements of the fibonacii sequence
//fibonacci sequence is a sequence in which each number is the sum of two preceding ones
//fibonacci(2)=[0,1]
//fibonacci(3)=[0,1,1]
//fibonacci(7)=[0,1,1,2,3,5,8]

//using for loop
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
console.log(fibonacci(6));
