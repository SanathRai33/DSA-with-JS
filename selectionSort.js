// Selection Sort
// Time Complexity: O(n^2)
let arr = [5, 9, 1, 8, 2, 4, 3];

function selectionSort(arr, n){

    for(let i=0; i<n-1; i++){
        let minIdx = i;

        for(let j=i+1; j<n; j++){

            if(arr[minIdx]>arr[j]){
                minIdx = j;
            }

        }

        if(i !== minIdx){
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }

    }

    return arr;
}

let ans = selectionSort(arr, arr.length);

console.log(ans);