/*
* Problem: Missing Ranges
* Description: Return the shortest sorted list of ranges that exactly covers all the numbers missing from the input array between upper and lower bounds.
* Approach: Loop with extended boundaries
* Best-case Time: O(n)
* Worst-case Time: O(n)
* Space: O(1) 
*/

const array31: number[] = [2,4,17,35,80];
const array32: number[] = [-27,-8,0,1,2];
const array33: number[] = [0,1,1,2,4,32];
const array34: number[] = [12,12,12,122];
const array35: number[] = [];

function findMissingRanges(nums: number[], lower: number, upper: number): number[][] {
  let outputArr: number[][] = [];
  let previous = lower - 1;

  for (let i = 0; i <= nums.length; i++) {
    const current = i < nums.length? nums[i] : upper + 1;
    
    if (current - previous > 1) {
      outputArr.push([previous + 1, current - 1]);
    }

    previous = current;
  }

  return outputArr;
};

console.log(findMissingRanges(array31, 0, 100));
console.log(findMissingRanges(array32, -100, 100));
console.log(findMissingRanges(array33, 0, 100));
console.log(findMissingRanges(array34, 0, 200));
console.log(findMissingRanges(array35, -100, 100));
