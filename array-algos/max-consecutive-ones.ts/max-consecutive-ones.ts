/*
* Problem: Max Consecutive Ones
* Description: Check a binary array, returning the maximum number of consecutive '1' values in the array
* Approach: Running counter
* Best-case Time: O(n)
* Worst-case Time: O(n)
* Space: O(1) 
*/

const array19: number[] = [1,1,0,1,1,1];
const array20: number[] = [1,0,1,0,1,0];
const array21: number[] = [1,1,1,1,1,1];
const array22: number[] = [0,0,0,0,0,0];
const array23: number[] = [1];
const array24: number[] = [0];
const array25: number[] = [];

function maxConsecutiveOnes(nums: number[]): number {
  let maxOnes = 0;
  let countOnes = 0;
  
  for (let value of nums) {
    if (value === 1) {
      countOnes++;
    } else {
      if (countOnes > maxOnes) {
        maxOnes = countOnes;
      }
      countOnes = 0;
    }
  }
  
  maxOnes = Math.max(countOnes, maxOnes);
  return maxOnes;
}

console.log(maxConsecutiveOnes(array19));
console.log(maxConsecutiveOnes(array20));
console.log(maxConsecutiveOnes(array21));
console.log(maxConsecutiveOnes(array22));
console.log(maxConsecutiveOnes(array23));
console.log(maxConsecutiveOnes(array24));
console.log(maxConsecutiveOnes(array25));