// index.js
const { fibs, fibsRec } = require("./fibonacci");
const { mergeSort } = require("./merge-sort");

console.log("Fibonacci Iterative:", fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log("Fibonacci Recursive:", fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log("Merge Sort:", mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [0, 1, 1, 2, 3, 5, 8, 13]
