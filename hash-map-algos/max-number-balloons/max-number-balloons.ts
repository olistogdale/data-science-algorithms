/*
* Problem: Maximum Number of Balloons
* Description: Return the number of possible instances of the word 'balloon' from within the input text.
* Approach: Hash map with target word frequency table
* Best-case Time: O(n)
* Worst-case Time: O(n)
* Space: O(1)
*/

function maxNumberOfBalloons(text: string): number {
  const charCount: number[] = new Array(26).fill(0);
  const charCodeA: number = 'a'.charCodeAt(0);

  for (let char of text) {
    let charIndex = char.charCodeAt(0) - charCodeA;
    charCount[charIndex]++;
  }

  const balloonCharCount: Record<string, number> = { 'b': 1, 'a': 1, 'l': 2, 'o': 2, 'n': 1};
  let result: number = Infinity;

  for (let char in balloonCharCount) {
    result = Math.min(result, Math.floor((charCount[char.charCodeAt(0) - charCodeA]) / balloonCharCount[char]))
  }

  return result;
};

console.log(maxNumberOfBalloons('bartlrlnfsoso'));
console.log(maxNumberOfBalloons('ball'));