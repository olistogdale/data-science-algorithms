/*
* Problem: Shuffle Array
* Description: Shuffle an array of 2n numbers such that elements are re-ordered like so: 0, n, 1, n + 1... n - 1, 2n - 1
* Approach: Two pointers / Auxiliary array
* Best-case Time: O(n)
* Worst-case Time: O(n)
* Space: O(n)
*/

const array16: number[] = [3,6,2,0,0,5];
const array17: number[] = [2,1,0,2,3,2];
const array18: number[] = [];

function shuffleArray(nums: number[]): number[] {
  const shuffledNums: number[] = [];
  let midIndex = nums.length / 2;

  for (let index = 0; index < nums.length / 2; index++) {
    shuffledNums.push(nums[index]);
    shuffledNums.push(nums[midIndex]);
    midIndex++
  }

  return shuffledNums;
}

console.log(shuffleArray(array16));
console.log(shuffleArray(array17));
console.log(shuffleArray(array18));