//tell whether the substring is a sequence of original string
//s1- substing
//s2- original string
function sequence(s1, s2) {
  let i = 0;
  let j = 0;
  while (i < s1.length && j < s2.length) {
    if (s1[i] === s2[j]) {
      i++;
    }
    j++;
  }
  return i === s1.length;
}

console.log(sequence("ahbi", "jadfhuio"));

//array

function sequence1(a1, a2) {
  let prevIndex = 0;
  for (let i = 0; i < a1.length; i++) {
    let tempIndex = a2.indexOf(a1[i]);
    if (tempIndex < prevIndex) {
      return false;
    }
    prevIndex = tempIndex;
  }
  return true;
}
console.log(sequence1([2, 1, 3, 6], [1, 5, 2, 4, 3, 7, 6, 8]));
