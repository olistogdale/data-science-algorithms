/*
* Problem: Insertion Sort
* Approach: Nested while loop in a for... loop
* Best-case Time: O(n)
* Worst-case Time: O(n^2)
* Space: O(1) 
*/

import { arrays } from '../arrays';

// 'Swapping' Version

function insertionSortSwap(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  for (let i = 1; i < arr.length; i++) {
    let index = i;
    
    while (index > 0 && arr[index] < arr[index - 1]) {
      let temp = arr[index];
      arr[index] = arr[index - 1];
      arr[index - 1] = temp;
      index -= 1;
    }
  }

  return arr;
}

// Canonical version

function insertionSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j -= 1;
    }

    arr[j + 1] = current;
  }

  return arr;
}

console.log(insertionSort(arrays.one));
console.log(insertionSort(arrays.two));
console.log(insertionSort(arrays.three));
console.log(insertionSort(arrays.four));