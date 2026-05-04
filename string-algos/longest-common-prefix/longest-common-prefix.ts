/*
* Problem: Longest Common Prefix
* Description: 
* Approach: 
* Best-case Time: O()
* Worst-case Time: O()
* Space: O()
*/

function longestCommonPrefix(strArr: string[]): string {  
  let valid = true;
  let prefix: string = '';

  while (valid) {
    let currentChar: string = strArr[0][prefix.length];

    for (let arrIndex = 0; arrIndex < strArr.length; arrIndex++) {  
      if (!strArr[arrIndex][prefix.length] || strArr[arrIndex][prefix.length] !== currentChar) {
        valid = false;
        break;
      }
    }

    if (valid) {
      prefix += currentChar
    }
  }

  return prefix;
}



console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['float', 'flotation', 'floristry']));
console.log(longestCommonPrefix(['flag', '', '']));
console.log(longestCommonPrefix(['flagged']));