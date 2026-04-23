/*
* Problem: Third Distinct Maximum
* Description: Return the third distinct maximum value from an array, returning the first distinct maximum is none is found.
* Approach: Sorted window of maximums
* Best-case Time: O(n)
* Worst-case Time: O(n)
* Space: O(1) 
*/

const array26: number[] = [1,1,2,3,4,4];
const array27: number[] = [1,1,1,1,1,1];
const array28: number[] = [3,5,6];
const array29: number[] = [0,1];
const array30: number[] = [-1,-2,-3,-4];

function thirdMax(nums: number[]): number {
    let firstMax: number = -Infinity;
    let secondMax: number = -Infinity;
    let thirdMax: number = -Infinity;

    for (let index = 0; index < nums.length; index++) {
      if (nums[index] === firstMax || nums[index] === secondMax || nums[index] === thirdMax) {
        continue;
      } else if (nums[index] > firstMax) {
        thirdMax = secondMax;
        secondMax = firstMax;
        firstMax = nums[index];  
      } else if (nums[index] < firstMax && nums[index] > secondMax) {
        thirdMax = secondMax;
        secondMax = nums[index];
      } else if (nums[index] < secondMax && nums[index] > thirdMax) {
        thirdMax = nums[index];
      }
    }

    if (thirdMax !== -Infinity) return thirdMax;
    return firstMax;
};

console.log(thirdMax(array26));
console.log(thirdMax(array27));
console.log(thirdMax(array28));
console.log(thirdMax(array29));
console.log(thirdMax(array30));