/*
* Problem: Valid anagram
* Description: Determine whether two input strings are anagrams of one another.
* Approach: Map two pass, Array two pass, Map with early return
* Best-case Time: O(n) (except for early return, O(1))
* Worst-case Time: O(n)
* Space: O(1)
*/

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
      map.set(s[i], (map.get(s[i]) ?? 0) + 1);
      map.set(t[i], (map.get(t[i]) ?? 0) - 1);
    }

    for (let value of map.values()) {
      if (value !== 0) return false;
    }

    return true;
};

console.log(isAnagram('ccac', 'aacc'));
console.log(isAnagram('cvbnm', 'mnbvc'));

function isAnagramArr(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const count = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        count[s[i].charCodeAt(0) - 97]++;
        count[t[i].charCodeAt(0) - 97]--;
    }

    for (const c of count) {
        if (c !== 0) return false;
    }
    return true;
}

console.log(isAnagramArr('ccac', 'aacc'));
console.log(isAnagramArr('cvbnm', 'mnbvc'));

function isAnagramOptimised(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) ?? 0) + 1);
  }

  for (let j = 0; j < t.length; j++) {
    map.set(t[j], (map.get(t[j]) ?? 0) - 1);
    if (map.get(t[j]) < 0) return false;
  }

  return true;
}

console.log(isAnagramOptimised('ccac', 'aacc'));
console.log(isAnagramOptimised('cvbnm', 'mnbvc'));
