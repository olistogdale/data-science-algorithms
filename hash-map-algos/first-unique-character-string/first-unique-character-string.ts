/*
* Problem: First Unique Character in a String
* Description: Return the index of the first unique (i.e. unrepeated) character in the input string, or -1 if there is no unique character.
* Approach: Hash map/Frequency Array
* Best-case Time: O(n)
* Worst-case Time: O(n)
* Space: O(1)
*/

function firstUniqueChar(str: string): number {
  const alphaFreq: number[] = new Array(26).fill(0);
  const codeAtA = 'a'.charCodeAt(0);

  for (let char of str) {
    const code = char.charCodeAt(0) - codeAtA;
    alphaFreq[code]++;
  }

  for (let j = 0; j < str.length; j++) {
    let alphaIndex = str[j].charCodeAt(0) - codeAtA;
    if (alphaFreq[alphaIndex] === 1) {
      return j;
    }
  }

  return -1
}

console.log(firstUniqueChar('apparition'));
console.log(firstUniqueChar('tangentially'));
console.log(firstUniqueChar('abba'));