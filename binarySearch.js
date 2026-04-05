// Binary Search

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let key = 3;

function binarySearch(arr, key){

    let left = 0;
    let right = arr.length - 1;

    while(left <= right){

        let mid = Math.floor((left + right) / 2);

        if(arr[mid] === key){
            return mid;
        }else if(arr[mid] < key){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return -1;
}

let ans = binarySearch(arr, key);

if(ans === -1){
    console.log("Element not found in the array");
} else{
    console.log("Element found at index: " + ans);
}

// Time Complexity: O(log n)  // Space Complexity: O(1)
// Binary Search: It works on sorted arrays by repeatedly dividing the search interval in half. If the key is less than the middle element, it continues searching in the left half; if it's greater, it continues in the right half. This process continues until the key is found or the search interval is empty.