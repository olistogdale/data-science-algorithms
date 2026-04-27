/*
* Problem: Majority Element
* Description: Given an array nums of size n, return the element that appears more than ⌊n / 2⌋ times (assuming the majority element always exists).
* Approach: Hash map, Sorting
* Best-case Time: O(n)
* Worst-case Time: O(n) (or O(n log n) for Sorting implementation);
* Space: O(n)
*/

const array36: number[] = [2,4,4,2,4,2,4,2,4,2,4,4,4,4];

function majorityElementMap(nums: number[]): number {
  const map = new Map();

  for (let index = 0; index < nums.length; index++) {
    if (map.has(nums[index])) {
      let count = map.get(nums[index]);
      if (count + 1 > nums.length/2) return nums[index];
      map.set(nums[index], count + 1);
    } else {
      map.set(nums[index], 1);
    }
  }

  throw Error('This array does not contain a majority element.')
}

console.log(majorityElementMap(array36));

function majorityElementSort(nums: number[]): number {
  const numsSorted = nums.sort((a, b) => a - b);
  
  return numsSorted[Math.floor(nums.length / 2)];
}

console.log(majorityElementSort(array36));