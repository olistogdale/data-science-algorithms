/*
* Problem: Merge Sort
* Approach: Recursive division of arrays, sorted recompilation using a while loop
* Best-case Time: O(n log n)
* Worst-case Time: O(n log n)
* Space: O(n) 
*/

import { arrays } from '../arrays';

function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(arrLeft: number[], arrRight: number[]): number[] {
  const arr: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < arrLeft.length && rightIndex < arrRight.length) {
    if (arrLeft[leftIndex] < arrRight[rightIndex]) {
      arr.push(arrLeft[leftIndex]);
      leftIndex += 1;
    } else {
      arr.push(arrRight[rightIndex]);
      rightIndex += 1;
    }
  }

  arr.push(...arrLeft.slice(leftIndex));
  arr.push(...arrRight.slice(rightIndex));

  return arr;
}

console.log(mergeSort(arrays.one));
console.log(mergeSort(arrays.two));
console.log(mergeSort(arrays.three));
console.log(mergeSort(arrays.four));
