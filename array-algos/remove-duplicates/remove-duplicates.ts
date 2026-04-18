/*
* Problem: Remove duplicates
* Description: Parse a sorted, non-decreasing array of duplicated numbers (optionally, in place) such that one element of each value is moved to the front of the array, with order preserved. Return the number of unique values.
* Approach: Hash Set, Two Pointers
* Best-case Time: O(n)
* Worst-case Time: O(n)
* Space: Hash Set O(n), Two Pointers O(1) 
*/

const array11: number[] = [1,1,2,3,3,4];
const array12: number[] = [1,1,1,1,1,1];
const array13: number[] = [1,2,3,4,5,6];
const array14: number[] = [1];
const array15: number[] = []; 

// Hash Set

function removeDuplicatesHash(nums: number[]): number {
  if (nums.length === 0) return 0;

  const numberSet = new Set (nums);

  return numberSet.size
}

console.log(removeDuplicatesHash(array11));
console.log(removeDuplicatesHash(array12));
console.log(removeDuplicatesHash(array13));
console.log(removeDuplicatesHash(array14));
console.log(removeDuplicatesHash(array15));

// Two Pointers

function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;
  
  let count = 1

  for (let index = 1; index < nums.length; index ++) {
    if (nums[index] !== nums[count-1]) {
      nums[count] = nums[index];
      count++
    }
  }

  return count;
};

console.log(removeDuplicates(array11));
console.log(removeDuplicates(array12));
console.log(removeDuplicates(array13));
console.log(removeDuplicates(array14));
console.log(removeDuplicates(array15));