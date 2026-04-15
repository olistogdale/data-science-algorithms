import { arrays } from "../arrays";

function quickSortFn(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  
  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i])
    } else {
      rightArr.push(arr[i])
    }
  }

  return [...quickSortFn(leftArr), pivot, ...quickSortFn(rightArr)];
}

function quickSort(arr: number[], low: number = 0, high: number = arr.length - 1): void {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
}

function partition(arr: number[], low: number, high: number): number {
  let i = low - 1
  let pivot = arr[high]

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      const temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }

  const temp = arr[high];
  arr[high] = arr[i + 1];
  arr[i + 1] = temp;

  return i + 1
}

const arrayOne = [...arrays.one];
const arrayTwo = [...arrays.two];
const arrayThree = [...arrays.three];
const arrayFour = [...arrays.four];

quickSort(arrayOne);
quickSort(arrayTwo);
quickSort(arrayThree);
quickSort(arrayFour);

console.log(arrayOne, arrayTwo, arrayThree, arrayFour);
