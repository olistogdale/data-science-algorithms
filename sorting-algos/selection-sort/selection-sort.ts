/*
* Problem: Selection Sort
* Approach: Nested for... loops
* Best-case Time: O(n^2)
* Worst-case Time: O(n^2)
* Space: O(1) 
*/

import { arrays } from "../arrays";

function selectionSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  for (let i = 0; i < arr.length - 1; i++) {
    let index = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[index]) {
        index = j;
      }
    }

    const temp = arr[index];
    arr[index] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

console.log(selectionSort(arrays.one));
console.log(selectionSort(arrays.two));
console.log(selectionSort(arrays.three));
console.log(selectionSort(arrays.four));