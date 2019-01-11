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