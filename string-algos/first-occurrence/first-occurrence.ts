/*
* Problem: First occurrence
* Description: Find the first occurrence of a substring in a string, returning it's initial index, or -1 if the substring doesn't exist in the string.
* Approach: Brute force nested loop
* Best-case Time: O(n)
* Worst-case Time: O(n^2)
* Space: O(1)
*/

function firstOccurrence(str: string, subStr: string): number {
  let index = - 1;
  
  for (let i = 0; i <= str.length - subStr.length; i++) {
    if (str[i] === subStr[0]) {
      let match = true;
      index = i;
      for (let j = 1; j < subStr.length; j++) {
        if (subStr[j] !== str[i + j]) {
          match = false;
          index = -1;
          break;
        }
      }
      if (match === true) return index;
    }
  }

  return index;
}

console.log(firstOccurrence('sadbuthappy', 'sad'));
console.log(firstOccurrence('notsadbuthappy', 'sad'));
console.log(firstOccurrence('sarkybutnotsad', 'sad'));