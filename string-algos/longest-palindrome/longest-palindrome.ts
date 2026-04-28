


function longestPalindromeMap(str: string): number {
  const map = new Map<string, number>();
  
  for (let i = 0; i < str.length; i++) {
    map.set(str[i], (map.get(str[i]) ?? 0) + 1)
  }

  let palindromeCount = 0;
  let additionalLetter = false;

  for (let value of map.values()) {
    if (value % 2 === 0) {
      palindromeCount += value;
    } else {
      palindromeCount += value - 1;
      additionalLetter = true;
    }
  }

  return additionalLetter ? palindromeCount + 1 : palindromeCount;
};

console.log(longestPalindromeMap('aabbaac'));
console.log(longestPalindromeMap('aabbaa'));
console.log(longestPalindromeMap('ccc'));
console.log(longestPalindromeMap('a'));

function longestPalindromeSet(str: string): number {
  const set = new Set();
  let palindromeCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (set.has(str[i])) {
      palindromeCount += 2;
      set.delete(str[i]);
    } else {
      set.add(str[i]);
    }
  }

  return (set.size > 0) ? palindromeCount + 1 : palindromeCount;
}

console.log(longestPalindromeSet('aabbaac'));
console.log(longestPalindromeSet('aabbaa'));
console.log(longestPalindromeSet('ccc'));
console.log(longestPalindromeSet('a'));