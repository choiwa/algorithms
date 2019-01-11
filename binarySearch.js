// return index of the target if matched

function binarySearch(array, target) {
    let min = 0;
    let max = array.length - 1;
    let guess = Math.floor((array.length - 1) / 2) // [2, 6, 7, 90, 103] length === 5 guess = 2

    while (min < max) {
        console.log(array.slice(min, max + 1));
        let currentNum = array[guess];

        if (currentNum === target) {
            console.log('index of match', guess)
            return guess;
        }

        // if target is larger, cut the array from the left by moving min
        if (currentNum < target) {
            min = guess + 1;
        } else {
            max = guess - 1;
        }
        guess = Math.floor(((max - min) / 2) + min);
    }

    return -1;
}

binarySearch([2, 6, 7, 90, 103, 430, 500, 691, 1000, 5000], 500);

function binarySearchIndex () {
    let index = 0;

    return recursiveBinarySearch = (array, target) => {
        let guess = Math.floor((array.length - 1) / 2);
    
        if (array.length === 0) {
            return -1;
        }
    
        if (target === array[guess]) {
            return guess + index;
        }
    
        if (array[guess] < target) {
            index += guess + 1;
            return recursiveBinarySearch(array.slice(guess + 1, array.length), target);
        } else {
            return recursiveBinarySearch(array.slice(0, guess), target);
    
        }
    }
}



var result = binarySearchIndex();
result([2, 6, 7, 90, 103, 430, 500, 691, 1000, 5000], 430);
//        [2, 6, 7, 90, 103, 430, 500, 691, 1000, 5000] // guess = 4
// index += 4 + 1
// 103 < 500
//                          [430, 500, 691, 1000, 5000] guess = 2
// 691 > 500
// index - 2
// [430, 500]