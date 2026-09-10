//map------------------------------------------------------------------------------------------------------

// Array.prototype.myMap = function (fn) {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(fn(this[i], i, this)); //map always passes current element,index,whole array
//   }
//   return result;
// };

// console.log([1, 2, 3, 4].myMap((i) => i + 1));

// //filter-------------------------------------------------------------------------------------------------

// Array.prototype.myFilter = function (fn) {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     if (fn(this[i])) result.push(this[i]);
//   }
//   return result;
// };

// console.log([1, 2, 3, 4].myFilter((i) => i % 2 === 0));

//reduce----------------------------------------------------------------------------------------------------
// Array.prototype.myReduce = function (fn, init) {
//   let val;
//   let startIndex;
//   //if (!init) val = this[0];here ,init can be 0 or "" or false , which will make this condition falsy and assigns val=this{0} instead of the passed init value
//   if (init === undefined) {
//     val = this[0];
//     startIndex = 1;
//   } else {
//     val = init;
//     startIndex = 0;
//   }
//   for (let i = startIndex; i < this.length; i++) {
//     val = fn(val, this[i]);
//   }
//   return val;
// };

// console.log(
//   [1, 2, 3].myReduce((a, i) => {
//     return a + i;
//   }, 3)
// );
//call , apply , bind are methoids used to explicily set this context of a function . we can execute a function on behalf aof an object the function natively doesnt belong to.
//its basically function borrowing.
//call-----------------------------------------------------------------------------------------------------------------
Function.prototype.myCall = function (context, ...args) {
  //we get all args as an array called args --rest

  context.tempFunc = this;
  //we get the context from function parameter and create a temp context with it and give it the actual function as a property to the temp context

  let result = context.tempFunc(...args);
  //then we again spread the args array here into individual elements
  delete context.tempFunc;
  return result;
};

//apply---------------------------------------------------------------------------------------------------
Function.prototype.myApply = function (context, args) {
  let tempContext = context;
  tempContext.tempFunc = this;
  const result = tempContext.tempFunc(...args);
  delete tempContext.tempFunc;
  return result;
};
//bind ----------------------------------------------------------------------------------------------------------------

let name = { firstName: "jeya", lastName: "shri" };
let name2 = { firstName: "john", lastName: "doe" };

function printName(hometown, state) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " " +
      "from" +
      " " +
      hometown +
      "," +
      state,
  );
}

Function.prototype.myBind = function (context, ...args) {
  let tempFunction = this;

  return function (...newArgs) {
    return tempFunction.apply(context, [...args, ...newArgs]);
  };
};
//Here you're already using the built-in apply(), which itself sets this to context. So there's no need to manually attach the function to the object.

Function.prototype.myBind = function (context, ...args) {
  context.tempFun = this;
  return function (...newArgs) {
    return context.tempFun(...args, ...newArgs);
  };
};
const printMyName = printName.bind(name, "chennai", "tamil nadu");
printMyName();

const printMyName2 = printName.myBind(name2, "paris", "italy");
printMyName2("paris", "italy");

//call-------------------------------------
Function.prototype.myCall = function (...args) {
  let fn = this;
  fn;
};
printName.call(name, "chn", "ind");
// call()
// Need to execute NOW

// ↓

// Temporarily attach

// ↓

// Call

// ↓

// Delete
// bind()
// Don't execute now

// ↓

// Just remember

// - the function
// - the context
// - the initial arguments

// ↓

// Execute later using apply()
Function.prototype.myBind = function (context, ...args) {
  context.tempFun = this;

  return function (...newArgs) {
    return context.tempFun(...args, ...newArgs);
  };
};
function fn1() {
  console.log("fn1");
}

const obj = {};

const b1 = fn1.myBind(obj);
