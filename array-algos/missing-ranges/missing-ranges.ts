/*
* Problem: Missing Ranges
* Description: Return the shortest sorted list of ranges that exactly covers all the numbers missing from the input array between upper and lower bounds.
* Approach: Loop with extended boundaries
* Best-case Time: O(n)
* Worst-case Time: O(n)
* Space: O(1) 
*/

function findMissingRanges(nums: number[], lower: number, upper: number): number[][] {
  let outputArr: number[][] = [];

  nums.push(upper + 1);
  nums.unshift(lower - 1);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] > 1) {
      outputArr.push([nums[i] + 1, nums[i + 1] - 1]);
    }
  }

  return outputArr;
};