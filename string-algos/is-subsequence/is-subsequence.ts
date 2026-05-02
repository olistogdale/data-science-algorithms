/*
* Problem: Is Subsequence
* Description: Determine if a longer string contains all the characters of a shorter string in the same order i.e. that the shorter string is a 'subsequence'
* Approach: Two pointers, Binary Search with Preprocessing 
* Best-case Time: O(1) (O(n log n) for Binary search approach)
* Worst-case Time: O(n) (O(n log n) for Binary search approach)
* Space: O(1) (O(n) for Binary search approach)
*/

function isSubsequence(s: string, t: string): boolean {
  if (s.length === 0 && t.length === 0) return true;
  
  let j = 0;

  for (let i = 0; i < t.length; i++) {
    if (s[j] === t[i]) j++
    if (j === s.length) return true;
  }

  return false;
};

console.log(isSubsequence('abc', 'anbncn'));
console.log(isSubsequence('abd', 'anbncn'));
console.log(isSubsequence('', ''));

function isSubsequenceBinary(s: string, t: string): boolean {
  const map = new Map<string, number[]>();
  
  for (let i = 0; i < t.length; i++) {
    map.set(t[i], [...(map.get(t[i]) ?? []), i]);
  }

  let prevIndex = -1;

  for (let char of s) {
    const indices = map.get(char);

    if (!indices) return false;

    let hi = indices.length;
    let lo = 0

    while (lo < hi) {
      const mid = Math.floor((hi + lo) / 2);

      if (indices[mid] <= prevIndex) lo = mid + 1;
      else hi = mid;
    }
    if (lo >= indices.length) return false;

    prevIndex = indices[lo];
  }


  return true;
}

console.log(isSubsequenceBinary('abc', 'anbncn'));
console.log(isSubsequenceBinary('abd', 'anbncn'));
console.log(isSubsequenceBinary('', ''));