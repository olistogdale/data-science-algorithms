/*
* Problem: Bubble Sort
* Approach: Nested for... loops
* Best-case Time: O(n) (in the case of using 'swapped' trigger, otherwise O(n^2))
* Worst-case Time: O(n^2)
* Space: O(1) 
*/

import { arrays } from '../arrays';

function bubbleSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  for (let j = 0; j < arr.length; j++) {
    let swapped = false;

    for (let i = 0; i < arr.length - 1 - j; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        swapped = true;
      }
    }

    if (!swapped) break;
  }
  return arr;
}

console.log(bubbleSort(arrays.one));
console.log(bubbleSort(arrays.two));
console.log(bubbleSort(arrays.three));
console.log(bubbleSort(arrays.four));