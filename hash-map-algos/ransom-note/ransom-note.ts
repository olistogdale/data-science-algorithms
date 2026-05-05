/*
* Problem: Ransom Note
* Description: Determine whether a 'ransome note' string can be created from the available characters in a 'magazine' string, returning true if so and false otherwise.
* Approach: Hash map
* Best-case Time: O()
* Worst-case Time: O()
* Space: O()
*/

function ransomNote(ransomNote: string, magazine: string): boolean {
  let map = new Map();

  for (let char of magazine) {
    map.set(char, (map.get(char) ?? 0) + 1);
  }

  for (let char of ransomNote) {
    if (!map.get(char)) return false;
    map.set(char, (map.get(char)) - 1);
  }

  return true;
}

console.log(ransomNote('aa', 'aabbcc')); // equals true 
console.log(ransomNote('aa', 'abc')); // equals false
console.log(ransomNote('', '')); // equals true
console.log(ransomNote('', 'abc')); // equals true
console.log(ransomNote('aa', '')); // equals false

function ransomNoteOptimised(ransomNote: string, magazine: string): boolean {
  const alphaArray = new Array(26).fill(0);
  const codeAtA = 'a'.charCodeAt(0);

  for (let char of magazine) {
    alphaArray[char.charCodeAt(0) - codeAtA]++;
  }

  for (let char of ransomNote) {
    if (alphaArray[char.charCodeAt(0) - codeAtA] === 0) {
      return false
    }
    alphaArray[char.charCodeAt(0) - codeAtA]--;
  }

  return true;
}

console.log(ransomNoteOptimised('aa', 'aabbcc')); // equals true 
console.log(ransomNoteOptimised('aa', 'abc')); // equals false
console.log(ransomNoteOptimised('', '')); // equals true
console.log(ransomNoteOptimised('', 'abc')); // equals true
console.log(ransomNoteOptimised('aa', '')); // equals false
