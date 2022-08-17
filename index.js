function positiveSum(arr) {
  return arr.reduce((acc, curr) => acc + (curr > 0 ? curr : 0), 0);
}
console.log(positiveSum([1,-2,3,4,5]));    // returns 13
console.log(positiveSum([1, 2, 3, 4, 5]));  // returns 15
console.log(positiveSum([]))   // returns 0

