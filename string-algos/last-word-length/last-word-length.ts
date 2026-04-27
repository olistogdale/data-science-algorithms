/*
* Problem: Length of last word in string
* Description: Find the length of the last word in a string.
* Approach: Splitting + Regex or Counting
* Best-case Time: O(n)
* Worst-case Time: O(n)
* Space: O(n) (or O(1) in the case of Counting)
*/

const sentence1 = 'the quick brown dog jumped';
const sentence2 = 'the  quick  brown  dog  jumped';
const sentence3 = ' the quick brown dog jumped ';

function lastWordLengthSplit(str: string):number {
  const words = str.split(/\s+/);
  
  let i = words.length - 1;

  while (!words[i].length) {
    i--
  }

  return words[i].length;
}

console.log(lastWordLengthSplit(sentence1));
console.log(lastWordLengthSplit(sentence2));
console.log(lastWordLengthSplit(sentence3));

function lastWordLengthCount(str: string): number {
  let count = 0;
  let scanned = false;

  for (let index = str.length - 1; index >= 0; index--) {
    if (str[index] !== ' ') {
      count++
      scanned = true;
    } else if (str[index] === ' ' && scanned === true) {
      break;
    }
  }

  return count;
}

console.log(lastWordLengthCount(sentence1));
console.log(lastWordLengthCount(sentence2));
console.log(lastWordLengthCount(sentence3));