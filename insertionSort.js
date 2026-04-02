// Insertion Sort
// Time Complexity: O(n^2)
let arr = [5, 9, 1, 8, 2, 4, 3];

function insertionSort(arr, n) {
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
}

let ans = insertionSort(arr, arr.length);

console.log(ans);
