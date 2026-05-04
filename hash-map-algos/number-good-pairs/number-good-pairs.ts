/*
* Problem: Number of Good Pairs
* Description: Return the number of 'good pairs' of values from an array of integer values (a 'good pair' is a pair of values where arr[i] === arr[j] and i > j).
* Approach: Hash map with Combination formula or Single pass
* Best-case Time: O(n)
* Worst-case Time: O(n)
* Space: O(1)
*/

function pairCombinations(count: number): number {
  return (count * (count - 1)) / 2;
}

function goodPairs(arr: number[]): number {
  let integerCount = new Map();

  for (let int of arr) {
    integerCount.set(int, (integerCount.get(int) ?? 0) + 1);
  }

  let totalSum = 0;

  for (let value of integerCount.values()) {
    if (value > 1) {
      totalSum += pairCombinations(value);
    }
  }

  return totalSum;
}

console.log(goodPairs([1,1,1,2,2,2]));
console.log(goodPairs([1,1,1,3,3,3,4,4]));

function goodPairsSinglePass(arr: number[]): number {
  let frequencies = new Array(101).fill(0);
  let count = 0;

  for (let value of arr) {
    count += frequencies[value];
    frequencies[value]++
  }

  return count;
}

console.log(goodPairsSinglePass([1,1,1,2,2,2]));
console.log(goodPairsSinglePass([1,1,1,3,3,3,4,4]));