// Linear Search 

let arr = [ 10, 5, 9, 1, 8, 6, 2, 4, 3, 7];

let key = 3;

function linearSearch(arr, key){

    let n = arr.length;

    for(let i=0; i<n; i++){
        if(arr[i] === key){
            return i;
        }
    }
    return -1;
}


let ans = linearSearch(arr, key);

if(ans === -1){
    console.log("Element not found in the array");
} else{
    console.log("Element found at index: " + ans);
}

// Time Complexity: O(n)  // Space Complexity: O(1)
//  Linear Search: It searches for a key in the array by checking each element one by one. In the worst case, we have to traverse the entire array to find the key or determine that it is not present.