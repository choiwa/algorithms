// Divide & conquer sorts
// Recursively divide lists and sort smaller parts of list
// until entire list is sorted
// 1. Mergesort
// 2. Quicksort

// merge sort
// merge(L, R)
// []
// L [3, 27], R [9, 10]
// compare L[0] and R[0]
// push the lower value to empty array
// shift the array with the lower value
// repeat until both arrays are empty
function merge(left, right) {
    let array = [];
    
    while (left.length > 0 || right.length > 0) {
        if (left.length === 0 || right.length === 0) {
            return array.concat(left).concat(right);
        }

        if(left[0] > right[0]) {
            array.push(right.shift());
        } else {
            array.push(left.shift());
        }

    }
    return array;
}

function mergeSort(list) {
debugger
    if (list.length === 1) {
        return list;
    }

    let index = Math.floor((list.length) / 2);

    let left = mergeSort(list.slice(0,index))
    let right = mergeSort(list.slice(index));
    
    return merge(left, right);
}

// mergeSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]);
mergeSort([38, 27, 43, 3, 9, 82, 10]);
// mergeSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// mergeSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);