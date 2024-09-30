// --Description
// ---write aa program that console logs the number from 1 to 10.
// ---But for multiples of 3 it should print "fizz" for multiples of 5 it should print "buzz"
// ---for multiples of both 3 and 5 print "fizzbuzz"

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else console.log(i);
  }
}
fizzBuzz(20);
