/*
* Problem: Transpose Matrix
* Description: Given a matrix of number values, return the transposed matrix (i.e. the matrix 'flipped' over along its main diagonal)
* Approach: Nested for... loops
* Best-case Time: O(n^2)
* Worst-case Time: O(n^2)
* Space: O(1)
*/

function transposeMatrix(matrix: number[][]): number[][] {
  let height = matrix.length;
  let width = matrix[0].length;

  const transposedMatrix = Array.from({ length: width }, () => new Array(height).fill(0));
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      transposedMatrix[j][i] = matrix[i][j];
    }
  }

  return transposedMatrix;
}

console.log(transposeMatrix([[1,2,3],[4,5,6],[7,8,9]])) // returns [[1,4,7],[2,5,8],[3,6,9]]
console.log(transposeMatrix([[1,2,3],[4,5,6]])) // returns [[1,4],[2,5],[3,6]]