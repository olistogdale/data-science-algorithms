/*
* Problem: Valid palindrome 2
* Description: Check to see if a lowercase string, once all non alphanumeric characters have been removed, can be a palindrome (i.e. read the same backwards as it does forwards) with one letter removed.
* Approach: Recursive Two pointers with regex matching
* Best-case Time: O(1)
* Worst-case Time: O(n)
* Space: O(1)
*/

const re2 = /[^0-9a-z]/

function validPalindrome2(str: string, i: number = 0, j: number = str.length - 1, allow: boolean = true): boolean {

  while (i <= j) {
    if (re2.test(str[i])) {
      i++
    } else if (re2.test(str[j])) {
      j--
    } else if (str[i] === str[j]) {
      i++
      j--
    } else if (allow) {
      const result1 = validPalindrome2(str, i, j - 1, false);
      const result2 = validPalindrome2(str, i + 1, j, false);
      if (result1 === false && result2 === false) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  return true;
}

console.log(validPalindrome2('a man, a plant, a canal: panama'))
