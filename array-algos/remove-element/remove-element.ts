/*
* Problem: Remove elements
* Description: Parse an array of numbers in place such that all elements equal to val are moved to the end of the array. Return the number of elements that are not equal to val. 
* Approach: Two pointers
* Best-case Time: O(n)
* Worst-case Time: O(n)
* Space: O(1) 
*/

const array6: number[] = [3,6,2,0,0,5];
const array7: number[] = [2,1,0,2,3,2];
const array8: number[] = [0];
const array9: number[] = [];

function removeElement(nums: number[], val: number): number {
  let count = nums.length - 1;
  let index = 0;

  while (index <= count) {
    if (nums[index] === val) {
      [nums[index], nums[count]] = [nums[count], nums[index]];
      count--
    } else {
      index++
    }
  }

  return count + 1
}

console.log(removeElement(array6, 0));
console.log(removeElement(array7, 2));
console.log(removeElement(array8, 0));
console.log(removeElement(array8, 1));
console.log(removeElement(array9, 0));