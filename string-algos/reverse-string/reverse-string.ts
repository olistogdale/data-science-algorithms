/*
* Problem: Reverse String
* Description: Reverse an input string in place.
* Approach: Two pointers
* Best-case Time: O(n)
* Worst-case Time: O(n)
* Space: O(1) 
*/

const stringArray1: string[] = ['h','e','l','l','o'];
const stringArray2: string[] = ['g','o','o','d','b','y','e'];
const stringArray3: string[] = [];

function reverseString(strArr: string[]) {
  let start: number = 0;
  let end: number = strArr.length - 1;

  while (start < end) {
    [strArr[start], strArr[end]] = [strArr[end], strArr[start]];
    start++
    end--
  }
}

console.log(stringArray1);
console.log(stringArray2);
console.log(stringArray3);

reverseString(stringArray1);
reverseString(stringArray2);
reverseString(stringArray3);

console.log(stringArray1);
console.log(stringArray2);
console.log(stringArray3);