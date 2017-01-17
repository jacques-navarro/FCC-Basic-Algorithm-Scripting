//Return Largest Numbers in Arrays
//https://www.freecodecamp.com/challenges/return-largest-numbers-in-arrays
function largestOfFour(arr) {
  // You can do this!
  var maxNum = [];
  for(var i =0; i < arr.length; i++) {
    maxNum.push(Math.max(...arr[i]));
    }
  return maxNum;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
