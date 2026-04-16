/*
* Problem: Move Zeroes
* Approach: Two pointers
* Best-case Time: O(n)
* Worst-case Time: O(n)
* Space: O(1) 
*/

const array1 = [3,6,0,0,0,5];
const array2 = [0,1,0,1,3,1];
const array3 = [0];
const array4 = [5];

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

console.log(array1)
console.log(array2)
console.log(array3)
console.log(array4);