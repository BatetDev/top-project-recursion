export function mergeSort(arr) {
  // Base case: arrays with 0 or 1 element are already sorted
  if (arr.length <= 1) return arr;

  // Step 1: Split the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid)); // Recursively sort the left half
  const right = mergeSort(arr.slice(mid)); // Recursively sort the right half

  // Step 2: Merge the sorted halves and return the result
  return merge(left, right);
}

// Helper function. Merges two sorted arrays into one sorted array.
function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  // Compare elements from both arrays and push the smaller one to the result
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add any remaining elements from left or right (if one array is longer)
  return [...result, ...left.slice(i), ...right.slice(j)];
}
