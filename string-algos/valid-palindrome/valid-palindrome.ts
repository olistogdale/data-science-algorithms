/*
* Problem: Valid palindrome
* Description: Check to see if a lowercase string, once all non alphanumeric characters have been removed, reads the same backwards as it does forwards.
* Approach: Two pointers with regex matching
* Best-case Time: O(1)
* Worst-case Time: O(n)
* Space: O(1)
*/

const re = /[^0-9a-z]/;

export function validPalindrome(str: string): boolean {
  const lowerStr = str.toLowerCase();
  
  let i = 0;
  let j = lowerStr.length - 1;

  while (i <= j) {
    if (re.test(lowerStr[i])) {
      i++;
    } else if (re.test(lowerStr[j])) {
      j--;
    } else if (lowerStr[i] === lowerStr[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  
  return true;
}

console.log(validPalindrome('A man, a plan, a canal: Panama'));