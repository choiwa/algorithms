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

// factorial recursion
function computeFactorial(num) {
    if (num === 1) {
        return 1;
    }

    return num * computeFactorial(num - 1);
}

computeFactorial(5);

// factorial memorization
let memorize = (fn) => {
    let cache = {};
    // cache = {5: 5 * factorial(5 - 1),
    //          4: 4 * factorial(4 - 1),
    //          3: 3 * factorial(3 - 1),
    //          2: 2 * factorial(2 - 1),
    //          1: 1;
    //          }

    return (...args) => {
        let currentFactorial = args[0];

        if (cache[currentFactorial]) {
            return cache[currentFactorial];
        } else {
            let result = fn(currentFactorial);

            cache[currentFactorial] = result;
            return result;
        }
    }
}

// the factorial takes 
// 1. the parameter with n
// 2. the memorize function
const factorial = memorize(
  (x) => {
    if (x === 0) {
      return 1;
    }
    else {
      return x * factorial(x - 1);
    }
  }
);



console.log(factorial(5));



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