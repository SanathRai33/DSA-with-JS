//Flatten Array

let arr = [1, 2, [3, 4], [5, 6], 7, 8];

function flattenArray(arr) {
    let result = [];

    for(let item of arr) {
        if(Array.isArray(item)) {
            result.push(...flattenArray(item));
        } else {
            result.push(item);
        }
    }

    return result;
}

console.log(flattenArray(arr));

// Built in method to flatten array
// let arr2 = [1, 2, [3, 4], [5, 6], 7, 8];
// console.log(arr2.flat(Infinity));

// The flattenArray function takes an array as input and initializes an empty result array. It iterates through each item in the input array, checking if the item is itself an array. If it is, the function calls itself recursively to flatten that sub-array and uses the spread operator to add its elements to the result. If the item is not an array, it is directly pushed to the result. Finally, the function returns the flattened array.