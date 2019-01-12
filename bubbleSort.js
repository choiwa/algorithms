// Naive Sorts:
// keep looping and comparing values until the list is sorted
// 1. bubble sort
// 2. Insertion sort
// 3. selection sort

// Divide & conquer sorts
// Recursively divide lists and sort smaller parts of list
// until entire list is sorted
// 1. Mergesort
// 2. Quicksort

function bubbleSort (list) {
    // for the length - 1 to 0
    for (i = list.length - 1; i >= 0; i -= 1) {
        // start from beginning of the list
        for (j = 0; j <= i; j += 1) {
            // compare adjacent pair
            if (list[j] > list[j + 1]) {
                // swap their position if they are not in the right order
                [list[j], list[j + 1]] =  [list[j + 1], list[j]]
            }
        }
    }
    
return list;
}

bubbleSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]);
bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

// time complexity: О(n2)