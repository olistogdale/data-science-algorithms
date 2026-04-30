/*
* Problem: Rotate String
* Description: Determine if an input string can be repeatedly rotated (have the first letter moved to the end) to match a 'goal' string.
* Approach: Brute force or 
* Best-case Time: O(1)
* Worst-case Time: O(n^2)
* Space: O(n)
*/

function rotateString(str: string, goal: string): boolean {
  if (str.length !== goal.length) return false;
  
  for (let i = 0; i < str.length; i++) {
    let newStr = str.slice(i) + str.slice(0, i);
    if (newStr === goal) return true;
  }

  return false;
}

console.log(rotateString('cdeab', 'abcde'));
console.log(rotateString('cdeab', 'cdeba'));

function rotateStringConcat(str: string, goal:string): boolean {
  if (str.length !== goal.length) return false;

  const concatStr = str + str;

  for (let i = 0; i < str.length; i++) {
    if (concatStr.slice(i, i + str.length) === goal) return true;
  }

  return false;
}

console.log(rotateStringConcat('cdeab', 'abcde'));
console.log(rotateStringConcat('cdeab', 'cdeba'));


