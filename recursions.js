// basic recursion
// 4 steps
// 1. Identify base(s)
// 2. Identify recursive case(s)
// 3. Return where appropriate
// 4. Write procedures for each 
//    case that bring you closer to base case(s)
let tracker = 0;

var callMe = () => {
    tracker++;
    if (tracker === 3) {
        return 'loops';
    }
    console.log(tracker);

    // must return the value we want or it will return undefined
    return callMe();
}

callMe();

const loopNTimes = (n) => {
    console.log('n=== ', n);
    if (n <= 1) {
        return 'complete';
    }

    return loopNTimes(n - 1);
}

loopNTimes(3);

function computeFactorial(num) {
    if (num === 1) {
        return 1;
    }

    return num * computeFactorial(num - 1);
}

computeFactorial(5);

// Accumulators recursions
function joinELements(array, joinString) {
    function recurse(index, resultSoFar) {
        resultSoFar += array[index];

        if (index === array.length - 1) {
            return resultSoFar;
        }

        return recurse(index + 1, resultSoFar + joinString)
    }

    return recurse(0, "");
}

joinELements(['s', 'cr', 't cod', ' :) :)'], 'e')