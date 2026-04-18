/*
* Problem: Move Zeroes
* Description: Parse an array of numbers in place such that all elements equal to zero are moved to the end of the array.
* Approach: Two pointers
* Best-case Time: O(n)
* Worst-case Time: O(n)
* Space: O(1) 
*/

const array1: number[] = [3,6,0,0,0,5];
const array2: number[] = [0,1,0,1,3,1];
const array3: number[] = [0];
const array4: number[] = [5];
const array5: number[] = [];

function moveZeroes(arr: number[]): void {
  if (arr.length <= 1) return;

  let zeroPosition = 0

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] !== 0) {
      if (index !== zeroPosition) {
        [arr[index], arr[zeroPosition]] = [arr[zeroPosition], arr[index]];
      }
      zeroPosition++
    }
  }
}

moveZeroes(array1);
moveZeroes(array2);
moveZeroes(array3);
moveZeroes(array4);
moveZeroes(array5);

console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);
console.log(array5);