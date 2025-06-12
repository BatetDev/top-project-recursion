// index.js
import { fibs, fibsRec } from "./fibonacci.js";
import { mergeSort } from "./merge-sort.js";

console.log("Fibonacci Iterative:", fibs(8));
console.log("Fibonacci Recursive:", fibsRec(8));
console.log("Merge Sort:", mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
