// Bubble Sort
// Time Complexity: O(n^2)
let arr = [5, 9, 1, 8, 2, 4, 3];

function bubbleSort(arr, n){

    for(let i=0; i<n-1; i++){

        for(let j=0; j<n-i-1; j++){

            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }

        }
    }

    return arr;
}

let ans = bubbleSort(arr, arr.length);

console.log(ans);