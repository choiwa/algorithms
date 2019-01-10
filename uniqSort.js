// uniqSort
// input: [1,5,2,1] => output: [1,2,5]
// input: [4,2,2,3,2,2,2] => output:[2,3,4]

const uniqSort = function(arr) {
    const breadcrumbs = {};
    let uniqArr = [];

    for (let i = 0; i < arr.length; i += 1) {
        let current = arr[i];

        if (breadcrumbs[current] === undefined) {
            breadcrumbs[current] = current;
            uniqArr.push(current);
        }
    }

    return uniqArr.sort((a,b) => a - b);
}

uniqSort([1,5,2,1]);